import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { X } from 'lucide-react';

const QRCodeModal = ({ isOpen, onClose, links }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 20 }}
                    className="bg-surface border border-white/10 p-8 rounded-2xl max-w-sm w-full relative shadow-2xl shadow-purple-500/20"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="text-center">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                            Connect With Me
                        </h3>

                        <div className="bg-white p-2 rounded-xl inline-block mb-6 shadow-lg">
                            <img
                                src="/assets/new_qr_code.png"
                                alt="Contact QR Code"
                                className="w-[200px] h-[200px] object-contain"
                            />
                        </div>

                        <p className="text-gray-400 mb-6 text-sm">
                            Scan to view my portfolio & contact details instantly.
                        </p>


                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default QRCodeModal;
