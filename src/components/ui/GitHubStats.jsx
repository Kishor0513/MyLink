import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

const StatCard = ({ label, value, icon: Icon, delay, color = 'primary' }) => {
    const colorClasses = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        green: 'text-green-400',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5, type: 'spring', stiffness: 100 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-panel p-6 rounded-2xl text-center relative overflow-hidden group cursor-pointer"
        >
            {/* Animated gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{ boxShadow: '0 0 30px rgba(167, 139, 250, 0.2)' }} />

            <div className="relative z-10">
                <div className={`flex items-center justify-center gap-2 text-4xl font-bold running-gradient mb-2`}>
                    {Icon && <Icon size={28} className={colorClasses[color]} />}
                    <span className={colorClasses[color]}>{value}</span>
                </div>
                <div className="text-gray-400 text-sm font-medium">{label}</div>
            </div>
        </motion.div>
    );
};

const GitHubStats = () => {
    const [stats, setStats] = useState({
        repos: '20+',
        commits: '500+',
        stars: '15+',
        followers: '50+',
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Kishor0513');
                if (response.ok) {
                    const data = await response.json();
                    setStats({
                        repos: data.public_repos || '20+',
                        commits: '500+',
                        stars: '15+',
                        followers: data.followers || '50+',
                    });
                }
            } catch (error) {
                console.log('GitHub API unavailable, using defaults');
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    return (
        <section className="py-20 px-6 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 ios-glass rounded-full"
                    >
                        <Github size={16} className="text-primary" />
                        <span className="text-primary font-mono text-sm">GitHub Stats</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Open Source <span className="running-gradient">Journey</span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Building and contributing to projects that make a difference
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <StatCard label="Repositories" value={loading ? '...' : stats.repos} delay={0} color="primary" />
                    <StatCard label="Contributions" value={loading ? '...' : stats.commits} delay={0.1} color="secondary" />
                    <StatCard label="Stars" value={loading ? '...' : stats.stars} delay={0.2} color="primary" icon={Star} />
                    <StatCard label="Followers" value={loading ? '...' : stats.followers} delay={0.3} color="green" icon={GitFork} />
                </div>

                {/* Profile CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="glass-card p-10 rounded-3xl text-center relative overflow-hidden"
                >
                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-50 animate-pulse"
                         style={{ boxShadow: 'inset 0 0 50px rgba(167, 139, 250, 0.1)' }} />

                    <div className="relative z-10">
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="inline-block mb-6"
                        >
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                                <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                                    <Github size={36} className="text-primary" />
                                </div>
                            </div>
                        </motion.div>

                        <h3 className="text-2xl font-bold text-white mb-3">
                            Explore My Work
                        </h3>

                        <p className="text-gray-400 mb-8 max-w-md mx-auto">
                            Browse through repositories, check contribution history, and see what I've been working on
                        </p>

                        <motion.a
                            href="https://github.com/Kishor0513"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary to-secondary text-dark font-bold rounded-full shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
                        >
                            <Github size={20} />
                            View GitHub Profile
                            <ExternalLink size={16} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GitHubStats;