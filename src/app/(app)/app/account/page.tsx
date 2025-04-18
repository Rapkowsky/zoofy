import ContentBlock from "@/components/content-block";
import H1 from "@/components/h1";
import React from "react";

export default function Page() {
	return (
		<main>
			<H1 className="my-8 text-white">Your account</H1>

			<div className="h-[600px]">
				<ContentBlock className="h-[500px] flex justify-center items-center">
					<p>Logged in as...</p>
				</ContentBlock>
			</div>
		</main>
	);
}
