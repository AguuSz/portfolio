import ContactUs from "@/components/main/ContactUs";
import Education from "@/components/main/Education";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Timeline from "@/components/main/Timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Agustin Sepulveda - DevOps & Cloud Engineer | Kubernetes, AWS, GCP",
	description:
		"DevOps & Cloud Engineer portfolio showcasing expertise in Kubernetes, AWS, GCP, Terraform, CI/CD pipelines, and Cloud automation.",
	alternates: {
		canonical: "https://asepulveda.dev",
	},
};

export default function Home() {
	return (
		<div className="min-h-screen min-w-screen">
			{/* Hidden SEO content for better indexing */}
			<div className="sr-only">
				<h1>Agustin Sepulveda - DevOps & Cloud Engineer Portfolio</h1>
				<p>
					DevOps & Cloud Engineer with experience in multi-cloud architectures
					(AWS, GCP), Kubernetes orchestration (RKE2, EKS), and CI/CD
					automation. Browse my projects, skills, and professional experience.
				</p>
			</div>

			<div className="flex flex-col gap-10">
				<Hero />
				<Skills />
				<Timeline />
				<Education />
				<Projects />
				<ContactUs />
			</div>
		</div>
	);
}
