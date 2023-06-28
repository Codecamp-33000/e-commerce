/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const Sidebar = () => {
  const [slide, showSlide] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <div className="fixed md:w-[500px] md:h-[90vh] w-[400px] h-[80vh] right-10 my-auto  top-2 bottom-4 z-[50] text-center leading-loose font-serif">
        <div className={slide ? "block" : "hidden"}>
          <div className="w-full h-full m-4 right-0 bg-white text-black rounded-lg">
            <img
              src="https://cdn-02.marsello.com/5af8f20c8e2bf309ec38d7e8-9b10679b-bb7d-4cef-8167-cf39db9044d7.jpg"
              alt=""
            />
            <AiOutlineClose
              size={25}
              className="absolute right-0 cursor-pointer"
              onClick={() => {
                showSlide(false);
              }}
            />
            <div className="py-4">
              <h3 className="md:text-2xl text-xl py-3">Vaseline Designer Boutique</h3>
              <p className="md:text-xl text-base py-1">Create an account to access </p>
              <p className="md:text-xl text-base">exclusive rewards!</p>
            </div>
            <div>
              <div className="flex items-center justify-between px-6">
                <button
                  onClick={() => toggleTab(1)}
                  className="relative inline-block before:contents-[''] before:absolute before:top-8 before:w-0 before:h-[2px] before:rounded-full before:transition-all before:duration-500 before:focus:w-full before:bg-black"
                >
                  Rewards
                </button>
                <button
                  onClick={() => toggleTab(2)}
                  className="relative inline-block before:contents-[''] before:absolute before:top-8 before:w-0 before:h-[2px] before:rounded-full before:transition-all before:duration-500 before:focus:w-full before:bg-black"
                >
                  Earn
                </button>
                <button
                  onClick={() => toggleTab(3)}
                  className="relative inline-block before:contents-[''] before:absolute before:top-8 before:w-0 before:h-[2px] before:rounded-full before:transition-all before:duration-500 before:focus:w-full before:bg-black"
                >
                  Tiers
                </button>
              </div>
              <div className={toggleState === 1 ? "block" : "hidden"}>
                <div className="py-6 flex items-center justify-between">
                  <div className="flex items-center pl-4 gap-6">
                    <img
                      src="https://w7.pngwing.com/pngs/849/804/png-transparent-alarm-clocks-computer-icons-timer-clock-angle-time-share-icon-thumbnail.png"
                      width={30}
                      height={30}
                    />
                    <span>Vaseline VIP $70 off</span>
                  </div>
                  <p className="text-gray-400 mr-6">700 points</p>
                </div>
              </div>
              <div className={toggleState === 2 ? "block" : "hidden"}>
                <div className="py-4 flex items-center justify-between px-6">
                  <p className="md:text-xl text-base">Create an account</p>
                  <span className="text-gray-400 ">+10points</span>
                </div>{" "}
                <hr />
                <div className="py-4 flex items-center justify-between px-6">
                  <p className="md:text-xl text-base">On your birthday</p>
                  <span className="text-gray-400 ">+10 points</span>
                </div>{" "}
                <hr />
                <div className="py-4 flex items-center justify-between px-6">
                  <p className="md:text-xl text-base">Make an order</p>
                  <span className="text-gray-400 ">1 points per $1.00</span>
                </div>{" "}
                <hr />
                <div className="py-4 flex items-center justify-between px-6">
                  <p className="md:text-xl text-base">Follow us on Instagram</p>
                  <span className="text-gray-400 ">+10 points</span>
                </div>{" "}
                <hr />
              </div>
              <div className={toggleState === 3 ? "block" : "hidden"}>
                <div className="py-4 flex items-center justify-between px-6">
                  <p className="md:text-xl text-base">Member</p>
                  <span className="text-gray-400 ">0 points+</span>
                </div>{" "}
                <hr />
              </div>
            </div>
            <div className="py-4  text-base">
              <button className="bg-black text-white  px-4 py-2">
                Create a store account
              </button>
              <p className="py-2">
                Already have an account? <a href="">Login</a>
              </p>
              <p>
                <a href="">Terms</a> and <a href="">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
        <div className="fixed -right-14 z-50 top-[50%] -rotate-90">
          <button
            onClick={() => {
              showSlide(true);
            }}
            className="border-2 px-6 py-3 rounded-t-xl -mb-10 bg-white text-black "
          >
            Check rewards
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
