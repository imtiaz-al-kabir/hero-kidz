"use client";
import { motion } from "framer-motion";
import { FaShippingFast, FaHeadset, FaUndo, FaShieldAlt } from "react-icons/fa";

const features = [
    {
        icon: <FaShippingFast size={40} />,
        title: "Free Shipping",
        description: "On all orders over $100",
        color: "bg-primary/10 text-primary",
    },
    {
        icon: <FaHeadset size={40} />,
        title: "24/7 Support",
        description: "Expert support always",
        color: "bg-secondary/10 text-secondary",
    },
    {
        icon: <FaUndo size={40} />,
        title: "Easy Returns",
        description: "30 day money back",
        color: "bg-accent/10 text-accent",
    },
    {
        icon: <FaShieldAlt size={40} />,
        title: "Secure Payment",
        description: "100% secure payment",
        color: "bg-success/10 text-success",
    },
];

const Features = () => {
    return (
        <section className="py-16 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 p-6 rounded-3xl bg-white shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 hover:-translate-y-2"
                        >
                            <div className={`p-4 rounded-2xl ${feature.color} flex-shrink-0`}>
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600 text-sm font-semibold">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
