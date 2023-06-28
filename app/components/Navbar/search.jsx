/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import Icon from "../../public/Image/nextjs-logo.jpg";
import { useState } from "react";
import { products } from "@/products";
const Search = () => {
  const [inputSearch, setInputsearch] = useState("");
  console.log(inputSearch);
  const product = products
    .filter((product) => {
      return inputSearch.toLowerCase() === ""
        ? product
        : product.name.toLowerCase().includes(inputSearch);
    })
    .map((product) => {
      return (
        <div id="search" className="w-full h-20 border-2 bg-white text-black">
          <div key={product.id} className="flex items-center gap-4">
            <a href={`/${product.id}`}><img src={product.image} className=" w-20 h-20 " /></a>
            <div>
              <h3 className="text-2xl">{product.name}</h3>
              <p>{product.description}</p>
              <span>${product.price}</span>
            </div>
          </div>
        </div>
      );
    });
  return (
    <div
      id="search"
      className="w-full h-full bg-gradient-to-r from-[#5F0A87] to-[#A4508B]"
    >
      <div className="max-w-[1240px] w-full h-screen mx-auto">
        <div className=" w-full h-full px-6 mx-auto">
          <div className="w-full flex justify-between items-center py-6">
            <Image src={Icon} width={60} height={60} />
            <button>
              <Link href="/" onClick={() => showSearch(false)}>
                <AiOutlineClose size={25} />
              </Link>
            </button>
          </div>
          <div className="">
            <div className="w-full h-16 mt-60 underline flex items-center justify-center">
              <form
                onChange={(e) => setInputsearch(e.target.value)}
                htmlFor="text"
                className="max-w-[300px] w-full h-full mx-auto flex items-center justify-between hover:border-b-2 hover:border-b-white"
              >
                <input
                  type="email"
                  placeholder="Search our store"
                  className="w-full h-full placeholder:text-3xl bg-transparent focus:bg-transparent focus:outline-none placeholder:text-white "
                />
                <CiSearch size={25} />
              </form>
            </div>
            <div className="max-w-[800px] w-full mx-auto h-60 my-6 overflow-y-scroll">
              {product}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Search;
