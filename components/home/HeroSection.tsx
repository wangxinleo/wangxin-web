import Image from "next/image";

export interface HeroSectionProps {
	title: string;
	subtitle: string;
	imageSrc: string;
	imageAlt: string;
	imageWidth: number;
	imageHeight: number;
}

export default function HeroSection({
	title,
	subtitle,
	imageSrc,
	imageAlt,
	imageWidth,
	imageHeight,
}: HeroSectionProps) {
	return (
		<section className="container mx-auto px-4 py-16 text-center">
			<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
			<p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
				{subtitle}
			</p>
			<div className="relative w-60 h-40 mx-auto mb-16">
				<Image
					src={imageSrc}
					alt={imageAlt}
					width={imageWidth}
					height={imageHeight}
					className="rounded-full bg-teal-500"
				/>
			</div>
		</section>
	);
} 