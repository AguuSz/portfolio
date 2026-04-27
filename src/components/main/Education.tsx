"use client";

import { motion } from "motion/react";
import { FC } from "react";
import { FaCertificate, FaGraduationCap, FaTrophy } from "react-icons/fa";

interface EducationItem {
	institution: string;
	degree: string;
	location: string;
	date: string;
	description: string;
}

interface CertificationItem {
	title: string;
	issuer: string;
	date?: string;
	description: string;
	highlight?: string;
	isAward?: boolean;
	isOngoing?: boolean;
}

const educationData: EducationItem[] = [
	{
		institution: "Instituto Universitario Aeronáutico (IUA)",
		degree: "Software Engineering",
		location: "Córdoba, Argentina",
		date: "2020 – 2025",
		description:
			"Software engineering degree focused on systems, networking, and development. Complemented my studies with self-taught specialization in cloud infrastructure, Kubernetes, and DevOps practices.",
	},
];

const certificationsData: CertificationItem[] = [
	{
		title: "Hack The Cloud 25 — Ekoparty Buenos Aires 2025",
		issuer: "Spartan-Cybersecurity",
		date: "Nov 2025",
		description:
			"Cloud security Capture The Flag focused on infrastructure exploitation and vulnerabilities in cloud-native environments. In this CTF, participants worked with AWS, GCP, and Azure.",
		highlight: "🏆 3rd Place",
		isAward: true,
	},
	{
		title: "AWS Certified CloudOps Engineer – Associate",
		issuer: "Amazon Web Services",
		description:
			"Cloud operations certification covering monitoring, logging, remediation, security, networking, and cost optimization on AWS.",
		isOngoing: true,
	},
	{
		title: "Introduction to Cybersecurity",
		issuer: "Cisco",
		date: "Aug 2022",
		description:
			"Cybersecurity fundamentals, common threats, and defensive best practices.",
	},
	{
		title: "Cybersecurity Essentials",
		issuer: "Cisco",
		description:
			"Advanced cybersecurity concepts, cryptography, and risk management.",
	},
];

const Education: FC = () => {
	return (
		<section
			id="education"
			className="relative py-10 text-foreground transition-colors overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
				<div className="absolute top-60 right-20 w-20 h-20 bg-accent-2/20 rounded-lg rotate-45 animate-bounce"></div>
				<div className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary/15 rounded-full animate-ping"></div>
				<div className="absolute bottom-20 right-1/3 w-24 h-24 bg-accent-2/10 rounded-lg rotate-12 float-animation"></div>

				<div className="absolute inset-0 grid-pattern"></div>

				<div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-accent-2/10 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-accent-2/15 via-primary/10 to-transparent rounded-full blur-2xl"></div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16">
					<h1
						title="Education & Certifications"
						className="text-4xl sm:text-5xl font-bold tracking-tight text-heading-gradient mb-4">
						Education & Certifications
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						My academic background and technical recognitions.
					</p>
				</motion.div>

				{/* Education subsection */}
				<div className="max-w-6xl mx-auto mb-16">
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="flex items-center gap-3 text-2xl sm:text-3xl font-bold mb-8">
						<FaGraduationCap className="text-primary" />
						<span>Education</span>
					</motion.h2>

					<div className="grid gap-6">
						{educationData.map((item, i) => (
							<motion.div
								key={item.institution}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className="bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300">
								<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
									<div>
										<h3 className="text-lg font-semibold text-foreground">
											{item.degree}
										</h3>
										<p className="text-base text-primary">{item.institution}</p>
										<p className="text-sm text-muted-foreground">
											{item.location}
										</p>
									</div>
									<span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full whitespace-nowrap self-start">
										{item.date}
									</span>
								</div>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{item.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>

				{/* Certifications subsection */}
				<div className="max-w-6xl mx-auto">
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="flex items-center gap-3 text-2xl sm:text-3xl font-bold mb-8">
						<FaCertificate className="text-accent-2" />
						<span>Certifications & Awards</span>
					</motion.h2>

					<div className="grid md:grid-cols-2 gap-6">
						{certificationsData.map((cert, i) => (
							<motion.div
								key={cert.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className="relative bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300">
								{cert.isOngoing && (
									<span className="absolute -top-3 right-4 text-xs font-semibold bg-gradient-to-r from-amber-500 to-yellow-400 text-black px-3 py-1 rounded-full shadow">
										On-going
									</span>
								)}
								{cert.highlight && (
									<span className="absolute -top-3 right-4 text-xs font-semibold bg-gradient-to-r from-primary to-accent-2 text-primary-foreground px-3 py-1 rounded-full shadow">
										{cert.highlight}
									</span>
								)}
								<div className="flex items-start gap-3 mb-3">
									{cert.isAward ? (
										<FaTrophy className="w-5 h-5 text-warning mt-1 shrink-0" />
									) : (
										<FaCertificate className="w-5 h-5 text-accent-2 mt-1 shrink-0" />
									)}
									<div className="flex-1">
										<h3 className="text-base font-semibold text-foreground leading-tight">
											{cert.title}
										</h3>
										<p className="text-sm text-primary mt-1">
											{cert.issuer}
											{cert.date && (
												<span className="text-muted-foreground">
													{" "}
													· {cert.date}
												</span>
											)}
										</p>
									</div>
								</div>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{cert.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
