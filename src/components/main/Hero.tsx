import HeroContent from "../sub/HeroContent";

export function Hero() {
	return (
		<section
			id="about"
			className="relative flex flex-col min-h-screen w-full items-center justify-center overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 -z-10">
				{/* Floating Geometric Shapes */}
				<div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
				<div className="absolute top-40 right-20 w-24 h-24 bg-accent-2/20 rounded-lg rotate-45 animate-bounce"></div>
				<div className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary/15 rounded-full animate-ping"></div>
				<div className="absolute bottom-20 right-1/3 w-20 h-20 bg-accent-2/10 rounded-lg rotate-12 float-animation"></div>

				{/* Grid Pattern */}
				<div className="absolute inset-0 grid-pattern"></div>

				{/* Gradient Orbs */}
				<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-accent-2/10 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent-2/15 via-primary/10 to-transparent rounded-full blur-2xl"></div>
			</div>

			<HeroContent />
		</section>
	);
}

export default Hero;
