"use client";
import { motion } from "framer-motion";

const Newsletter = () => {
    return (
        <section className="py-24 relative overflow-hidden w-full">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-primary rounded-3xl md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/30"
                >
                    {/* Decorative Circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                        Join the Fun Club! 🎈
                    </h2>
                    <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Subscribe to our newsletter and get <span className="font-bold text-yellow-300">10% OFF</span> your first purchase. Be the first to know about new arrivals and exclusive offers.
                    </p>

                    <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-8 py-5 rounded-full text-lg outline-none focus:ring-4 focus:ring-white/30 transition-all font-medium text-gray-700 bg-white shadow-lg"
                        />
                        <button className="bg-gray-900 text-white font-bold text-lg px-10 py-5 rounded-full hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-300">
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
