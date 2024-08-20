"use client";
import { useEffect, useRef } from "react";

export default function Story(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement?.play();
        } else {
          videoElement?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <>
      <section
        className="story-section w-full overflow-hidden"
        id="story-section"
      >
        <div className="container">
          <h2 className="story-title text-center text-white ff-orbitron-b mb-14 2xl:mb-[130px]z pt-8">
            STORY 2D - 3D
          </h2>
        </div>
        

        {/* <VideoOnScroll src="story.mp4" scrollTriggerProps={{
          trigger: ".scroll-linked-video-wrapper-story",
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: ".scroll-linked-video-wrapper-story",
          pinSpacing: true,
          anticipatePin: 1,
          className: "scroll-linked-video-wrapper-story",
        }} /> */}
      </section>

      <section className="video-container w-full" id="banner-video">
      <div className="overlay relative">
        <video
          ref={videoRef}
          src="story.mp4"
          controls={false}
          preload="auto"
          muted
          loop
          className="w-full mx-auto max-w-[2500px]"
        />
      </div>
    </section>

    </>
  );
}
