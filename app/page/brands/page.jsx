/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import { products } from "@/products.js";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
function Brands() {
  const [button, setButton] = useState(false);
  const [general, setGeneral] = useState(products);

  function rightClick() {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  }
  function leftClick() {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  }
  const filterType = (category) => {
    setGeneral(
      products.filter((product) => {
        return product.category === category;
      })
    );
  };

  return (
    <div
      id="brands"
      
      className="group w-full h-full bg-gradient-to-r from-[#5F0A87] to-[#A4508B] overflow-hidden"
    >
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        onMouseEnter={() => {
          setButton(true);
        }}
        className=" h-full w-full flex flex-col justify-center items-center px-4"
      >
        <div className="w-full h-full text-center ">
          <h1 className="text-3xl py-6">Must Haves</h1>
          <p className="text-2xl ">Some of our favourite picks this week.</p>
        </div>
        <div className="container mx-auto w-full flex justify-center items-center gap-4 md:gap-6 py-6">
          <button
            onClick={() => filterType("male")}
            className="w-full  text-xl md:text-2xl border-2 rounded-lg   text-center py-3 md:py-4 active:bg-purple-400"
          >
            Male
          </button>
          <button
            onClick={() => filterType("female")}
            className="w-full  text-xl md:text-2xl border-2 rounded-lg  text-center py-3 md:py-4 active:bg-purple-400"
          >
            Female
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="relative"
      >
        <ul
          id="slider"
          className=" flex flex-rows gap-10  md:pl-20 pb-6 items-center  overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
        >
          {general.map((product, index) => {
            return (
              <li key={index} className="my-4 rounded-xl">
                <a href={`/${product.id}`}>
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className=" border-4 w-[30vh] h-[40vh] lg:w-[40vh] lg:h-[50vh] xl:w-[50vh] xl:h-[70vh] hover:scale-105 transition-all duration-500">
                      <img
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full inline-block cursor-pointer"
                        src={product.image}
                        alt={product.name}
                      />
                    </div>

                    <div className="w-full h-[15%] pt-[2%] text-center ">
                      <h2 className="text-xs md:text-base py-1">
                        {product.name}
                      </h2>
                      <p className=" text-xs lg:text-base py-1">
                        {product.price}
                      </p>
                      <ul className="list-none flex justify-center ">
                        {product.sizes.map((sub) => (
                          <li className="text-sm border-2 ml-2 my-2 px-1 py-0.5 md:px-2 md:py-1 cursor-pointer">
                            {sub.size}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>

        <div
          className={
            button
              ? " left-4  bg-white absolute top-[30%] lg:top-[40%]   text-[#5F0A87] gap-1 py-2 px-2 rounded-full cursor-pointer  transition-all duration-300 "
              : "left-[-20%] bg-white absolute top-[30%] lg:top-[40%]   text-[#5F0A87] gap-1 py-2 px-2 rounded-full cursor-pointer  transition-all duration-300 "
          }
        >
          <MdChevronLeft size={40} onClick={leftClick} />
        </div>
        <div
          className={
            button
              ? "right-4 z-50 bg-white absolute top-[30%] lg:top-[40%]   text-[#A4508B] gap-1 py-2 px-2 rounded-full cursor-pointer  transition-all duration-300 "
              : "right-[-20%] z-50 bg-white absolute top-[30%] lg:top-[40%]   text-[#A4508B] gap-1 py-2 px-2 rounded-full cursor-pointer  transition-all duration-300 "
          }
        >
          <MdChevronRight size={40} onClick={rightClick} />
        </div>
      </motion.div>
    </div>
  );
}
export default Brands;
