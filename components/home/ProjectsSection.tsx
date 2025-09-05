import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
	imageSrc: string;
	imageAlt: string;
	title: string;
	description: string;
	tags: string[];
}

export interface ProjectsSectionProps {
	title: string;
	subtitle: string;
	emailLinkText: string;
	emailLinkHref: string;
	projects: ProjectCardProps[];
}

const ProjectCard = ({ project }: { project: ProjectCardProps; }) => (
	<div className="bg-white rounded-lg overflow-hidden shadow-md">
		<div className="h-48 bg-gray-200">
			<Image
				src={project.imageSrc}
				alt={project.imageAlt}
				width={384}
				height={192}
				className="w-full h-full object-cover"
			/>
		</div>
		<div className="p-6">
			<h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
			<p className="text-gray-600 mb-4">{project.description}</p>
			<div className="flex flex-wrap gap-2">
				{project.tags.map((tag, index) => (
					<span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
						{tag}
					</span>
				))}
			</div>
		</div>
	</div>
);

export default function ProjectsSection({
	title,
	subtitle,
	emailLinkText,
	emailLinkHref,
	projects
}: ProjectsSectionProps) {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						{subtitle}
						<Link href={emailLinkHref} className="text-primary hover:underline ml-1">
							{emailLinkText}
						</Link>
						。
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, i) => (
						<ProjectCard key={i} project={project} />
					))}
				</div>
			</div>
		</section>
	);
} 