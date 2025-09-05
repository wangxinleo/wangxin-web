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
					<div className="px-3 py-2 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
						{logoText}
					</div>
				</Link>
			</div>
			<nav className="flex items-center gap-6">
				<Link href={mentorshipLinkHref} className="text-gray-700 hover:text-primary transition-colors">
					{mentorshipLinkText}
				</Link>
				<Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6" asChild>
					<Link href={contactButtonHref}>{contactButtonText}</Link>
				</Button>
			</nav>
		</header>
	);
} 