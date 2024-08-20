"use client";

import { useEffect, useRef } from "react";

export default function BannerVideo(): JSX.Element {
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
    <section className="video-container w-full" id="banner-video">
      <div className="overlay relative">
        <video
          ref={videoRef}
          src="assets/Teaser/Teaser.mp4"
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
