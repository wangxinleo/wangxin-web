import Link from "next/link";

export interface FooterProps {
	logoText: string;
	twitterLink: string;
	githubLink: string;
	linkedinLink: string;
	instagramLink: string;
	copyrightText: string;
}

export default function Footer({
	logoText,
	twitterLink,
	githubLink,
	linkedinLink,
	instagramLink,
	copyrightText,
}: FooterProps) {
	return (
		<footer className="bg-teal-500 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center justify-center">
					<div className="px-3 py-2 rounded-md bg-white flex items-center justify-center text-teal-500 font-bold text-xl mb-6">
						{logoText}
					</div>
					<div className="flex gap-6 mb-8">
						<Link href={twitterLink} className="hover:text-teal-200 transition-colors">
							Twitter
						</Link>
						<Link href={githubLink} className="hover:text-teal-200 transition-colors">
							GitHub
						</Link>
						<Link href={linkedinLink} className="hover:text-teal-200 transition-colors">
							LinkedIn
						</Link>
						<Link href={instagramLink} className="hover:text-teal-200 transition-colors">
							Instagram
						</Link>
					</div>
					<p className="text-teal-100">{copyrightText}</p>
				</div>
			</div>
		</footer>
	);
} 