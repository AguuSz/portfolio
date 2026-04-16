"use client";

import { motion } from "motion/react";
import { FC, JSX } from "react";
import Image from "next/image";
import { Timeline as TimelineComponent } from "@/components/ui/timeline";
import { FaBook, FaCode, FaLaptopCode } from "react-icons/fa";

export interface TimelineItem {
	id: number;
	type: "work" | "project";
	title: string;
	company: string;
	location: string;
	date: string;
	imageURL: string;
	description: string;
	achievements: string[];
	icon: JSX.Element;
	companyIcon: JSX.Element;
}

export const timelineData: TimelineItem[] = [
	{
		id: 1,
		type: "work",
		title: "DevOps Engineer",
		company: "Iquall Networks",
		location: "Remote — Córdoba, Argentina",
		imageURL: "/iquall.png",
		date: "Mar 2025 - Present",
		description:
			"Multi-cloud infrastructure engineering across AWS and GCP with focus on automation and reliability.",
		achievements: [
			"Architecting and managing multi-cloud infrastructure (AWS/GCP)",
			"Automating OVA delivery pipelines for product distribution",
			"Leading ESXi to Proxmox migration for on-premise environments",
			"Managing Kubernetes clusters (RKE2) with Rancher",
			"Building proactive monitoring stack with Prometheus & OpenObserve",
			"Deploying internal knowledge wiki for team documentation",
		],
		icon: <FaCode className="w-6 h-6 text-primary" />,
		companyIcon: <FaLaptopCode className="w-8 h-8 text-accent-2" />,
	},
	{
		id: 2,
		type: "work",
		title: "Match Admin & Referee — RLCS SAM",
		company: "BLAST",
		location: "Remote (Freelance)",
		imageURL: "/blast.png",
		date: "Oct 2021 - Present",
		description:
			"Match administration and refereeing for Rocket League Championship Series in the South American region, with occasional EU events.",
		achievements: [
			"Officiating competitive matches for RLCS South America",
			"Coordinating with international teams and production staff",
			"Ensuring compliance with tournament rules and fair play standards",
		],
		icon: <FaCode className="w-6 h-6 text-primary" />,
		companyIcon: <FaLaptopCode className="w-8 h-8 text-accent-2" />,
	},
	{
		id: 3,
		type: "work",
		title: "Full Stack Developer",
		company: "Self-employed",
		location: "Villa Carlos Paz, Argentina",
		imageURL: "/freelance.png",
		date: "Jan 2022 - Mar 2025",
		description:
			"Freelance development work building web applications and backend services.",
		achievements: [],
		icon: <FaCode className="w-6 h-6 text-primary" />,
		companyIcon: <FaLaptopCode className="w-8 h-8 text-accent-2" />,
	},
];

export const TimelineElement: FC<{ item: TimelineItem; index: number }> = ({
	item,
	index,
}) => (
	<div className="space-y-6" key={index}>
		<div className="flex items-center gap-4">
			{item.type === "work" && (
				<Image
					src={item.imageURL}
					alt={`${item.company} Logo`}
					width={68}
					height={68}
					className="rounded-md shadow bg-muted p-1"
				/>
			)}
			<div>
				<h3
					title={item.title}
					className="text-lg font-semibold text-foreground">
					{item.title}
				</h3>
				<p className="text-sm text-muted-foreground">
					{item.company} • {item.location}
				</p>
				<p className="text-sm text-muted-foreground">{item.date}</p>
			</div>
		</div>

		<p className="text-sm text-muted-foreground">{item.description}</p>

		<ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
			{item.achievements.map((ach) => (
				<li key={ach}>{ach}</li>
			))}
		</ul>

		{item.type === "project" && (
			<div className="w-full mt-4">
				<div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md bg-background">
					<Image
						src={item.imageURL}
						alt={`${item.title} Architecture`}
						className="object-contain"
						loading="lazy"
						fill
					/>
				</div>
			</div>
		)}
	</div>
);

const Timeline: FC = () => {
	const timelineContent = timelineData.map((item) => ({
		title: item.date,
		content: <TimelineElement key={item.id} item={item} index={item.id} />,
	}));

	return (
		<section
			id="experience"
			className="relative py-20 text-foreground transition-colors overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 -z-10">
				{/* Floating Geometric Shapes */}
				<div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
				<div className="absolute top-60 left-20 w-20 h-20 bg-accent-2/20 rounded-lg rotate-45 animate-bounce"></div>
				<div className="absolute bottom-40 right-1/4 w-16 h-16 bg-primary/15 rounded-full animate-ping"></div>
				<div className="absolute bottom-20 left-1/3 w-24 h-24 bg-accent-2/10 rounded-lg rotate-12 float-animation"></div>

				{/* Grid Pattern */}
				<div className="absolute inset-0 grid-pattern"></div>

				{/* Gradient Orbs */}
				<div className="absolute top-1/3 right-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-accent-2/10 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-l from-accent-2/15 via-primary/10 to-transparent rounded-full blur-2xl"></div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16">
					<h1
						title="Professional Experience & Projects"
						className="text-4xl sm:text-5xl font-bold tracking-tight text-heading-gradient mb-4">
						Professional Experience & Projects
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Highlights of my career and key projects showcasing my skills &
						impact.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="relative w-full">
					<TimelineComponent data={timelineContent} />
				</motion.div>
			</div>
		</section>
	);
};

export default Timeline;
