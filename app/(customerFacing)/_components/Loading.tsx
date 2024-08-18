"use client";
import { motion } from "framer-motion";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Loading() {
  const words = ["Welcome", "To", "Nisa", "Beauty!"];

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <motion.div
        className="text-4xl font-bold text-[#678A46] whitespace-pre-line leading-snug"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        {words.map((word, wordIndex) => (
          <motion.span
            key={word}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: wordIndex * 0.3 }}>
            {word}
          </motion.span>
        ))}

        {/* Add the icon at the end, with a delay after the last word */}
        <motion.span
          className="inline-block ml-2 animate-bounce"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.1,
            delay: words.length * 0.3,
          }}>
          <MdOutlineShoppingBag />
        </motion.span>
      </motion.div>
    </div>
  );
}
