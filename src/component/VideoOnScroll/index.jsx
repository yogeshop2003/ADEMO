'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './VideoOnScroll.css';

gsap.registerPlugin(ScrollTrigger);

const VideoOnScroll = ({ src, scrollTriggerProps }) => {
    const wrapperRef = useRef();
    let videoRef = useRef()

    const setupScrollTrigger = () => {
        let ctx = gsap.context(() => {
            let tl = gsap.timeline({
                scrollTrigger: scrollTriggerProps,
            });

            // set the initial frame
            tl.set(
                videoRef, {
                currentTime: 0.001,
            });

            videoRef.onloadedmetadata = () => {
                tl.fromTo(
                    videoRef, {
                    currentTime: 0,
                }, {
                    currentTime: videoRef?.duration || 1,
                });
            };

        }, wrapperRef);

        return ctx;
    }

    const fetchVideo = () => {
        try {
            fetch(src)
                .then((response) => response.blob())
                .then((response) => {
                    var blobURL = URL.createObjectURL(response);
                    videoRef.setAttribute("src", blobURL);
                    videoRef.currentTime = videoRef.currentTime + 0.001;
                });
        } catch (e) {
            console.log(e);
        }
    }

    useLayoutEffect(() => {
        let ctx;

        setTimeout(() => {
            ctx = setupScrollTrigger();
        }, 100);

        fetchVideo();

        return () => {
            ctx.revert()
        };
    }, []);

    return (
        <div ref={wrapperRef}>
            <div className={scrollTriggerProps.className}>
                <video
                    src={src}
                    muted
                    playsInline ref={(el) => (videoRef = el)}
                />
            </div>
        </div>
    )
}

export default VideoOnScroll;