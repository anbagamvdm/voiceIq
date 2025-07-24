"use client";
import { motion } from "framer-motion";

export const GlobeWave = () => {
  return (
    <motion.video
      src="/globe.mp4"
      autoPlay
      muted
      loop
      controls={false}
      className="relative flex items-center justify-center transition-all w-48 h-27  "
    />
  );
};
