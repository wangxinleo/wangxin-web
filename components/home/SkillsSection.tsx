import Image from "next/image";

export interface SkillCardProps {
	iconSvgPath: string;
	title: string;
	description: string;
	skillsTitle: string;
	skills: string[];
	toolsTitle: string;
	tools: string[];
}

export interface SkillsSectionProps {
	cards: SkillCardProps[];
}

const SkillCard = ({ card }: { card: SkillCardProps; }) => (
	<div className="text-center">
		<div className="relative w-16 h-16 mx-auto mb-6">
			<div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
				<svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
					<path d={card.iconSvgPath} />
				</svg>
			</div>
		</div>
		<h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
		<p className="text-gray-600 mb-6">{card.description}</p>

		<p className="text-primary font-medium mb-2">{card.skillsTitle}</p>
		<p className="text-gray-700 mb-4">{card.skills.join(", ")}</p>

		<p className="text-primary font-medium mb-2">{card.toolsTitle}</p>
		<ul className="text-gray-700 space-y-1">
			{card.tools.map((tool, index) => (
				<li key={index}>{tool}</li>
			))}
		</ul>
	</div>
);

export default function SkillsSection({ cards }: SkillsSectionProps) {
	return (
		<section>
			<div className="max-w-6xl mx-auto -mt-40">
				<div className="bg-white rounded-lg shadow-lg p-8 m-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						{cards.map((card, index) => (
							<SkillCard key={index} card={card} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
} 