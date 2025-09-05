import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AchievementCardProps {
	value: string;
	description: string;
	iconSvgPath: string;
}

export interface AchievementsSectionProps {
	title: string;
	subtitle: string;
	achievements: AchievementCardProps[];
}

const AchievementCard: React.FC<AchievementCardProps> = ({ value, description, iconSvgPath }) => {
	return (
		<Card className="text-center">
			<CardHeader>
				<div className="mx-auto bg-gray-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
					<svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
						<path d={iconSvgPath}></path>
					</svg>
				</div>
			</CardHeader>
			<CardContent>
				<CardTitle className="text-4xl font-bold">{value}</CardTitle>
				<p className="mt-2 text-gray-500">{description}</p>
			</CardContent>
		</Card>
	);
};

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ title, subtitle, achievements }) => {
	return (
		<section className="py-12 lg:py-24 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight">{title}</h2>
					<p className="mt-4 text-lg text-gray-600">{subtitle}</p>
				</div>
				<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{achievements.map((achievement, index) => (
						<AchievementCard key={index} {...achievement} />
					))}
				</div>
			</div>
		</section>
	);
};

export default AchievementsSection;