import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';

const ReviewCard = ({ review, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/40 transition-all shadow-xl group h-full flex flex-col liquid-glass"
    >
        <div className="flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className={i < review.rating ? "text-primary fill-primary" : "text-gray-600"} />
            ))}
        </div>

        <div className="flex-grow">
            <p className="text-gray-300 italic mb-8 leading-relaxed text-lg">"{review.text}"</p>
        </div>

        <div className="flex items-center gap-4 border-t border-white/5 pt-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
            </div>
            <div>
                <h4 className="font-bold text-white group-hover:text-primary transition-colors">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
            </div>
        </div>
    </motion.div>
);

const Reviews = () => {
    const reviews = [
        {
            name: 'Anish Shrestha',
            role: 'Product Lead @ TechNepal',
            text: 'Kishor is an exceptional developer who transformed our complex requirements into a seamless, high-performance e-commerce engine. His attention to detail in full-stack architecture is remarkable.',
            rating: 5,
            image: 'https://i.pravatar.cc/150?u=anish'
        },
        {
            name: 'Prativa Pandey',
            role: 'Founder @ CreativeLabs',
            text: 'Working with Kishor was a game-changer for our digital presence. He doesn\'t just write code; he builds immersive experiences that truly resonate with users. Highly recommended for any serious web initiative.',
            rating: 5,
            image: 'https://i.pravatar.cc/150?u=prativa'
        },
        {
            name: 'Sujan Karki',
            role: 'Senior Engineer',
            text: 'A rare talent who bridges the gap between creative design and robust engineering perfectly. Kishor\'s expertise in React and 3D animations helped us land a major contract. A true professional.',
            rating: 5,
            image: 'https://i.pravatar.cc/150?u=sujan'
        }
    ];

    return (
        <section id="reviews" className="py-24 px-6 bg-dark/30">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-primary mb-4 font-mono text-sm">
                            <MessageSquare size={16} />
                            <span>Client Feedback</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Trusted by Professionals</h2>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-gray-400 max-w-xs text-sm">Real feedback from clients and collaborators across the globe.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
