/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ImageSlider = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images, interval]);

  return (
    <div>
      
      <Image objectFit="fill"  className="absolute z-1 w-full h-full object-cover" src={images[currentIndex]} alt="Slider" />
    </div>
  );
};

export default ImageSlider;
