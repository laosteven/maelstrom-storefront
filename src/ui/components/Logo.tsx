"use client";

import { usePathname } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";

const companyName = "Maelstrom Store";

export const Logo = () => {
	const pathname = usePathname();

	if (pathname === "/") {
		return (
			<h1 className="flex items-center font-bold whitespace-nowrap" aria-label="homepage">
				{companyName}
			</h1>
		);
	}
	return (
		<div className="flex items-center font-bold whitespace-nowrap">
			<LinkWithChannel aria-label="homepage" href="/products">
				{companyName}
			</LinkWithChannel>
		</div>
	);
};
