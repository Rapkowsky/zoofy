"use client";
import { logIn, signUp } from "@/actions/actions";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import AuthFormBtn from "./auth-form-button";
import { useFormState } from "react-dom";

type AuthFormProps = {
    type: "logIn" | "signUp";
};

export default function AuthForm({ type }: AuthFormProps) {
    const [signUpError, dispatchSignUp] = useFormState(signUp, undefined);
    const [logInError, dispatchlogIn] = useFormState(logIn, undefined);
    return (
        <form action={type === "logIn" ? dispatchlogIn : dispatchSignUp}>
            <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    name="email"
                    required
                    maxLength={100}
                />
            </div>
            <div className="mb-4 mt-2 space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    name="password"
                    required
                    maxLength={100}
                />
            </div>
            <AuthFormBtn type={type} />
            {signUpError && (
                <p className="mt-2 text-sm text-red-500">
                    {signUpError.message}
                </p>
            )}
            {logInError && (
                <p className="mt-2 text-sm text-red-500">
                    {logInError.message}
                </p>
            )}
        </form>
    );
}
