/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import M1 from "@/public/Image/more1.jpg";
import M2 from "@/public/Image/more2.jpg";
import M3 from "@/public/Image/more3.jpg";
import Item from "./items";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";
const MoreInfo = () => {
  return (
    <div id="staffedit"  className="w-full h-full bg-gradient-to-r from-[#5F0A87] to-[#A4508B] py-20">
      <motion.div variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }} className="max-w-[1260px] w-full h-full mx-auto px-4">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          <Item name='New Arrivals' image={M1}/>
          <Item name='New Arrivals' image={M2}/>
          <Item name='New Arrivals' image={M3}/>
        </div>
      </motion.div>
    </div>
  );
};

export default MoreInfo;
