/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { products } from "@/products";
import React, { useRef, useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { TbArrowBackUp } from 'react-icons/tb';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";
const Page = ({ params }) => {
  const [buyProduct, setBuyProduct] = useState(false);
  const [buiesProduct, setBuiesProduct] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4x9u7te",
        "template_csizupo",
        form.current,
        "pxnUsyK5IXtqy_XQe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const notify = () => {
    toast.success("Thank you for sending", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const buyNow = () => {
    setBuiesProduct(true);
    setBuyProduct(false);
    notify()
  };
  const selectedProduct = products.find((p) => p.id == params.id);
  const [count, setCount] = useState(1);
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === selectedProduct.otherImages.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? selectedProduct.otherImages.length - 1 : slide - 1);
  };
  const formInput = 'w-full h-10 placeholder:text-gray-400 placeholder:text-sm placeholder:md:text-lg bg-transparent focus:bg-transparent focus:outline-none border-b-red-500 border-b-2  '
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#5F0A87] to-[#A4508B]">
       <a href="/" className=" text-white py-20 flex justify-center items-center">
       <TbArrowBackUp className="absolute left-28 bg-black w-10 h-10 border-2 rounded-lg " size={35}/>
       </a>
      <ToastContainer className={""} />
      <div className="container mx-auto   grid grid-cols-1 lg:grid-cols-2 lg:gap-6 px-4 text-white">
        <div className="relative mx-auto w-[340px] h-[480px] lg:w-[475px] lg:h-[700px]">
          <div
            onClick={nextSlide}
            className="absolute left-2 top-[50%] bg-white text-[#5F0A87] py-2 px-2 rounded-full cursor-pointer  group-hover:ml-4 scroll-smooth ease-in-out duration-300 "
          >
            <MdChevronLeft size={30} />
          </div>
          {buiesProduct && (
            <div className="bg-black/50 w-[340px] h-[480px] lg:w-[475px] lg:h-[700px] absolute  flex justify-center items-center z-20 ">
             <p className=" -rotate-45 text-3xl lg:text-4xl tracking-widest text-gray-400">Sold Out</p>
            </div>
          )}
          {selectedProduct.otherImages.map((sub, index) => (
            <img
              key={index}
              src={sub.OtherImage}
              className={
                slide === index
                  ? "flex justify-center items-center w-full h-full"
                  : "hidden"
              }
            />
          ))}
          <div
            onClick={prevSlide}
            className="absolute right-2 top-[50%] bg-white text-[#A4508B] py-2 px-2 rounded-full cursor-pointer group-hover:mr-4 ease-in-out duration-300 "
          >
            <MdChevronRight size={30} />
          </div>
        </div>
        <div className="w-full h-full pt-10">
          <h2 className="text-xl tracking-widest">{selectedProduct.name}</h2>
          <p className=" font-semibold text-[25px] py-6">
            {selectedProduct.price}
          </p>
          <div className="flex items-center gap-6">
            <select
              id="countries"
              class=" border border-black bg-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>choose size</option>
              {selectedProduct.sizes.map((sub) => (
                <option>{sub.size}</option>
              ))}
            </select>
            <select
              id="countries"
              class=" border border-black bg-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>choose color</option>
              {selectedProduct.colors.map((sub) => (
                <option>{sub.color}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-6 my-6">
            <span className="bg-black w-16 h-16 px-2 rounded-lg text-xl flex justify-between items-center cursor-pointer">
              <span onClick={() => setCount(count > 0 ? count - 1 : count)}>
                -
              </span>
              {count}
              <span onClick={() => setCount(count < 10 ? count + 1 : count)}>
                +
              </span>
            </span>
            {buiesProduct && (
              <span className="flex items-center justify-center gap-4 px-5 py-4 bg-gray-500 rounded-xl ">
                <AiOutlineCheck size={20} />
                buied
              </span>
            )}
            <button
              className={
                buiesProduct ? "hidden" : " px-5 py-4 bg-black rounded-xl "
              }
              onClick={() => setBuyProduct(true)}
            >
              Buy Product
            </button>
          </div>
          <h2 className="text-xl ">Product Details</h2>
          <p className="pt-4 text-md tracking-widest leading-loose space-x-10 indent-16">
            {selectedProduct.productDetails}
          </p>
        </div>
      </div>
      <div
        className={
          buyProduct
            ? "z-40 w-[450px] h-[650px] md:w-[600px] md:h-[700px] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-black drop-shadow-xl rounded-xl px-6 md:px-10 py-10"
            : "hidden"
        }
      >
        <div>
          <div className="w-full  flex items-center gap-6 md:gap-10">
            <div className="w-[130px] h-[130px] md:w-[150px] md:h-[150px] border-2 bg-white rounded-lg">
              <img
                className="w-full h-full flex justify-center items-center"
                src={selectedProduct.image}
              />
            </div>
            <h2 className="text-xl md:text-2xl tracking-wider">{selectedProduct.name}</h2>
            <AiOutlineClose
              onClick={() => setBuyProduct(false)}
              size={30}
              className=" cursor-pointer absolute text-gray-500  text-center top-2 right-4"
            />
          </div>
          <div>
            <form ref={form} className="flex flex-col py-6" onClick={sendEmail}>
              <div className="w-full h-full">
                <label className="md:text-xl">Name</label>
                <input
                  placeholder="Name"
                  name="name"
                  className={formInput}
                  type="name"
                ></input>
              </div>
              <div className="w-full h-full my-4">
                <label className="md:text-xl">Email</label>
                <input
                  placeholder="Email"
                  name="user-email"
                  className={formInput}
                  type="email"
                ></input>
              </div>

              <div className="w-full h-full">
                <label className="md:text-xl">Phone Number</label>
                <input
                  placeholder="Phone Number"
                  name="phone-number"
                  className={formInput}
                  type="text"
                ></input>
              </div>
              <div className="w-full h-20 md:h-28 my-4">
                <label className="md:text-xl">Description</label>
                <div className="w-full h-full rounded-md border-2 border-red-500 my-2">
                  <textarea
                    name="message"
                    className="w-full h-full resize-none focus:outline-none"
                  />
                </div>
              </div>
              <div className="text-center w-full my-10">
                <button
                  value="Send"
                  className="bg-red-500 py-2 px-4 rounded-lg text-white"
                  onClick={buyNow}
                >
                  Buy Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
