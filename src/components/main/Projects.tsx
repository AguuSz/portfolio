"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const projectsData = [
	{
		title: "AWS CloudOps Study Bot",
		description:
			"Discord bot to prepare for the AWS Certified CloudOps Engineer – Associate (SOA-C03) exam. Sends a scheduled daily multiple-choice challenge, evaluates answers and tracks study stats — accuracy, streaks and the questions you fail the most — so the next pick prioritizes weak spots. Backed by 397 questions parsed from the Ditectrev open-source question bank.",
		github: "https://github.com/AguuSz/aws-cloudops-discord-bot",
		image: "/aws-cloudops-bot.png",
		tags: ["TypeScript", "discord.js", "SQLite", "Docker"],
	},
];

const Projects = () => {
	return (
		<section id="projects" className="relative py-10 overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-32 left-16 w-28 h-28 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
				<div className="absolute top-80 right-24 w-20 h-20 bg-accent-2/20 rounded-lg rotate-45 animate-bounce"></div>
				<div className="absolute bottom-60 left-1/3 w-16 h-16 bg-primary/15 rounded-full animate-ping"></div>
				<div className="absolute bottom-32 right-1/4 w-24 h-24 bg-accent-2/10 rounded-lg rotate-12 float-animation"></div>

				<div className="absolute inset-0 grid-pattern"></div>

				<div className="absolute top-1/4 right-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-accent-2/10 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-l from-accent-2/15 via-primary/10 to-transparent rounded-full blur-2xl"></div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<h1
						title="My Projects"
						className="text-4xl md:text-5xl font-bold text-heading-gradient mb-4">
						My Projects
					</h1>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-3">
						A collection of infrastructure, automation, and homelab projects.
					</p>
				</motion.div>
			</div>

			<BentoGrid className="max-w-6xl mx-auto [@media(max-width:425px)]:grid-cols-1 md:grid-cols-2 md:auto-rows-auto">
				{projectsData.map((project, idx) => (
					<a
						key={`${project.title}-${idx}`}
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						title={`Open ${project.title} on GitHub`}
						className="relative md:col-span-1 block group rounded-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:ring-2 hover:ring-primary/60 hover:shadow-[0_0_60px_oklch(var(--primary)_/_0.85),0_25px_50px_-10px_oklch(var(--primary)_/_0.7)]">
						<BentoGridItem
							title={project.title}
							description={
								<div className="space-y-3 text-sm text-foreground">
									<p>{project.description}</p>
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="inline-flex items-center rounded-full border border-border px-3 py-0.5 text-xs font-medium text-foreground">
												{tag}
											</span>
										))}
									</div>
									<div className="flex flex-wrap gap-3">
										<span className="inline-flex items-center gap-1 rounded-full bg-secondary text-secondary-foreground px-3 py-0.5 text-xs font-medium group-hover:bg-secondary/80 transition-colors">
											<FaGithub className="size-3" />
											GitHub
										</span>
									</div>
								</div>
							}
							header={
								<div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent-2/10 to-transparent flex items-center justify-center">
									{project.image ? (
										<Image
											src={project.image}
											alt={project.title}
											fill
											sizes="(max-width: 768px) 100vw, 50vw"
											className="object-cover transition-transform duration-300 group-hover:scale-105"
										/>
									) : (
										<FaGithub className="w-16 h-16 text-primary/40" />
									)}
								</div>
							}
						/>
					</a>
				))}
			</BentoGrid>
		</section>
	);
};

export default Projects;
