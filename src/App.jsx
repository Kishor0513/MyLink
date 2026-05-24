import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import {
	ArrowRight,
	ArrowUp,
	Cpu,
	ExternalLink,
	Github,
	Globe,
	Instagram,
	Linkedin,
	Mail,
	Server,
} from 'lucide-react';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { BlogIndexPage, BlogPostPage } from './components/blog/BlogPages';
import ErrorBoundary from './components/ui/ErrorBoundary';
import Navbar from './components/ui/Navbar';
import { blogPosts } from './data/blogPosts';
const ShootingStars = lazy(() => import('./components/ui/ShootingStars'));
const SpaceBackground = lazy(() => import('./components/ui/SpaceBackground'));
const Timeline = lazy(() => import('./components/ui/Timeline'));

const Hero3D = lazy(() => import('./components/canvas/Hero3D'));
const GitHubStats = lazy(() => import('./components/ui/GitHubStats'));

const useLoadOnInteraction = () => {
	const [hasInteracted, setHasInteracted] = useState(false);

	useEffect(() => {
		const load = () => setHasInteracted(true);
		const events = ['pointerdown', 'keydown', 'touchstart'];
		events.forEach((event) =>
			window.addEventListener(event, load, {
				once: true,
				passive: true,
			}),
		);

		return () => {
			events.forEach((event) => window.removeEventListener(event, load));
		};
	}, []);

	return hasInteracted;
};

const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(query);
		const updateMatches = () => setMatches(mediaQuery.matches);

		updateMatches();
		mediaQuery.addEventListener('change', updateMatches);

		return () => mediaQuery.removeEventListener('change', updateMatches);
	}, [query]);

	return matches;
};

const LazyWhenVisible = ({ children, className = '' }) => {
	const [isVisible, setIsVisible] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		if (isVisible || !containerRef.current) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ rootMargin: '700px 0px' },
		);

		observer.observe(containerRef.current);

		return () => observer.disconnect();
	}, [isVisible]);

	return (
		<div
			ref={containerRef}
			className={className}
		>
			{isVisible ? children : null}
		</div>
	);
};

