import React from "react";
import CubeView from "@/view/CubeView";

export default function CubeInfo() {
  return (
    <>
      <section
        className="cube-section w-full xl:pt-[50px] 2xl:pt-[150px]"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="cube-data max-w-[1088px] mx-auto">
            <CubeView />
          </div>
        </div>
      </section>
    </>
  );
}
