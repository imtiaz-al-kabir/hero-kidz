"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <div className="bg-base-100 border-b border-gray-100 overflow-hidden">
      <div className="w-11/12 mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[600px] py-16">

        {/* Left: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left space-y-8 max-w-xl mx-auto lg:mx-0 z-10"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs mb-2">
              ✨ New Arrivals 2024
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-bold text-neutral leading-[1.1] tracking-tight"
          >
            Quality Style for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Happy Kids.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-gray-500 leading-relaxed font-normal max-w-md mx-auto lg:mx-0">
            Premium clothing and toys designed for comfort and durability.
            Give your little ones the best with our sustainably sourced collection.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary btn-lg rounded-xl px-10 font-bold text-white shadow-lg shadow-primary/30 h-14 min-h-0 w-full sm:w-auto"
              >
                Shop Collection
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline btn-neutral btn-lg rounded-xl px-10 font-bold h-14 min-h-0 w-full sm:w-auto"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-100 mt-8 opacity-80"
          >
            {[
              { label: "Products", value: "2k+" },
              { label: "Customers", value: "5k+" },
              { label: "Reviews", value: "4.9" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl font-black text-neutral">{stat.value}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Image - Cool Slide In */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative h-[500px] w-full"
        >
          {/* Abstract Decor Blob */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />

          <div className="relative h-full w-full bg-gray-50 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
            <Image
              src="/assets/hero.png"
              alt="Kidz Zone Collection"
              fill
              className="object-cover object-center transition-transform duration-[2s] group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Floating "Cool" Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg"
            >
              <p className="text-sm font-bold text-neutral">🎉 Winter Sale Live</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Banner;
