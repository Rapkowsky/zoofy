import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<BackgroundPattern />
			<AppHeader />
			{children}

			<AppFooter />
		</div>
	);
}
