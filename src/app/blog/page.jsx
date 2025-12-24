"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaUser } from "react-icons/fa";

const blogs = [
    {
        id: 1,
        title: "The Importance of Educational Toys for Kids",
        excerpt: "Discover how educational toys can spark your child's creativity and cognitive development.",
        image: "https://images.unsplash.com/photo-1696527014253-c40e338fe686?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Dec 24, 2024",
        author: "Fatima Ahmed",
        category: "Education",
    },
    {
        id: 2,
        title: "Top 10 Outdoor Games for Summer 2024",
        excerpt: "Get your kids moving with these fun and engaging outdoor activities this summer season.",
        image: "https://images.unsplash.com/photo-1650131440321-6ae7a4e8d7bb?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Dec 20, 2024",
        author: "Rahim Chowdhury",
        category: "Activities",
    },
    {
        id: 3,
        title: "Healthy Snack Ideas for Picky Eaters",
        excerpt: "Struggling with mealtime? Try these delicious and healthy snack recipes your kids will love.",
        image: "https://images.unsplash.com/photo-1725297951080-47e72ef3f788?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Dec 18, 2024",
        author: "Nusrat Jahan",
        category: "Nutrition",
    },
];

const BlogPage = () => {
    return (
        <div className="min-h-screen bg-base-100 py-12 w-full">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black mb-4"
                    >
                        Our Latest <span className="text-gradient-primary">Stories</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 font-medium"
                    >
                        Tips, guides, and updates for happy parents and smarter kids.
                    </motion.p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-4"></div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="group bg-white rounded-3xl shadow-premium hover:shadow-premium-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col"
                    >
                        {/* Image */}
                        <div className="relative h-56 w-full overflow-hidden">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                                {blog.category}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                <span className="flex items-center gap-1">
                                    <FaCalendar /> {blog.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaUser /> {blog.author}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                {blog.title}
                            </h3>

                            <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-1">
                                {blog.excerpt}
                            </p>

                            <Link
                                href={`/blog/${blog.id}`}
                                className="btn btn-outline btn-primary btn-sm rounded-xl self-start font-bold border-2 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
                            >
                                Read More
                            </Link>
                        </div>
                    </motion.div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;