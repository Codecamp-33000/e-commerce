/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import Image from "next/image";
import Dasha from "../../../public/Image/women.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";
function Homegrown() {
  return (
    <div
      id="homegrown"
      className="w-full h-full bg-gradient-to-r from-[#5F0A87] to-[#A4508B]"
    >
      <div className="max-w-[1260px] leading-loose w-full h-full mx-auto px-4 py-20">
        <div className="w-full h-full flex-row md:flex gap-10">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-[611px] max-h-[918px] w-full h-full mx-auto"
          >
            <Image src={Dasha} width={611} height={918} />
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full h-full my-auto text-center"
          >
            <h3 className="text-3xl py-6 font-extrabold ">Homegrown</h3>
            <p>
              We love all of our beautiful brands here at Hebe but there is a
              special place in our heart for the New Zealand brands. We have
              made it easy for you to find a little about each of these amazing
              brands. Head over to our Homegrown page where we give you a little
              insight into what makes each of these brands so special.
            </p>
            <button className="my-6 py-3 px-8 bg-white text-black font-bold">
              Find out more
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Homegrown;
