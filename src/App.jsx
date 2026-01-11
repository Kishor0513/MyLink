import React, { useState } from 'react';
import Hero3D from './components/canvas/Hero3D';
import QRCodeModal from './components/ui/QRCodeModal';
import Navbar from './components/ui/Navbar';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Globe, Smartphone, Server, Cpu } from 'lucide-react';

function App() {
    const [isQRModalOpen, setIsQRModalOpen] = useState(false);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-dark min-h-screen text-white selection:bg-primary/30 font-sans">
            <Navbar onOpenQR={() => setIsQRModalOpen(true)} />

            <main>
                {/* 1. HERO SECTION (HOME) */}
                <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden pt-20">
                    <div className="absolute inset-0 z-0">
                        <Hero3D />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="text-left"
                        >
                            <div className="inline-block px-4 py-1.5 mb-6 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm font-mono text-sm text-primary">
                                &lt;Dev_Mode active={'{true}'} /&gt;
                            </div>

                            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight">
                                <span className="block text-white">Kishor</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-white text-glow">Chaudhary</span>
                            </h1>

                            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
                                Senior <span className="text-primary font-medium">Full Stack Engineer</span>
                            </h2>

                            <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                                Architecture, Scalability, and immersive 3D Digital Experiences.
                                Turning complex problems into elegant code.
                            </p>

                            <div className="flex flex-wrap gap-5">
                                <a href="#skills" className="px-8 py-4 bg-white text-dark font-bold rounded-full hover:bg-primary transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95">
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
                                    title: "Weavers",
                                    desc: "Full-stack e-commerce platform built with PHP & MySQL, featuring responsive design and dynamic product management.",
                                    link: "https://github.com/Kishor0513/Weavers",
                                    tags: ["PHP", "MySQL", "E-commerce"]
                                },
                                {
                                    title: "Javascripts",
                                    desc: "Comprehensive collection of JavaScript applications ranging from utility scripts to advanced logic modules.",
                                    link: "https://github.com/Kishor0513/Javascripts",
                                    tags: ["JavaScript", "ES6+", "Algorithms"]
                                },
                                {
                                    title: "OtpLoginSystem",
                                    desc: "Secure authentication implementation featuring One-Time Password (OTP) verification logic.",
                                    link: "https://github.com/Kishor0513/OtpLoginSystem",
                                    tags: ["Security", "Auth", "Frontend"]
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
                                            {i === 0 ? <Database size={64} /> : i === 1 ? <Code2 size={64} /> : <Smartphone size={64} />}
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

                {/* 4. CONTACT SECTION (FOOTER) */}
                <footer id="contact" className="py-20 border-t border-white/5 bg-black/40 backdrop-blur-lg">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

                            {/* Left Side: Text & Socials */}
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's build something extraordinary.</h2>
                                <p className="text-lg text-gray-400 mb-10 max-w-md mx-auto md:mx-0">
                                    Have an idea? I'm open for freelance projects and full-time opportunities. Send me a message!
                                </p>
                                <div className="flex justify-center gap-6 md:justify-start">
                                    <a href="#" className="flex items-center justify-center w-14 h-14 rounded-full glass-panel hover:bg-white hover:text-black transition-all transform hover:scale-110"><Github size={24} /></a>
                                    <a href="#" className="flex items-center justify-center w-14 h-14 rounded-full glass-panel hover:bg-white hover:text-black transition-all transform hover:scale-110"><Linkedin size={24} /></a>
                                    <a href="mailto:kishorc2000@gmail.com" className="flex items-center justify-center w-14 h-14 rounded-full glass-panel hover:bg-white hover:text-black transition-all transform hover:scale-110"><Mail size={24} /></a>
                                </div>
                            </div>

                            {/* Right Side: Contact Form */}
                            <div className="relative p-8 overflow-hidden rounded-3xl glass-card border border-white/10">
                                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] bg-primary/20 pointer-events-none" />
                                <h3 className="mb-6 text-2xl font-bold">Send Me a Message</h3>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const name = e.target.elements.name.value;
                                        const email = e.target.elements.email.value;
                                        const message = e.target.elements.message.value;
                                        window.location.href = `mailto:kishorc2000@gmail.com?subject=Portfolio Contact from ${name}&body=From: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
                                    }}
                                    className="space-y-4"
                                >
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-400">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 text-white transition-colors rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary/50 placeholder-gray-500"
                                            placeholder="What's your good name?"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">Your Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 text-white transition-colors rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary/50 placeholder-gray-500"
                                            placeholder="What's your email address?"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">Your Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows="4"
                                            className="w-full px-4 py-3 text-white transition-colors resize-none rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary/50 placeholder-gray-500"
                                            placeholder="How can I help you?"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 font-bold text-white transition-transform rounded-xl bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        SEND MESSAGE
                                    </button>
                                </form>
                            </div>

                        </div>

                        <div className="pt-8 text-sm text-center border-t text-gray-600 border-white/5 md:text-left">
                            <p>© 2024 Kishor Chaudhary. All rights reserved.</p>
                            <p className="mt-2">Designed with <span className="text-primary">♥</span> in Nepal.</p>
                        </div>
                    </div>
                </footer>

            </main>

            <QRCodeModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
        </div>
    );
}

export default App;

