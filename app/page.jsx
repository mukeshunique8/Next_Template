"use client"
import React from 'react';
import { motion } from "framer-motion";


export default function Page() {
  return (
    <div className="mx-auto text-center flex pt-[10%] items-center flex-col font-extralight  text-white w-full h-screen gap-4 bg-black ">
      <h1 className="font-extrabold font-serif text-cyan-600 text-[50px]">
        Hello, Next.js!
      </h1>
      <h1 className="max-w-[1440px] text-[25px] px-[30px] text-center">
        Get ready to turbocharge your web projects with our Next.js Template!
        Featuring Chakra UI, Emotion, Axios, and Framer Motion, it's your
        ultimate starting point for lightning-fast development. Say goodbye to
        setup headaches and hello to sleek, efficient coding. Let's build
        something amazing together! 🚀
      </h1>

      <div className='w-fit  absolute top-[20%] h-auto md:w-auto md:h-auto  bg-transparent  hidden md:flex justify-center items-center' >
      <motion.div
      className="box cursor-pointer"
      whileHover={{ scale: 1.2,rotate:[0],borderRadius:["0%"], repeatCount:0}}
     
      
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        opacity:["0.1"],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    />
      </div>
    </div>
  );
}
