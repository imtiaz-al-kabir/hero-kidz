"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";

const ContactPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Message Sent!",
            text: "We will get back to you shortly.",
            icon: "success",
            confirmButtonColor: "#3085d6",
        });
        e.target.reset();
    };

    return (
        <div className="min-h-screen bg-base-100 py-12 w-full">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black mb-4"
                    >
                        Get in <span className="text-gradient-primary">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 font-medium"
                    >
                        Have questions? We'd love to hear from you.
                    </motion.p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-premium border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <FaMapMarkerAlt size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Our Location</h4>
                                        <p className="text-gray-600">123 Kids Street, Dhaka, Bangladesh</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                                        <FaPhoneAlt size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Phone Support</h4>
                                        <p className="text-gray-600">+880 1234-567890</p>
                                        <p className="text-gray-600">+880 1987-654321</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-accent/10 p-3 rounded-full text-accent">
                                        <FaEnvelope size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Email Us</h4>
                                        <p className="text-gray-600">support@kidzzone.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Socials / Extra */}
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-4">Connect on WhatsApp</h4>
                                <button className="btn btn-success text-white w-full rounded-xl gap-2 font-bold shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105">
                                    <FaWhatsapp size={20} /> Chat with us
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 rounded-3xl shadow-premium-lg border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-gray-700">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-gray-700">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-gray-700">Subject</span>
                                </label>
                                <select
                                    className="select select-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select an inquiry type</option>
                                    <option>Order Status</option>
                                    <option>Product Inquiry</option>
                                    <option>Returns & Refunds</option>
                                    <option>General Support</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-gray-700">Message</span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered h-32 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full rounded-xl mt-4 text-lg font-bold shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;