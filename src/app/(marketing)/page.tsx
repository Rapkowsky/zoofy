import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ZoofyPreview from "@/components/zoofy-preview";

export default function Home() {
	return (
		<main className="bg-[#5DC9A8] min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-5">
			<div className="md:block hidden max-w-[500px] max-[1024px]:flex-1">
				<ZoofyPreview />
			</div>

			<div className="max-[1024px]:flex-1">
				<Logo />
				<h1 className="text-5xl font-semibold my-6 max-w-[500px]">
					Manage your <span className="font-extrabold">pet daycare</span> with
					ease
				</h1>

				<div className="mb-6 md:hidden max-w-[500px] w-full">
					<ZoofyPreview />
				</div>
				<p className="text-2xl font-medium max-w-[600px]">
					Use Zoofy to easily keep track of pets under your care. Get lifetime
					access for $299.
				</p>
				<div className="mt-10 space-x-3">
					<Button asChild>
						<Link href="/signup">Get started</Link>
					</Button>
					<Button asChild variant="secondary">
						<Link href="/login">Log in</Link>
					</Button>
				</div>
			</div>
		</main>
	);
}
