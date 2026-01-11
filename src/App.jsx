import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Hero3D from './components/canvas/Hero3D';
import QRCodeModal from './components/ui/QRCodeModal';
import Navbar from './components/ui/Navbar';
import Sidebar from './components/ui/Sidebar';
import Timeline from './components/ui/Timeline';
import Reviews from './components/ui/Reviews';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Cpu, Code2, Globe, Server, ExternalLink, Smartphone, MessageSquare, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

function App() {
    const [isQRModalOpen, setIsQRModalOpen] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
    const formRef = useRef();

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-dark min-h-screen text-white selection:bg-primary/30 font-sans">
            <Navbar onOpenQR={() => setIsQRModalOpen(true)} />
            <Sidebar />

            <main>
                {/* Hero Section */}
                <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden pt-20">
                    <div className="absolute inset-0 z-0">
                        <Hero3D />
                    </div>

                    {/* Gradient Overlays for Lavender Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark pointer-events-none" />
                    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
                    <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

                    <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="text-left"
                        >
                            <div className="inline-block px-4 py-1.5 mb-6 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm font-mono text-sm text-primary">
                                &lt;Dev_Mode active={"true"} /&gt;
                            </div>
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight">
                                <span className="block text-white">Kishor</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-white text-glow">
                                    Chaudhary
                                </span>
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
                                Senior <span className="text-primary font-medium">Full Stack Engineer</span>
                            </h2>
                            <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                                Specializing in high-performance web architectures, scalable systems, and immersive 3D digital experiences. Turning complex problems into elegant, user-centric code.
                            </p>
                            <div className="flex flex-wrap gap-5">
                                <a
                                    href="#skills"
                                    className="px-8 py-4 bg-white text-dark font-bold rounded-full hover:bg-primary transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
                                >
                                    Explore Skills
                                </a>
                                <button
                                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 glass-panel text-white font-medium rounded-full hover:bg-white/10 transition-all border border-white/20 hover:border-primary/50"
                                >
                                    Get in Touch
                                </button>
                            </div>
                        </motion.div>

                        {/* Anime Panda Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="hidden md:block relative w-full flex items-center justify-center p-8"
                        >
                            <div className="relative w-full max-w-lg aspect-square">
                                {/* Gradient Glow Background */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-[100px] -z-10 animate-pulse"></div>

                                {/* Image Container */}
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 glass-card p-4 transform hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="/assets/anime_coder_panda.png"
                                        alt="Anime Panda Coding"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />

                                    {/* Overlay Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none rounded-2xl"></div>
                                </div>

                                {/* Floating Tech Icons Decoration */}
                                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 -right-6 p-4 glass-panel rounded-2xl text-primary border border-primary/30 shadow-lg shadow-primary/20">
                                    <Cpu size={32} />
                                </motion.div>
                                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-6 -left-6 p-4 glass-panel rounded-2xl text-secondary border border-secondary/30 shadow-lg shadow-secondary/20">
                                    <Code2 size={32} />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
                        <span className="text-xs uppercase tracking-[0.2em] opacity-80">Scroll</span>
                        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
                    </div>
                </section>

                <Timeline />

                {/* 2. SKILLS SECTION */}
                <section id="skills" className="py-32 px-6 relative bg-dark/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="mb-16 text-center md:text-left"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
                            <p className="text-gray-400 text-lg">The stack I use to build scalable solutions.</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Frontend */}
                            <motion.div whileHover={{ y: -5 }} className="glass-panel p-8 rounded-2xl">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                                    <Globe size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Next.js', 'Three.js', 'Tailwind', 'Framer Motion', 'Redux'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-300 border border-white/5">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Backend */}
                            <motion.div whileHover={{ y: -5 }} className="glass-panel p-8 rounded-2xl">
                                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 text-green-400">
                                    <Server size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-300 border border-white/5">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Tools & Arch */}
                            <motion.div whileHover={{ y: -5 }} className="glass-panel p-8 rounded-2xl">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                                    <Cpu size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Architecture</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Docker', 'AWS', 'Git', 'CI/CD', 'Microservices', 'Jest'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-300 border border-white/5">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 3. PROJECTS SECTION */}
                <section id="projects" className="py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
                                <p className="text-gray-400 text-lg">Highlights of engineering and design.</p>
                            </div>
                            <div className="h-px w-full md:w-1/2 bg-white/10 mb-2"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "E-commerce Platform",
                                    desc: "A scalable online shopping solution built with modern backend technologies, featuring real-time inventory and secure payments.",
                                    link: "#",
                                    tags: ["Scale", "Database", "UX"]
                                },
                                {
                                    title: "Enterprise Web App",
                                    desc: "Complex dashboard system for data visualization and management, optimized for performance and team collaboration.",
                                    link: "#",
                                    tags: ["Dashboard", "Analytics", "React"]
                                },
                                {
                                    title: "Security & Auth System",
                                    desc: "Robust authentication implementation featuring multi-factor security and encrypted session management.",
                                    link: "#",
                                    tags: ["Security", "JWT", "IAM"]
                                }
                            ].map((project, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    viewport={{ once: true }}
                                    className="glass-card overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform"
                                >
                                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-black relative">
                                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                                        <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ExternalLink size={16} />
                                        </div>
                                        {/* Project Icon Placeholders */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-700 opacity-30 group-hover:opacity-50 transition-opacity">
                                            {i === 0 ? <Briefcase size={64} /> : i === 1 ? <Code2 size={64} /> : <Smartphone size={64} />}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex gap-2 mb-4">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 text-gray-300 border border-white/5">{tag}</span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="mb-6 text-gray-400">{project.desc}</p>
                                        <a href={project.link} target="_blank" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors">
                                            View Code <span className="transition-transform group-hover:translate-x-1">→</span>
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <Reviews />

                {/* Footer / Contact Section */}
                <footer id="contact" className="relative pt-32 pb-16 overflow-hidden bg-dark">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
                            {/* Left Side: Text and Socials */}
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                        Let's build something <span className="text-primary italic">extraordinary.</span>
                                    </h2>
                                    <p className="text-xl text-gray-400 mb-12 max-w-md leading-relaxed">
                                        Have an idea? I'm open for freelance projects and full-time opportunities.
                                    </p>

                                    <div className="flex flex-col gap-10">
                                        <div className="space-y-6">
                                            <div className="flex flex-col gap-3">
                                                <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-primary/60 ml-1">Connect With Me</h4>
                                                <div className="h-0.5 w-12 bg-primary/30 rounded-full ml-1" />
                                            </div>

                                            <div className="grid sm:grid-cols-1 gap-4">
                                                {[
                                                    { icon: <Mail size={20} />, label: 'Email', href: 'mailto:kishorc2000@gmail.com', value: 'kishorc2000@gmail.com' },
                                                    { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/Kishor0513', value: 'Kishor0513' },
                                                    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://linkedin.com/in/kishor-chaudhary', value: 'Kishor Chaudhary' },
                                                    { icon: <Instagram size={20} />, label: 'Instagram', href: 'https://www.instagram.com/kishor0513/', value: '@kishor0513' },
                                                    { icon: <Globe size={20} />, label: 'Linktree', href: 'https://linktr.ee/kishor0513', value: 'kishor0513' }
                                                ].map((social, i) => (
                                                    <a
                                                        key={i}
                                                        href={social.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-4 text-gray-400 hover:text-primary transition-all group glass-panel p-4 rounded-3xl border border-white/5 hover:border-primary/20 bg-white/[0.02]"
                                                    >
                                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all text-gray-400 group-hover:text-primary">
                                                            {social.icon}
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">{social.label}</span>
                                                            <span className="text-base font-semibold text-white group-hover:text-primary transition-colors">{social.value}</span>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Side: Contact Form (Half Section) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                                <div className="relative p-10 overflow-hidden rounded-[2rem] bg-surface border border-white/10 shadow-2xl">
                                    <h3 className="mb-8 text-2xl font-bold text-white">Send Me a Message</h3>
                                    <form
                                        ref={formRef}
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            setIsSending(true);
                                            setSubmitStatus(null);

                                            emailjs.sendForm(
                                                'service_tmldjzb',
                                                'template_b748drf',
                                                formRef.current,
                                                'pFJE1WaB8zsqoN9Z0'
                                            )
                                                .then((result) => {
                                                    setIsSending(false);
                                                    setSubmitStatus('success');
                                                    e.target.reset();
                                                    setTimeout(() => setSubmitStatus(null), 5000);
                                                }, (error) => {
                                                    setIsSending(false);
                                                    setSubmitStatus('error');
                                                });
                                        }}
                                        className="space-y-6"
                                    >
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
                                                <input
                                                    type="text"
                                                    name="user_name"
                                                    id="name"
                                                    required
                                                    className="w-full px-5 py-4 text-white rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary/50 transition-all placeholder-gray-600"
                                                    placeholder="What's your name?"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Email</label>
                                                <input
                                                    type="email"
                                                    name="user_email"
                                                    id="email"
                                                    required
                                                    className="w-full px-5 py-4 text-white rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary/50 transition-all placeholder-gray-600"
                                                    placeholder="Your email address?"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                required
                                                rows="5"
                                                className="w-full px-5 py-4 text-white rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary/50 transition-all placeholder-gray-600 resize-none"
                                                placeholder="Tell me about your project..."
                                            />
                                        </div>

                                        <AnimatePresence>
                                            {submitStatus === 'success' && (
                                                <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 text-sm font-medium text-center">
                                                    Message sent successfully!
                                                </motion.p>
                                            )}
                                            {submitStatus === 'error' && (
                                                <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm font-medium text-center">
                                                    Failed to send message. Please try again or use direct email.
                                                </motion.p>
                                            )}
                                        </AnimatePresence>

                                        <button
                                            type="submit"
                                            disabled={isSending}
                                            className="w-full py-5 font-bold text-dark bg-primary rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                        >
                                            {isSending ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                                                    SENDING...
                                                </>
                                            ) : (
                                                <>
                                                    SEND MESSAGE
                                                    <ArrowRight size={18} />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
                            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Kishor Chaudhary. All rights reserved.</p>
                            <div className="flex gap-8">
                                <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">Privacy</a>
                                <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">Terms</a>
                            </div>
                        </div>
                    </div>
                </footer>

            </main>

            <QRCodeModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
        </div>
    );
}

export default App;