function App() {
	const [isSending, setIsSending] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);
	const formRef = useRef();
	const shouldRenderHero3D = useLoadOnInteraction();
	const isLargeScreen = useMediaQuery('(min-width: 1024px)');
	const pathname =
		typeof window !== 'undefined'
			? window.location.pathname.replace(/\/+$/, '') || '/'
			: '/';

	if (pathname === '/blog' || pathname === '/blog/') {
		return <BlogIndexPage />;
	}

	if (pathname.startsWith('/blog/')) {
		const slug = pathname.split('/').filter(Boolean)[1];
		return <BlogPostPage post={{ slug }} />;
	}

	// Animation variants
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<ErrorBoundary>
			<div className="bg-dark min-h-screen text-white selection:bg-primary/30 font-sans">
				<Navbar />

				<div className="fixed inset-0 z-0 pointer-events-none">
					<Suspense fallback={null}>
						<SpaceBackground />
						<ShootingStars />
					</Suspense>
					{shouldRenderHero3D && (
						<Suspense fallback={null}>
							<Hero3D />
						</Suspense>
					)}
				</div>

				<main className="relative z-10">
					{/* Hero Section */}
					<section
						id="home"
						className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden pt-20"
					>
						{/* Background removed as it is now global */}

						{/* Gradient Overlays for Lavender Effect */}
						<div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark pointer-events-none" />
						<div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
						<div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

						<div className="relative z-10 max-w-7xl mx-auto w-full">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={fadeIn}
								className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"
							>
								{/* Left - Content */}
								<div className="text-left max-w-2xl">
									<motion.div
										whileHover={{
											scale: 1.05,
											boxShadow: '0 0 25px rgba(167, 139, 250, 0.3)',
										}}
										className="inline-block px-4 py-1.5 mb-6 ios-glass rounded-full bg-primary/10 font-mono text-base text-primary cursor-default"
									>
										&lt;Dev_Mode active={'true'} /&gt;
									</motion.div>
									<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
										<motion.span
											whileHover={{ x: 10, scale: 1.02 }}
											className="block text-white cursor-default transition-colors hover:text-primary/90"
										>
											Kishor
										</motion.span>
										<motion.span
											whileHover={{ x: 10, scale: 1.02 }}
											className="block running-gradient pb-2 cursor-default"
										>
											Chaudhary
										</motion.span>
									</h1>
									<motion.h2
										whileHover={{ x: 5, scale: 1.02 }}
										className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6 font-light cursor-default"
									>
										<span className="text-primary font-medium">
											Full Stack Developer
										</span>
									</motion.h2>
									<motion.p
										whileHover={{ scale: 1.01 }}
										className="text-base md:text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
									>
										Specialized in architecting high-performance E-commerce
										platforms and immersive digital experiences. Building
										full-stack solutions that merge creative design with robust
										engineering.
									</motion.p>

									{/* Quick Stats */}
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.5 }}
										className="flex flex-wrap gap-6 mb-10"
									>
										{[
											{ value: '3+', label: 'Years' },
											{ value: '10+', label: 'Projects' },
											{ value: '500+', label: 'Commits' },
										].map((stat) => (
											<div
												key={stat.label}
												className="text-center"
											>
												<div className="text-2xl font-bold text-primary">
													{stat.value}
												</div>
												<div className="text-xs text-gray-400 uppercase tracking-wider">
													{stat.label}
												</div>
											</div>
										))}
									</motion.div>

									<div className="flex flex-wrap gap-4">
										<motion.a
											href="#projects"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className="group relative px-8 py-4 bg-white/90 text-white font-bold rounded-full overflow-hidden transition-all shadow-lg shadow-primary/20 liquid-glass inline-flex items-center gap-3"
										>
											<span className="relative z-10">View Projects</span>
											<motion.span
												animate={{ y: [0, 5, 0] }}
												transition={{
													duration: 2,
													repeat: Infinity,
													ease: 'easeInOut',
												}}
												className="relative z-10"
											>
												<ArrowRight
													size={18}
													className="rotate-90"
												/>
											</motion.span>
										</motion.a>
									</div>
								</div>

								{/* Right - Panda Image */}
								{isLargeScreen && (
									<motion.div
										initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
										whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
										transition={{ duration: 1, delay: 0.2 }}
										className="relative flex-shrink-0"
									>
										<div className="relative w-[480px] h-[480px] xl:w-[550px] xl:h-[550px]">
											{/* Gradient Glow Background */}
											<div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-[120px] -z-10 animate-pulse" />

											{/* Image Container */}
											<motion.div
												whileHover={{ scale: 1.02 }}
												transition={{ type: 'spring', stiffness: 300 }}
												className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 glass-card p-4 liquid-glass w-full h-full"
											>
												<img
													src="/assets/optimized/anime_coder_panda-640.jpg"
													alt="Anime Panda Coding"
													width="640"
													height="640"
													decoding="async"
													fetchPriority="high"
													className="w-full h-full object-cover rounded-2xl"
												/>

												{/* Overlay Shine Effect */}
												<div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none rounded-2xl" />
											</motion.div>
										</div>
									</motion.div>
								)}
							</motion.div>
						</div>
					</section>

					<Timeline />

					{/* 2. SKILLS SECTION */}
					<section
						id="skills"
						className="py-32 px-6 relative bg-transparent"
					>
						<div className="max-w-7xl mx-auto">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={fadeIn}
								className="text-center mb-16"
							>
								<h2 className="text-4xl md:text-5xl font-bold mb-4 running-gradient inline-block">
									Technical Expertise
								</h2>
								<p className="text-gray-400 text-lg max-w-2xl mx-auto">
									Check out my social media and GitHub for more technical
									projects and insights.
								</p>
							</motion.div>

							<div className="grid md:grid-cols-3 gap-8">
								{/* Frontend */}
								<motion.div
									whileHover={{ y: -5 }}
									className="glass-panel p-8 rounded-2xl liquid-glass"
								>
									<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400">
										<Globe size={24} />
									</div>
									<h3 className="text-2xl font-bold mb-4">Frontend</h3>
									<div className="flex flex-wrap gap-2">
										{[
											'React',
											'Next.js',
											'Three.js',
											'Tailwind',
											'Framer Motion',
											'Redux',
										].map((skill) => (
											<span
												key={skill}
												className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-300 border border-white/5"
											>
												{skill}
											</span>
										))}
									</div>
								</motion.div>

								{/* Backend */}
								<motion.div
									whileHover={{ y: -5 }}
									className="glass-panel p-8 rounded-2xl liquid-glass"
								>
									<div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 text-green-400">
										<Server size={24} />
									</div>
									<h3 className="text-2xl font-bold mb-4">Backend</h3>
									<div className="flex flex-wrap gap-2">
										{[
											'Node.js',
											'Express',
											'MongoDB',
											'PostgreSQL',
											'GraphQL',
											'REST APIs',
										].map((skill) => (
											<span
												key={skill}
												className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-300 border border-white/5"
											>
												{skill}
											</span>
										))}
									</div>
								</motion.div>

								{/* Tools & Arch */}
								<motion.div
									whileHover={{ y: -5 }}
									className="glass-panel p-8 rounded-2xl liquid-glass"
								>
									<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400">
										<Cpu size={24} />
									</div>
									<h3 className="text-2xl font-bold mb-4">Architecture</h3>
									<div className="flex flex-wrap gap-2">
										{[
											'Docker',
											'AWS',
											'Git',
											'CI/CD',
											'Microservices',
											'Jest',
										].map((skill) => (
											<span
												key={skill}
												className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-300 border border-white/5"
											>
												{skill}
											</span>
										))}
									</div>
								</motion.div>
							</div>
						</div>
					</section>

					{/* 3. PROJECTS SECTION */}
					<section
						id="projects"
						className="py-32 px-6"
					>
						<div className="max-w-7xl mx-auto">
							<div className="text-center mb-16">
								<h2 className="text-4xl md:text-5xl font-bold mb-4 running-gradient inline-block">
									Selected Work
								</h2>
								<p className="text-gray-400 text-lg max-w-2xl mx-auto">
									Highlights of engineering and design.
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{[
									{
										title: 'Chiya and Puff',
										desc: 'A full-stack restaurant operations platform featuring QR-based table ordering, real-time dashboards for staff, and integrated billing. Built with Next.js and Prisma, it optimizes the dining experience from order to payment.',
										link: 'https://github.com/Kishor0513/Chiya-and-Puff',
										live: '#',
										tags: ['Next.js', 'Prisma', 'PostgreSQL'],
										image: '/assets/optimized/real_chiya_puff-700.jpg',
										className: 'md:col-span-2',
									},
									{
										title: 'Social Media',
										desc: '“Super Social” is a real-time networking app with features like disappearning stories, WebRTC video calls, and instant messaging. It uses Socket.IO and Prisma for a modern, fluid social experience.',
										link: 'https://github.com/Kishor0513/Social-Media',
										live: '#',
										tags: ['React', 'Node.js', 'Socket.io'],
										image: '/assets/optimized/social_media-520.jpg',
										className: 'md:col-span-1',
									},
									{
										title: 'Weavers',
										desc: 'A comprehensive PHP-based E-commerce platform. It features full cart functionality, secure checkout, and back-office management, showcasing the power of traditional web stacks for scalable retail.',
										link: 'https://github.com/Kishor0513/Weavers',
										live: '#',
										tags: ['PHP', 'MySQL', 'Ecommerce'],
										image: '/assets/optimized/ecommerce-520.jpg',
										className: 'md:col-span-1',
									},
									{
										title: 'Dahlia Classification (FYP)',
										desc: 'My Final Year Project: An AI-driven application that classifies Dahlia flower types using a pre-trained VGG16 CNN model. This Flask web app provides high-confidence results by analyzing flower image data in real-time.',
										link: 'https://github.com/Kishor0513/App',
										live: '#',
										tags: ['Python', 'CNN', 'Deep Learning'],
										image: '/assets/dahlia_classification.svg',
										className: 'md:col-span-1',
									},
									{
										title: 'Personal Blog',
										desc: 'A minimal, blazingly fast personal blog designed for performance and reading comfort. It serves as my primary space for sharing engineering insights and tutorials with the development community.',
										link: 'https://github.com/Kishor0513/Blog',
										live: '#',
										tags: ['Next.js', 'Vercel', 'Blog'],
										image: '/assets/optimized/portfolio-520.jpg',
										className: 'md:col-span-1 lg:col-span-1',
									},
								].map((project, i) => (
									<motion.div
										key={i}
										whileHover={{ y: -5, scale: 1.01 }}
										viewport={{ once: true }}
										className={`glass-card overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform liquid-glass flex flex-col rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl ${project.className || ''}`}
									>
										<div
											className={`relative overflow-hidden w-full ${project.className?.includes('md:col-span-2') ? 'h-[320px]' : 'h-[220px]'}`}
										>
											<img
												src={project.image}
												alt={project.title}
												loading="lazy"
												decoding="async"
												onError={(e) => {
													e.currentTarget.onerror = null;
													e.currentTarget.src =
														'/assets/optimized/portfolio-520.jpg';
												}}
												className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] via-transparent to-transparent opacity-90" />
											<div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
												<ExternalLink
													size={16}
													className="text-white"
												/>
											</div>
										</div>
										<div className="p-5 flex flex-col">
											<div>
												<div className="flex flex-wrap gap-2 mb-3">
													{project.tags.map((tag) => (
														<span
															key={tag}
															className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/10 text-gray-200 border border-white/5 backdrop-blur-md"
														>
															{tag}
														</span>
													))}
												</div>
												<h3 className="text-xl font-bold text-white mb-2 tracking-tight">
													{project.title}
												</h3>
												<p className="text-gray-400 text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
													{project.desc}
												</p>
											</div>
											<div className="flex items-center gap-4 mt-4">
												<a
													href={project.link}
													target="_blank"
													rel="noreferrer"
													className="flex items-center justify-center gap-2 text-sm font-semibold text-white hover:text-white transition-all bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-xl backdrop-blur-md border border-white/5"
												>
													View Code
												</a>
												{project.live !== '#' && (
													<a
														href={project.live}
														target="_blank"
														rel="noreferrer"
														className="flex items-center justify-center gap-2 text-sm font-semibold text-primary/90 hover:text-primary transition-colors hover:bg-primary/10 px-5 py-2.5 rounded-xl"
													>
														Live View <ExternalLink size={14} />
													</a>
												)}
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</section>

					{/* Blog Preview Section */}
					<section
						id="blog"
						className="py-24 px-6 relative overflow-hidden"
					>
						<div className="max-w-7xl mx-auto">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={fadeIn}
								className="text-center mb-16"
							>
								<h2 className="text-4xl md:text-5xl font-bold mb-4 running-gradient inline-block">
									Latest Blog Posts
								</h2>
								<p className="text-gray-400 text-lg max-w-2xl mx-auto">
									Practical notes about SEO, indexing, and fast portfolio
									builds.
								</p>
							</motion.div>

							<div className="grid md:grid-cols-3 gap-6">
								{blogPosts.map((post) => (
									<motion.a
										key={post.slug}
										href={post.path}
										whileHover={{ y: -6 }}
										className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-primary/30"
									>
										<div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-primary">
											<span>{post.category}</span>
											<span className="text-gray-300">{post.readingTime}</span>
										</div>
										<h3 className="mt-4 text-2xl font-bold text-white transition-colors group-hover:text-primary">
											{post.title}
										</h3>
										<p className="mt-3 text-sm leading-relaxed text-gray-400">
											{post.excerpt}
										</p>
										<div className="mt-5 flex flex-wrap gap-2">
											{post.tags.map((tag) => (
												<span
													key={tag}
													className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-300"
												>
													{tag}
												</span>
											))}
										</div>
										<div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-primary">
											Read article <ArrowRight size={16} />
										</div>
									</motion.a>
								))}
							</div>
						</div>
					</section>

					<LazyWhenVisible className="min-h-px">
						<Suspense fallback={null}>
							<GitHubStats />
						</Suspense>
					</LazyWhenVisible>

					{/* Footer / Contact Section */}
					<footer
						id="contact"
						className="relative isolate pt-20 pb-8 overflow-hidden bg-gradient-to-b from-dark/60 via-dark/80 to-dark"
					>
						<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

						<div className="max-w-6xl mx-auto px-6 relative z-10">
							<div className="grid md:grid-cols-2 gap-12 mb-16">
								{/* Left Side: Contact Info */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									className="space-y-8"
								>
									<div>
										<h2 className="text-3xl md:text-4xl font-bold mb-4 running-gradient">
											Let's Connect
										</h2>
										<p className="text-gray-400 text-lg">
											Have a project in mind or just want to chat? Feel free to
											reach out. I'm always open to discussing new
											opportunities.
										</p>
									</div>

									<div className="space-y-4">
										<a
											href="mailto:kishoc2000@gmail.com"
											className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
										>
											<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/30 transition-colors">
												<Mail size={20} />
											</div>
											<span>kishorc2000@gmail.com</span>
										</a>
										<div className="flex items-center gap-4 text-gray-300">
											<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
												<Globe size={20} />
											</div>
											<span>Kathmandu, Nepal</span>
										</div>
									</div>

									{/* Social Icons */}
									<div className="flex gap-3">
										{[
											{
												href: 'https://github.com/Kishor0513',
												icon: Github,
												label: 'GitHub',
											},
											{
												href: 'https://www.linkedin.com/in/kishor-chaudhary-772b05314/',
												icon: Linkedin,
												label: 'LinkedIn',
											},
											{
												href: 'https://www.instagram.com/kishor0513/',
												icon: Instagram,
												label: 'Instagram',
											},
											{
												href: 'https://www.kishorchaudhary.com.np',
												icon: Globe,
												label: 'Website',
											},
										].map((social) => (
											<motion.a
												key={social.label}
												href={social.href}
												target="_blank"
												rel="noopener noreferrer"
												whileHover={{ scale: 1.1, y: -2 }}
												className="w-12 h-12 flex items-center justify-center glass-panel rounded-xl border border-white/10 text-gray-400 hover:text-primary hover:border-primary/30 transition-all"
												title={social.label}
											>
												<social.icon size={20} />
											</motion.a>
										))}
									</div>
								</motion.div>

								{/* Right Side: Contact Form */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.1 }}
									className="relative group"
								>
									<div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
									<div className="relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
										<h3 className="text-xl font-bold text-white mb-6">
											Send a Message
										</h3>
										<form
											ref={formRef}
											onSubmit={(e) => {
												e.preventDefault();
												setIsSending(true);
												setSubmitStatus(null);

												emailjs
													.sendForm(
														'service_tmldjzb',
														'template_b748drf',
														formRef.current,
														'pFJE1WaB8zsqoN9Z0',
													)
													.then(
														() => {
															setSubmitStatus('success');
															setIsSending(false);
															formRef.current.reset();
														},
														() => {
															setSubmitStatus('error');
															setIsSending(false);
														},
													);
											}}
											className="space-y-4"
										>
											<div className="grid md:grid-cols-2 gap-4">
												<input
													type="text"
													name="user_name"
													required
													className="w-full px-4 py-3 text-white text-sm rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary/50 transition-all placeholder-gray-500"
													placeholder="Your Name"
												/>
												<input
													type="email"
													name="user_email"
													required
													className="w-full px-4 py-3 text-white text-sm rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary/50 transition-all placeholder-gray-500"
													placeholder="Your Email"
												/>
											</div>
											<textarea
												name="message"
												required
												rows="3"
												className="w-full px-4 py-3 text-white text-sm rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary/50 transition-all placeholder-gray-500 resize-none"
												placeholder="Your Message"
											/>

											<AnimatePresence>
												{submitStatus === 'success' && (
													<motion.p
														initial={{ opacity: 0, y: -10 }}
														animate={{ opacity: 1, y: 0 }}
														className="text-green-400 text-sm font-medium text-center"
													>
														Message sent successfully!
													</motion.p>
												)}
												{submitStatus === 'error' && (
													<motion.p
														initial={{ opacity: 0, y: -10 }}
														animate={{ opacity: 1, y: 0 }}
														className="text-red-400 text-sm font-medium text-center"
													>
														Failed to send. Please try again.
													</motion.p>
												)}
											</AnimatePresence>

											<button
												type="submit"
												disabled={isSending}
												className="w-full py-3.5 font-bold text-sm text-white bg-primary rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
											>
												{isSending ? (
													<>
														<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
														SENDING
													</>
												) : (
													<>SEND MESSAGE</>
												)}
											</button>
										</form>
									</div>
								</motion.div>
							</div>

							{/* Bottom Bar */}
							<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
								<p className="text-gray-500 text-sm">
									© {new Date().getFullYear()} Kishor Chaudhary. All rights
									reserved.
								</p>

								<button
									type="button"
									onClick={() =>
										window.scrollTo({ top: 0, behavior: 'smooth' })
									}
									className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-primary hover:bg-white/5 transition-all"
								>
									BACK TO TOP
									<ArrowUp size={12} />
								</button>
							</div>
						</div>
					</footer>
				</main>
			</div>
		</ErrorBoundary>
	);
}

export default App;
