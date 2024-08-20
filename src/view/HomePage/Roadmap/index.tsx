"use client";
import Carsop from "./Carsop";
import Experience from "./Experience";
import dynamic from "next/dynamic";

// import VideoPlayer from "./VideoPlayer";
const videoUrlArr = [
  "https://drlnizua5eu2a.cloudfront.net/link-visual/Roadmap.mp4",
];

function Roadmap() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <section
        className="roadmap-section relative w-full overflow-hidden bg-[url('/images/roadmap_bg.jpg')] bg-cover mt-14 2xl:mt-32"
        id="roadmap"
      >
        <h2 className="marquee overflow-hidden whitespace-nowrap ff-orbitron-b flex pb-14 2xl:pb-40">
          <span>ROADMAP</span> <span>ROADMAP</span>
        </h2>

        {/* Normal video type, my code*/}
        {/* <div className="mt-12">
            <div className="relative">
              <ReactPlayer
                controls
                width=""
                height=""
                loop={true}
                url="https://drlnizua5eu2a.cloudfront.net/link-visual/Roadmap.mp4"
                playing={true}
                muted
                className="w-full h-[45vw] min-h-[220px] max-h-[900px]"
              />
            </div>
          </div>  */}

        {/* <Carousel></Carousel> */}

        {/* <div className="flex flex-wrap justify-center gap-4">
          <CardOwn></CardOwn>
          <CardOwn></CardOwn>
          <CardOwn></CardOwn>
          <CardOwn></CardOwn>
          <CardOwn></CardOwn>
        </div> */}

        {/* <div className="container">
        
          <h2 className="py-8 text-center page-title ff-orbitron-b text-3xl 2xl:text-[56px] text-phlox page-title-phlox-s">
             Hover to Play
          </h2>
        </div> */}

        {/* <VideoPlayer></VideoPlayer> */}


        <Experience></Experience>

        <div className="container">
          <h2 className="text-center page-title ff-orbitron-b text-3xl 2xl:text-[56px] text-phlox page-title-phlox-s">
             OUR NFT'S 
          </h2>
        </div>
      

        <Carsop></Carsop>

       

        {/* Original Code */}
        {/* <VideoOnScroll src="original.mp4" scrollTriggerProps={{
          trigger: ".scroll-linked-video-wrapper-roadmap",
          start: "top top",
          end: "+=1000",
          scrub: true,
          pin: ".scroll-linked-video-wrapper-roadmap",
          pinSpacing: true,
          anticipatePin: 1,
          snap: [0, 0.072, 0.199, 0.343, 0.515, 0.712, 1],
          className: "scroll-linked-video-wrapper-roadmap",
        }} /> */}

        <button
          datatype="about"
          className="fixed z-10 skip-link text-primary bg-primary_l px-4 py-2 rounded-lg hover:text-white hover:bg-secondary transition ease-in-out delay-300 ff-exo-sb"
        >
          Skip Top
        </button>
        <button
          datatype="story"
          className="fixed z-10 skip-link text-primary bg-primary_l px-4 py-2 rounded-lg hover:text-white hover:bg-secondary transition ease-in-out delay-300 ff-exo-sb"
        >
          Skip Bottom
        </button>
      </section>
    </>
  );
}
export default dynamic (() => Promise.resolve(Roadmap), {ssr: false})
