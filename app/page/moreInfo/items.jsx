/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
const Item = (props) => {
  return (
          <div className="group max-w-[400px] max-h-[400px] w-full h-full mx-auto ">
          <div className=" w-full h-full hover:scale-105 transition-all duration-500 relative">
            <div className="w-full h-full  opacity-100 group-hover:opacity-50 group-hover:scale-105 group-hover:py-4 transition-all duration-500">
              <Image className="w-full h-full object-cover" src={props.image} />
            </div>
            <div className="absolute opacity-100 font-bold w-full h-full inset-0 flex items-center justify-center text-2xl md:text-xl lg:text-2xl  px-9 text-center z-30">
              <p className="relative inline-block before:contents-[''] before:absolute before:top-10 before:w-0 before:h-[2px] before:rounded-full before:transition-all before:duration-500 before:group-hover:w-full group-hover:text-gray-300 before:bg-white">
                {props.name}
              </p>
            </div>
          </div>
        </div>
  )
}

export default Item