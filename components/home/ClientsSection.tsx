import Image from "next/image";

export interface ClientsSectionProps {
	title: string;
	subtitle: string;
	clients: Array<{ name: string; }>;
}

export default function ClientsSection({
	title,
	subtitle,
	clients
}: ClientsSectionProps) {
	return (
		<section className="bg-gray-50 py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
					{/* 客户标志 1-8 */}
					{Array.from({ length: 8 }).map((_, i) => (
						<div key={i} className="flex items-center justify-center p-4">
							<div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center">
								<span className="text-xl font-bold text-gray-400">客户 {i + 1}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
} 