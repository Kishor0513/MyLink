import { motion } from 'framer-motion';
import { Code2, Coffee, Globe, Heart, Sparkles, MapPin, Mail, ArrowDown } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] -translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid lg:grid-cols-[300px_1fr] gap-16 items-center"
                >
                    {/* Left - Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -60, rotateY: -15 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
                        className="relative"
                    >
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-30 animate-pulse" />

                        {/* Image container */}
                        <div className="relative">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="glass-card p-3 rounded-3xl"
                            >
                                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                                    {/* Animated gradient background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-pulse" />

                                    <img
                                        src="/assets/profile.jpg"
                                        alt="Kishor Chaudhary"
                                        className="w-full h-full object-cover relative z-10"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />

                                    {/* Fallback with animated gradient */}
                                    <div className="w-full h-full hidden items-center justify-center flex-col gap-4 relative z-10">
                                        <motion.div
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                            className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-primary p-1"
                                        >
                                            <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                                                <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">KC</span>
                                            </div>
                                        </motion.div>
                                        <p className="text-gray-500 text-sm">Add photo at public/assets/profile.jpg</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-4 -right-4 glass-panel px-5 py-3 rounded-xl border-primary/30 glow-primary"
                            >
                                <div className="flex items-center gap-2">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Sparkles size={18} className="text-primary" />
                                    </motion.div>
                                    <span className="text-sm font-semibold text-white">Open to Work</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Header */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 mb-4 glass-panel rounded-full"
                            >
                                <Heart size={16} className="text-primary animate-pulse" />
                                <span className="text-primary font-mono text-sm">About Me</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-bold mb-2"
                            >
                                Building Digital
                            </motion.h2>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-bold running-gradient"
                            >
                                Experiences
                            </motion.h2>
                        </div>

                        {/* Bio */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4"
                        >
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I'm <span className="text-primary font-semibold">Kishor Chaudhary</span>, a Full Stack Developer from Kathmandu, Nepal, currently pursuing my IT degree in Malaysia. My journey into tech started with curiosity and grew into a passion for creating meaningful digital solutions.
                            </p>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                I specialize in architecting <span className="text-secondary font-medium">high-performance web applications</span> and immersive user experiences. Whether it's building scalable e-commerce platforms or crafting interactive 3D interfaces, I love turning complex problems into elegant solutions.
                            </p>

                            <p className="text-gray-400 leading-relaxed">
                                When I'm not coding, you'll find me exploring new technologies, contributing to open-source, or enjoying a good cup of chiya while brainstorming the next big idea.
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-3 gap-4"
                        >
                            {[
                                { value: '3+', label: 'Years Coding', color: 'primary' },
                                { value: '10+', label: 'Projects Built', color: 'secondary' },
                                { value: '500+', label: 'Commits', color: 'primary' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="glass-panel p-5 rounded-2xl text-center hover:glow-primary transition-all"
                                >
                                    <div className={`text-3xl font-bold ${stat.color === 'primary' ? 'text-primary' : 'text-secondary'} mb-1`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Interests */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-3"
                        >
                            {[
                                { icon: Code2, label: 'Web Dev', color: 'primary' },
                                { icon: Globe, label: 'Open Source', color: 'secondary' },
                                { icon: Coffee, label: 'Chiya Lover', color: 'primary' },
                            ].map((interest) => (
                                <motion.span
                                    key={interest.label}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex items-center gap-2 px-5 py-2.5 glass-panel rounded-full text-sm text-gray-300 hover:border-primary/30 transition-all cursor-default"
                                >
                                    <interest.icon size={16} className={interest.color === 'primary' ? 'text-primary' : 'text-secondary'} />
                                    {interest.label}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-2 text-gray-500"
                        >
                            <MapPin size={16} className="text-primary" />
                            <span>Based in Kathmandu, Nepal</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;