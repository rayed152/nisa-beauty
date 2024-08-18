"use client";
import { motion } from "framer-motion";

export const FirstDiv = () => {
  return (
    <div className="mt-4 flex items-center justify-center">
      <motion.div
        className="text-4xl font-bold text-[#678A46] mr-8 whitespace-pre-line leading-snug"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        {["Nisa Beauty", "Embrace Your Elegance"].map((line, lineIndex) => (
          <div key={lineIndex} className="block">
            {line.split(" ").map((word, wordIndex) => (
              <motion.span
                key={word}
                className="inline-block mr-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: wordIndex * 0.5 }}>
                {word}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
      <motion.div
        className="w-[50%] h-[50%] overflow-hidden rounded-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}>
        <video
          src="/FirstDiv.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted></video>
      </motion.div>
    </div>
  );
};
