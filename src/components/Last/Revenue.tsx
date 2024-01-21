"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const sectionVariants = {
  initial: { scale: 1.2, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.7 } },
};

const Revenue = () => {
  return (
    // <div className="flex max-w-[941px] mx-auto justify-center flex-col items-stretch">

    // </div>
    <span className="justify-center items-center self-stretch border backdrop-blur-[6px] flex flex-col px-12 py-12 bg-white bg-opacity-10 rounded-3xl border-solid border-white border-opacity-20 max-md:px-5">
      <div className="text-xs font-medium leading-4 tracking-widest uppercase  whitespace-nowrap mt-3.5">
        <span className="heading-gradient">Revenue Stream</span>
      </div>
      <div className="self-stretch text-white text-center text-4xl font-bold leading-[56px] tracking-tighter mt-1.5 max-md:max-w-full">
        Problem and solution text headline replace here
      </div>
      <div className="self-stretch text-white text-opacity-70 text-center text-xl font-[450] leading-8 tracking-tighter mt-1 max-md:max-w-full">
        In this beginning era of a.i which is future of technology,
        computational
      </div>
      <motion.div
        variants={sectionVariants}
        initial="initial"
        animate="animate"
        // whileInView={"animate"}
        className="w-full mx-auto flex justify-center"
      >
        <img
          alt="logo"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c5ca6c6e625029abae0a4312d65ff1f53d2dc085e599c3b54323ae9070c1e69?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          className="aspect-[2.1] object-contain object-center w-full overflow-hidden max-w-[941px] mt-16 mb-3.5 max-md:max-w-full max-md:mt-10"
        />
      </motion.div>
    </span>
  );
};

export default Revenue;
