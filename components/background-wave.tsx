"use client";
import { motion } from "framer-motion";

export const BackgroundWave = () => {
  return (
    <motion.video
      src="/backwave.mp4"
      autoPlay
      muted
      loop
      controls={false}
      className="fixed  object-cover top-0 z-[-1]  hidden md:block pointer-events-none  "
    />
  );
};
