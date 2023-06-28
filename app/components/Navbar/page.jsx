/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {Link} from 'react-scroll'
import { menuList } from "../menuList";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const Menulist = menuList.map((menu) => {
    return (
      <li className="active:underline active:text-indigo-300 md:ml-10 uppercase text-base font-mono py-4 text-purple-200 tracking-widest">
        <Link onClick={() => setNav(false)}
          spy={true}
          smooth={true}
          offset={10}
          duration={300}
          className="px-10 md:px-4 py-4 md:ml-6 rounded-lg cursor-pointer uppercase"
          to={menu.name}
          href={menu.url} activeClass="underline text-indigo-300">{menu.name}</Link>
      </li>
    );
  });
  return (
    <div className="w-full h-20  shadow-2xl bg-gradient-to-r from-[#5F0A87] to-[#A4508B] z-50">
      <div className="fixed w-full h-20 z-50">
        <div className="max-w-[1280px] mx-auto px-10 w-full h-20 flex items-center font-medium justify-between">
          <Link href={"/"}>
            <p className="text-2xl bg-gradient-to-r from-purple-400 to-white bg-clip-text inline-block text-transparent ">Vaseline <span className="text-base italic">Shopping</span></p>
          </Link>
          <button className="md:hidden">
            <AiOutlineMenu size="25" onClick={() => setNav(true)} />
          </button>
          <ul className="hidden md:flex justify-center">{Menulist}</ul>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%[ md:w-[45%] mx-auto md:mx-auto h-screen bg-gradient-to-b from-[#5F0A87] to-[#A4508B] transition-all duration-500 z-50"
            : "fixed left-[-100%] top-0  w-[75%] sm:w-[60%[ md:w-[45%]  mx-auto h-screen bg-gradient-to-b from-[#5F0A87] to-[#A4508B]   transition-all duration-500 z-50"
        }
      >
        <div className="w-full h-full flex flex-col items-center py-4 px-10">
          <div className="w-full py-6 flex items-center justify-between">
          <p className="text-2xl bg-gradient-to-r from-purple-400 to-white bg-clip-text inline-block text-transparent">Vaseline <span className="text-base italic">Shopping</span></p>
            <AiOutlineClose size="25" className="cursor-pointer" onClick={() => setNav(false)} />
          </div>
          <ul className=" py-4 text-center">{Menulist}</ul>
        </div>
      </div>
    </div>
  );
};
export default Nav;
