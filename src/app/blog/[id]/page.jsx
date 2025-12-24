"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { FaArrowLeft, FaCalendar, FaUser } from "react-icons/fa";

// Mock Data (same as list for simplicity)
const blogs = [
    {
        id: 1,
        title: "The Importance of Educational Toys for Kids",
        content: "Educational toys are more than just fun and games. They are essential tools that help children develop critical skills such as problem-solving, fine motor coordination, and creativity. In this article, we explore the top types of educational toys and how they benefit your child's growth at different stages.",
        image: "https://images.unsplash.com/photo-1696527014253-c40e338fe686?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Dec 24, 2024",
        author: "Fatima Ahmed",
        category: "Education",
    },
    {
        id: 2,
        title: "Top 10 Outdoor Games for Summer 2024",
        content: "Summer is the perfect time to get kids active and outdoors. From classic tag to creative nature scavenger hunts, here are our top 10 picks for outdoor games that will keep your children entertained and healthy this season.",
        image: "https://images.unsplash.com/photo-1650131440321-6ae7a4e8d7bb?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Dec 20, 2024",
        author: "Rahim Chowdhury",
        category: "Activities",
    },
    {
        id: 3,
        title: "Healthy Snack Ideas for Picky Eaters",
        content: "Dealing with a picky eater can be challenging. But healthy eating doesn't have to be boring! We've compiled a list of fun, nutritious, and delicious snack ideas that even the fussiest eaters will love.",
        image: "https://images.unsplash.com/photo-1725297951080-47e72ef3f788?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Dec 18, 2024",
        author: "Nusrat Jahan",
        category: "Nutrition",
    },
];

const BlogDetails = ({ params }) => {
    // Use React.use() to unwrap params in Next.js 15+ (if applicable) or standard access
    // For safety in Client Components with async params potential:
    const resolvedParams = use(params);
    const { id } = resolvedParams;

    const blog = blogs.find((b) => b.id == id);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Blog Post Not Found</h2>
                    <Link href="/blog" className="btn btn-primary mt-4">Back to Blog</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-base-100 py-12 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Link href="/blog" className="btn btn-ghost gap-2 mb-8 hover:bg-base-200 rounded-full font-bold">
                        <FaArrowLeft /> Back to Stories
                    </Link>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-premium-lg mb-8"
                    >
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-10 shadow-premium border border-gray-100"
                    >
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                            <span className="bg-gradient-to-r from-primary/20 to-secondary/20 text-primary px-4 py-2 rounded-full font-black uppercase tracking-wider text-xs border border-primary/30">
                                {blog.category}
                            </span>
                            <span className="flex items-center gap-2 font-semibold">
                                <FaCalendar /> {blog.date}
                            </span>
                            <span className="flex items-center gap-2 font-semibold">
                                <FaUser /> {blog.author}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                            <p className="text-xl mb-6">
                                {blog.content}
                            </p>

                            <p className="text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
