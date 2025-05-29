"use client";

import { Button } from "@/components/ui/button";

export interface ContactSectionProps {
	title: string;
	subtitle: string;
	buttonText: string;
	buttonLink?: string; // Optional: if button is a link
}

export default function ContactSection({
	title,
	subtitle,
	buttonText,
	buttonLink,
}: ContactSectionProps) {
	// If buttonLink is provided, assume the button should act as a link.
	// This example keeps it simple; for actual navigation, you might use <Link> from next/link asChild.
	// For now, it's just a button. If you need it to be a link, this structure can be expanded.
	const handleButtonClick = () => {
		if (buttonLink) {
			window.location.href = buttonLink;
		} else {
			// Handle button click action if not a link (e.g., open a modal, send a message)
			console.log("Contact button clicked");
		}
	};

	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
					<div className="p-8 md:p-12 text-center">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
						<p className="text-xl text-gray-600 mb-8">{subtitle}</p>
						<Button
							className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-6 text-lg"
							onClick={handleButtonClick} // Added onClick handler
						>
							{buttonText}
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
} 