"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import imgLogoUrl from "~/images/logo.png";
import imgStart from "~/images/start.svg";

const Loader = () => {
  const wrapperRef: any = useRef<HTMLDivElement>();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "auto";
        },
      });

      tl.to(".progress", {
        width: "100%",
        duration: 3,
        ease: "power1.in",
      });

      tl.to(".loader", {
        opacity: 0,
        duration: 0.4,
        ease: "power4.out",
      });

      tl.to(".scroll-link", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
      });
    }, wrapperRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      className="main-banner loader-overlay bg-[url('/images/Banner.jpg')] bg-cover bg-center"
      ref={wrapperRef}
    >
      <div className="logo-image w-6/12">
        {/* <Image src={imgLogoUrl} alt="Holiday" data-aos="zoom-in" /> */}
      </div>
      <div className="logo-start w-4/12 md:w-auto">
        <button
          title="Click To Start"
          className="scroll-link"
          datatype="banner-video"
        >
          <Image
            src={imgStart}
            alt="Click To Start"
            style={{ marginTop: "60vh" }}
          />
        </button>
      </div>
      <div className="loader">
        <div className="progress" />
      </div>
    </div>
  );
};

export default Loader;
