/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageSlider from "./image";
import cover1 from '@/public/Image/cover1.jpg'
import cover2 from '@/public/Image/cover2.jpg'
import cover3 from '@/public/Image/cover3.jpg'
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";
const Shop = () => {
  const images = [
    cover1,
    cover2,
    cover3,
  ];
 
  return (
    <motion.div id='shop'  variants={fadeIn("up", 0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.3 }} className="group">
        <div className="w-full h-[50vh] lg:h-[100vh] relative z-20">
        <div className="absolute top-0 left-0 w-full h-full  bg-black/40 z-20" />
          <ImageSlider images={images} interval={5000} />
          <div className="absolute top-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-20 p-2 ml-4">
            <h2 className="py-4 text-2xl md:py-4 md:text-3xl tracking-widest ">Hello!</h2>
            <p className="pb-6 text-2xl md:pb-8 md:text-3xl tracking-widest ">Vaseline Shopping</p>
            <button className="px-4 py-2 text-black bg-white text-base md:text-2xl">Shop Now</button>
          </div>
        </div>
      <div>
        <div className="max-w-[1240px] mx-auto w-full ">
          <p className="w-full h-full text-center leading-loose flex-wrap py-12 px-10">
            Curators of ethical fashion and New Zealand designed. Hebe is a
            destination concept store and online haven for style-seekers. A
            fashion selection lovingly handpicked for you, sealed with personal
            touch. Open six days.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default Shop;
