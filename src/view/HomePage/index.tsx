"use client"

import React, { Suspense, useState, useEffect } from "react";
import Loader from "@/component/Loader";

import Team from "./Team";

const MainBanner = React.lazy(() => import("./MainBanner"));
const BannerVideo = React.lazy(() => import("./BannerVideo"));
const LendingInfo = React.lazy(() => import("./LendingInfo"));
const CubeInfo = React.lazy(() => import("./CubeInfo"));
const About = React.lazy(() => import("./About"));
const Roadmap = React.lazy(() => import("./Roadmap"));
const Story = React.lazy(() => import("./Story"));
const MetaVerse = React.lazy(() => import("./MetaVerse"));

const HomePage = () => {
  

  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      <Loader/>
      {/* <MainBanner /> */}
      <BannerVideo />
      <LendingInfo />
      <CubeInfo />
      <About />
      <Roadmap />
      <Story />
      <MetaVerse />
      <Team />
      {/* </Suspense> */}
    </>
  );
};

export default HomePage;
