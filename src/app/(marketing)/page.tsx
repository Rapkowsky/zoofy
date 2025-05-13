import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ZoofyPreview from "@/components/zoofy-preview";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-[#5DC9A8] p-5 md:flex-row">
            <div className="hidden max-w-[500px] max-[1024px]:flex-1 md:block">
                <ZoofyPreview />
            </div>

            <div className="max-[1024px]:flex-1">
                <Logo />
                <h1 className="my-6 max-w-[500px] text-5xl font-semibold">
                    Manage your{" "}
                    <span className="font-extrabold">pet daycare</span> with
                    ease
                </h1>

                <div className="mb-6 w-full max-w-[500px] md:hidden">
                    <ZoofyPreview />
                </div>
                <p className="max-w-[600px] text-2xl font-medium">
                    Use Zoofy to easily keep track of pets under your care. Get
                    lifetime access for $299.
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
