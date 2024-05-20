import { type ReactNode } from "react";
import { AuthProvider } from "@/ui/components/AuthProvider";

export const metadata = {
	title: "Maelstrom Store",
	description: "Maelstrom Dragon Boat Club storefront e-commerce.",
};

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<main>
			<AuthProvider>{props.children}</AuthProvider>
		</main>
	);
}
