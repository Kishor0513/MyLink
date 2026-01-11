import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const TimelineItem = ({ data, index }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`relative flex items-center justify-between mb-12 w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
            }`}
    >
        <div className="hidden md:block w-5/12" />

        <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-10 h-10 rounded-full border-4 border-dark justify-center text-dark">
            {data.type === 'work' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
        </div>

        <div className="order-1 glass-panel border border-white/10 rounded-2xl shadow-xl w-full md:w-5/12 px-6 py-6 hover:border-primary/30 transition-colors group">
            <div className="flex items-center gap-2 mb-2 text-primary text-sm font-mono">
                <Calendar size={14} />
                <span>{data.period}</span>
            </div>
            <h3 className="mb-1 font-bold text-white text-xl group-hover:text-primary transition-colors">{data.title}</h3>
            <h4 className="mb-3 font-semibold text-gray-400 text-sm">{data.company}</h4>
            <p className="text-sm leading-relaxed text-gray-400">{data.description}</p>
        </div>
    </motion.div>
);

const Timeline = () => {
    const experiences = [
        {
            type: 'work',
            title: 'Your Job Title',
            company: 'Company Name',
            period: '2023 - Present',
            description: 'Provide a brief description of your role and key accomplishments here.'
        },
        {
            type: 'work',
            title: 'Previous Role',
            company: 'Tech Solutions',
            period: '2021 - 2023',
            description: 'Describe your previous experience and the impact you made in this position.'
        },
        {
            type: 'education',
            title: 'Your Degree',
            company: 'University Name',
            period: '2019 - 2023',
            description: 'Mention your field of study and any notable academic highlights or projects.'
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                        Professional Journey
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">A timeline of my professional growth and educational background.</p>
                </div>

                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="absolute border-opacity-20 border-gray-700 h-full border left-1/2 -translate-x-1/2 hidden md:block" />
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index} data={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
