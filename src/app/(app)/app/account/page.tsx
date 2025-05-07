import ContentBlock from "@/components/content-block";
import H1 from "@/components/h1";
import React from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import SignOutBtn from "@/components/sign-out-btn";

export default async function Page() {
	const session = await auth();
	if (!session?.user) {
		redirect("/login");
	}
	return (
		<main>
			<H1 className="my-8 text-white">Your account</H1>

			<div className="h-[600px]">
				<ContentBlock className="h-[500px] flex flex-col justify-center items-center gap-3 ">
					<p>Logged in as {session.user.email}</p>
					<SignOutBtn />
				</ContentBlock>
			</div>
		</main>
	);
}
