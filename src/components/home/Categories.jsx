"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        id: 1,
        name: "Toys",
        image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "from-blue-400 to-blue-600",
    },
    {
        id: 2,
        name: "Clothing",
        image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&q=80",
        color: "from-pink-400 to-pink-600",
    },
    {
        id: 3,
        name: "Accessories",
        image: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=500&q=80",
        color: "from-purple-400 to-purple-600",
    },
    {
        id: 4,
        name: "Footwear",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "from-yellow-400 to-orange-500",
    },
];

const Categories = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-base-200 to-base-100 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        Shop by <span className="text-gradient-primary">Category</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
                        Explore our wide range of products curated just for your little ones.
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-4"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-2xl font-bold text-white text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {category.name}
                                    </h3>
                                    <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <span className="bg-white text-gray-900 text-xs font-bold px-4 py-2 rounded-full">
                                            Explore Now
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
