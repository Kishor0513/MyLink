import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, Menu, X, ArrowRight } from "lucide-react";

const Navbar = ({ onOpenQR }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-dark/70 backdrop-blur-xl border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-bold tracking-tight group flex items-center gap-0.5"
          style={{ fontFamily: "Space Grotesk, Inter, system-ui, sans-serif" }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-white">Kishor</span>
          <span className="text-primary group-hover:text-secondary transition-colors">
            .dev
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] uppercase tracking-widest font-semibold text-gray-400 hover:text-primary transition-all relative group"
                style={{ fontFamily: "Outfit, Inter, system-ui, sans-serif" }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={onOpenQR}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all text-primary"
            >
              <QrCode size={20} />
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-primary text-dark font-bold rounded-full text-sm flex items-center gap-2 group shadow-lg shadow-primary/20"
              style={{ fontFamily: "Outfit, Inter, system-ui, sans-serif" }}
            >
              Hire Me
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-dark/95 backdrop-blur-2xl z-50 lg:hidden flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-2 text-gray-400 hover:text-white"
            >
              <X size={32} />
            </button>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-4xl font-bold text-white hover:text-primary transition-colors"
                style={{
                  fontFamily: "Space Grotesk, Inter, system-ui, sans-serif",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={() => {
                onOpenQR();
                setMobileMenuOpen(false);
              }}
              className="mt-4 px-10 py-4 bg-primary text-dark font-bold rounded-full text-xl"
              style={{ fontFamily: "Outfit, Inter, system-ui, sans-serif" }}
            >
              Open QR Code
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
