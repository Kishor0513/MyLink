import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, ExternalLink } from 'lucide-react';

const Sidebar = () => {
    const socials = [
        { icon: <Github size={20} />, href: 'https://github.com/Kishor0513', label: 'GitHub' },
        { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/kishor-chaudhary', label: 'LinkedIn' },
        { icon: <Instagram size={20} />, href: 'https://www.instagram.com/kishor0513/', label: 'Instagram' },
        { icon: <ExternalLink size={20} />, href: 'https://linktr.ee/kishor0513', label: 'Linktree' },
        { icon: <Mail size={20} />, href: 'mailto:kishorc2000@gmail.com', label: 'Email' },
    ];

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-6"
        >
            <div className="flex flex-col gap-6 items-center">
                {socials.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, x: -5 }}
                        className="text-gray-400 hover:text-primary transition-colors p-2 glass-panel rounded-xl border border-white/5 hover:border-primary/50 group relative liquid-glass"
                    >
                        {social.icon}
                        <span className="absolute right-full mr-4 px-2 py-1 bg-primary text-dark text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            {social.label}
                        </span>
                    </motion.a>
                ))}
            </div>
            <div className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-4" />
        </motion.div>
    );
};

export default Sidebar;
