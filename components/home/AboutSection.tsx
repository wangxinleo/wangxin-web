import Image from "next/image";

export interface AboutSectionProps {
	mainImageSrc: string;
	mainImageAlt: string;
	mainImageWidth: number;
	mainImageHeight: number;
	title: string;
	description: string;
}

export default function AboutSection({
	mainImageSrc,
	mainImageAlt,
	mainImageWidth,
	mainImageHeight,
	title,
	description,
}: AboutSectionProps) {
	return (
		<>
			<div className="max-w-4xl mx-auto">
				<Image
					src={mainImageSrc}
					alt={mainImageAlt}
					width={mainImageWidth}
					height={mainImageHeight}
					className="w-full h-auto"
				/>
			</div>
			{/* 个人介绍区域 */}
			<section className="bg-teal-500 text-white py-40 text-center pb-60">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
						<h2 className="text-lg md:text-xl font-normal leading-relaxed">
							{description}
						</h2>
					</div>
				</div>
			</section>
		</>
	);
} 