import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = ({ onOpenQR }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="text-2xl font-bold font-sans tracking-tighter hover:text-primary transition-colors">
                    Kishor<span className="text-primary">.dev</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    <button
                        onClick={onOpenQR}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all hover:scale-105 active:scale-95 group"
                    >
                        <QrCode size={18} className="text-primary group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium">Scan Me</span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-gray-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-dark border-b border-white/5 px-6 pb-6"
                >
                    <div className="flex flex-col gap-4 pt-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-gray-300 hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                onOpenQR();
                                setMobileMenuOpen(false);
                            }}
                            className="flex items-center justify-center gap-2 px-5 py-3 bg-primary/10 rounded-lg text-primary font-medium mt-2"
                        >
                            <QrCode size={18} />
                            Open QR Code
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
