"use client";

import { motion } from "motion/react";
import { FC, JSX } from "react";
import Image from "next/image";
import { Timeline as TimelineComponent } from "@/components/ui/timeline";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { SiProxmox } from "react-icons/si";

const homelabBullets = [
	"Mesh VPN architecture with Tailscale connecting Proxmox nodes, a remote Raspberry Pi, and personal devices.",
	"Service exposure layer with Cloudflare Tunnels, Zero Trust policies, and Nginx Proxy Manager — automated TLS via Let's Encrypt.",
	"Cloudflare infrastructure as code with Terraform: DNS records, Tunnels, and Zero Trust policies versioned in Git as a dedicated submodule.",
	"Lightweight monitoring with Beszel agents tracking CPU/RAM/disk across nodes, with Discord alerting for anomalies.",
	"Container update automation with dockcheck: weekly cron, Discord notifications.",
	"Network-wide adblock and DNS filtering with Pi-hole, remotely accessible through Tailscale.",
	"Self-hosted media automation stack (Jellyfin, *arr suite, Jellyseerr) with NFS-backed storage.",
];

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
		title: "Infrastructure & DevOps Engineer",
		company: "Iquall Networks",
		location: "Remote — Córdoba, Argentina",
		imageURL: "/iquall.png",
		date: "Mar 2025 - Present",
		description:
			"Multi-cloud infrastructure engineering across AWS and GCP with focus on automation and reliability.",
		achievements: [
			"Architecting and managing multi-cloud infrastructure (AWS/GCP)",
			"L3 infrastructure engineering and troubleshooting: OS-level diagnostics, disk/network failure recovery, and root cause analysis on Kubernetes clusters (RKE2/EKS).",
			"Automating OVA delivery pipelines for product distribution",
			"Leading ESXi to Proxmox migration for on-premise environments",
			"Managing Proxmox-based infrastructure",
			"Operating multi-master RKE2 clusters with Rancher: HA configuration, Longhorn storage management, and node recovery procedures",
			"Building proactive monitoring stack with Prometheus & OpenObserve",
			"Deploying internal knowledge wiki for team documentation",
		],
		icon: <FaCode className="w-6 h-6 text-primary" />,
		companyIcon: <FaLaptopCode className="w-8 h-8 text-accent-2" />,
	},
	{
		id: 2,
		type: "work",
		title: "Event Coordinator",
		company: "FIFA",
		location: "Riyadh, Saudi Arabia",
		imageURL: "/fifae.png",
		date: "Oct 2024 - Present",
		description:
			"Technical implementation and on-site support for the FIFAe 2024 and 2025 World Finals.",
		achievements: [
			"Assisting in pre-event preparation: competition machine setup and technical requirements validation",
			"Acting as Head Referee for Rocket League — main point of contact for players, coaches and managers, supporting admins and escalating critical issues",
			"Acting as eFootball Referee — monitoring matches and enforcing rule compliance for smooth tournament operation",
		],
		icon: <FaCode className="w-6 h-6 text-primary" />,
		companyIcon: <FaLaptopCode className="w-8 h-8 text-accent-2" />,
	},
	{
		id: 3,
		type: "work",
		title: "Admin SAM @ RLCS eSports",
		company: "BLAST",
		location: "Remote — Córdoba, Argentina",
		imageURL: "/blast.png",
		date: "Oct 2021 - Present",
		description:
			"Match administration and refereeing for the Rocket League Championship Series South America region.",
		achievements: [
			"Managing and resolving issues during tournaments to safeguard competitive integrity",
			"Working with the competitions team and coordinating directly with broadcast and players to keep qualifiers and main events running smoothly",
			"Organizing and managing tournaments: results reporting, in-game referee duties, issue resolution and replay submission",
		],
		icon: <FaCode className="w-6 h-6 text-primary" />,
		companyIcon: <FaLaptopCode className="w-8 h-8 text-accent-2" />,
	},
	{
		id: 4,
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
			className="relative py-10 text-foreground transition-colors overflow-hidden">
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
					className="text-center">
					<h1
						title="Professional Experience"
						className="text-4xl sm:text-5xl font-bold tracking-tight text-heading-gradient mb-4">
						Professional Experience
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

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="relative max-w-7xl mx-auto mt-16 md:px-10">
					<div className="text-center mb-6">
						<span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
							— Honorable Mention —
						</span>
					</div>
					<div className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm glass-effect p-6 sm:p-8">
						<div className="flex items-center gap-4 mb-6">
							<div className="flex items-center justify-center w-[68px] h-[68px] rounded-md shadow bg-muted p-1">
								<SiProxmox className="w-10 h-10 text-[#E57000]" />
							</div>
							<div>
								<h3
									title="Personal Homelab"
									className="text-lg font-semibold text-foreground">
									Personal Homelab
								</h3>
								<p className="text-sm text-muted-foreground">
									Self-hosted • Córdoba, Argentina
								</p>
								<p className="text-sm text-muted-foreground">Ongoing</p>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
							<div className="space-y-6">
								<p className="text-sm text-muted-foreground">
									Self-managed infrastructure running production-grade tooling
									on consumer hardware — Proxmox cluster with mesh VPN,
									IaC-managed edge, observability and self-hosted services.
								</p>

								<ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
									{homelabBullets.map((b) => (
										<li key={b}>{b}</li>
									))}
								</ul>
							</div>

							<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-border/50 bg-background/50">
								<Image
									src="/homelab-architecture.png"
									alt="Personal Homelab Architecture"
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
									className="object-contain"
								/>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Timeline;
