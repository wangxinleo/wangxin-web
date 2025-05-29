import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface HeaderProps {
	logoText: string;
	mentorshipLinkText: string;
	mentorshipLinkHref: string;
	contactButtonText: string;
	contactButtonHref: string;
}

export default function Header({
	logoText,
	mentorshipLinkText,
	mentorshipLinkHref,
	contactButtonText,
	contactButtonHref
}: HeaderProps) {
	return (
		<header className="container mx-auto px-4 py-6 flex items-center justify-between">
			<div className="flex items-center">
				<Link href="/" className="flex items-center">
					<div className="px-3 py-2 rounded-md bg-teal-500 flex items-center justify-center text-white font-bold text-xl">
						{logoText}
					</div>
				</Link>
			</div>
			<nav className="flex items-center gap-6">
				<Link href={mentorshipLinkHref} className="text-gray-700 hover:text-teal-500 transition-colors">
					{mentorshipLinkText}
				</Link>
				<Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6" asChild>
					<Link href={contactButtonHref}>{contactButtonText}</Link>
				</Button>
			</nav>
		</header>
	);
} 