"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="max-w-lg rounded-2xl bg-white p-10 shadow-lg text-center"
      >
        <motion.div
          animate={{
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="text-7xl"
        >
          📦
        </motion.div>

        <h1 className="mt-6 text-4xl font-bold text-gray-900">
          Product Not Found
        </h1>

        <p className="mt-4 text-gray-600 leading-7">
          Sorry, we couldn't find the product you're looking for.
          <br />
          It may have been removed or the link is invalid.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-black px-6 py-3 text-white transition hover:scale-105 hover:bg-gray-800"
        >
          Back to Shop
        </Link>
      </motion.div>
    </main>
  );
}