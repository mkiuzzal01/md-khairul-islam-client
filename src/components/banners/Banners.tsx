"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Box, Container } from "@mui/material";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bannerImage from "@public/assets/banner/uzzal.png";

const textVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: custom * 0.2, ease: "easeOut" },
  }),
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.8, ease: "easeOut" },
  },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
  },
  float: {
    y: [0, -20, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const Banner: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className="relative w-full max-h-1/2 flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#9B7EBD] to-[#D4BEE4]"
    >
      <Container
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-4 md:px-0"
      >
        {/* Text Content */}
        <Box className="flex-1 text-white text-center md:text-left">
          <motion.h1
            custom={1}
            variants={textVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-shadow"
          >
            MD KHAIRUL ISLAM
          </motion.h1>
          <motion.h5
            custom={2}
            variants={textVariants}
            className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6"
          >
            Full Stack Developer & UI/UX Designer
          </motion.h5>

          <Box className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105"
            >
              View Projects
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="border border-white text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-black"
            >
              Contact Me
            </motion.button>
          </Box>
        </Box>

        {/* Profile Image */}
        <motion.div variants={imageVariants} className="flex-1">
          <Box className="relative aspect-[3/4]">
            <Image
              src={bannerImage.src}
              alt="MD KHAIRUL ISLAM"
              fill
              objectFit="cover"
              priority
            />
          </Box>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Banner;
