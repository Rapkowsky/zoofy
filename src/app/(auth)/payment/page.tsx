"use client";

import { createCheckoutSession } from "@/actions/actions";
import H1 from "@/components/h1";
import { Button } from "@/components/ui/button";

export default function Page({ searchParams }) {
	return (
		<main className="flex flex-col items-center space-y-10">
			<H1> Zoofy access requires payment</H1>

			{!searchParams.success && (
				<Button
					onClick={async () => {
						await createCheckoutSession();
					}}>
					But lifetime access for 299$
				</Button>
			)}

			{searchParams.success && (
				<div className="flex flex-col items-center space-y-5 text-green-700">
					<h1 className="text-xl font-bold">Payment successful!</h1>
					<p className="text-lg">You now have lifetime access to Zoofy.</p>
				</div>
			)}

			{searchParams.cancel && (
				<div className="flex flex-col items-center space-y-5 text-red-700">
					<h1 className="text-xl font-bold">Payment cancelled</h1>
					<p className="text-lg">You can try again if you want.</p>
				</div>
			)}
		</main>
	);
}
