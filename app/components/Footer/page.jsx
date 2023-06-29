/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { link } from "../menuList";
import { dollar } from "@/products";

const Footer = () => {
  const links = link.map(({ name, url }, index) => {
    return (
      <li className="ml-4" key={index}>
        <Link href={url}>{name}</Link>
      </li>
    );
  });
  const dollars = dollar.map(({ name }, index) => {
    return (
      <option
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        key={index}
      >
        {name}
      </option>
    );
  });
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#5F0A87] to-[#A4508B]">
      <div className="max-w-[1240px] w-full h-full mx-auto text-center">
      <div className="w-full h-full py-14">
        <h2>Join us</h2>
        <p className="py-4 text-xs md:text-sm text-center">
          We will let you know when we have new arrivals, events and promo's
          don't worry we send <br /> them infrequently, just a friendly hi now
          and again!
        </p>
        <form
          htmlFor="email"
          className="max-w-[300px] py-4 w-full h-full mx-auto flex items-center justify-between pb-3 hover:border-b-2 hover:border-b-white"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className=" placeholder:text-base bg-transparent focus:bg-transparent focus:outline-none placeholder:text-white "
          />
          <AiOutlineMail size={25} />
        </form>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-white dark:text-white ">
          <select className="text-2xl px-4 py-2 bg-transparent border-b-2 border-b-white-300">
            {dollars}
          </select>
        </label>
        <div className="flex justify-center items-center py-4 ">
          <div className="px-3 py-3 border-2 rounded-full">
            <BsInstagram size={20} />
          </div>
          <div className="px-3 py-3 border-2 rounded-full ml-2">
            <BsFacebook size={20} />
          </div>
        </div>
        <div>
          <ul className="text-sm py-2 flex justify-center items-center">
            {links}
          </ul>
          <span className="text-xs">&copy; 2023 Hebe Designer Boutique </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
