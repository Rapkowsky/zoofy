import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "./server-utils";
import { authSchema } from "@/lib/validations";
import { sleep } from "./utils";

const config = {
    pages: {
        signIn: "/login",
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                // runs on login

                // validation
                const validatedFormData = authSchema.safeParse(credentials);
                if (!validatedFormData.success) {
                    return null;
                }

                // extract email and password
                const { email, password } = validatedFormData.data;
                const user = await getUserByEmail(email);
                if (!user) {
                    console.log("No user found");
                    return null;
                }

                const passwordsMatch = await bcrypt.compare(
                    password,
                    user.hashedPassword,
                );

                if (!passwordsMatch) {
                    console.log("Invalid credentials");
                    return null;
                }

                return user;
            },
        }),
    ],
    callbacks: {
        authorized: ({ auth, request }) => {
            // runs on every request with middleware
            const isLoggedIn = Boolean(auth?.user);
            const isTryingToAccessApp =
                request.nextUrl.pathname.includes("/app");

            if (!isLoggedIn && isTryingToAccessApp) {
                return false;
            }

            if (isLoggedIn && isTryingToAccessApp && !auth?.user.hasAccess) {
                return Response.redirect(new URL("/payment", request.nextUrl));
            }

            if (isLoggedIn && isTryingToAccessApp && auth?.user.hasAccess) {
                return true;
            }

            if (
                isLoggedIn &&
                (request.nextUrl.pathname.includes("/login") ||
                    request.nextUrl.pathname.includes("/signUp")) &&
                auth?.user.hasAccess
            ) {
                return Response.redirect(
                    new URL("/app/dashboard", request.nextUrl),
                );
            }

            if (isLoggedIn && !isTryingToAccessApp && !auth?.user.hasAccess) {
                if (
                    request.nextUrl.pathname.includes("/login") ||
                    request.nextUrl.pathname.includes("/signUp")
                ) {
                    return Response.redirect(
                        new URL("/payment", request.nextUrl),
                    );
                }
                return true;
            }

            if (!isLoggedIn && !isTryingToAccessApp) {
                return true;
            }

            return false;
        },
        jwt: async ({ token, user, trigger }) => {
            if (user) {
                //on sign in
                token.userId = user.id;
                token.email = user.email!;
                token.hasAccess = user.hasAccess;
            }
            if (trigger === "update") {
                // on every request
                const userFromDb = await getUserByEmail(token.email);
                if (userFromDb) {
                    token.hasAccess = userFromDb.hasAccess;
                }
            }
            return token;
        },
        session: ({ session, token }) => {
            session.user.id = token.userId;
            session.user.hasAccess = token.hasAccess;

            return session;
        },
    },
} satisfies NextAuthConfig;

export const {
    auth,
    signIn,
    signOut,
    handlers: { GET, POST },
} = NextAuth(config);
