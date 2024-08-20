"use client";
import React, { useRef, useState, RefObject } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";

interface CardProps {
  containerRef: RefObject<HTMLDivElement>; // Type the ref object correctly
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string; // Optional prop
}

function Carsop() {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        AFFH<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
  );
}

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="assets/cube/AA02.png"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="assets/cube/AA16.png"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="assets/cube/AB16.png"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="assets/cube/AF01.png"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="assets/cube/AF09.png"
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      {Array(5).fill(null).map((_, index) => (
        <Card
          key={index}
          containerRef={containerRef}
          src="assets/cube/AF20.png"
          alt="Example image"
          rotate="-6deg"
          top="20%"
          left="40%"
          className="w-52 md:w-80"
        />
      ))}
    </div>
  );
};

const Card: React.FC<CardProps> = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      const zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index"),
        10
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

export default dynamic (() => Promise.resolve(Carsop), {ssr: false})
