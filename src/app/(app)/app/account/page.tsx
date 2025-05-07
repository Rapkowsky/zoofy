import ContentBlock from "@/components/content-block";
import H1 from "@/components/h1";
import React from "react";
import SignOutBtn from "@/components/sign-out-btn";
import { checkAuth } from "@/lib/server-utils";

export default async function Page() {
	const session = await checkAuth();
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
