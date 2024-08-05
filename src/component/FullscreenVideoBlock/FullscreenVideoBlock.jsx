import { useEffect, useRef, useState } from 'react';
import { useInView } from "framer-motion";
import './FullscreenVideoBlock.css';

const FullscreenVideoBlock = ({src}) => {
    const videoRef = useRef();
    const videoContainerRef = useRef();
    const [playing, setPlaying] = useState(false);
    const isInView = useInView(videoRef);

    const toggleFullscreen = (state) => {
        if (state) {
            videoRef.current?.requestFullscreen().then(() => {
                videoRef.current?.focus();
            }).catch((err) => {
                console.log(`Unable to go fullscreen: ${err.message} (${err.name})`);
            });
        }
        else {
            document?.exitFullscreen();
        }
    }

    // pause playback when not fullscreen
    const handleFullscreenChange = () => {
        if (!document.fullscreenElement) {
            videoRef.current?.pause()
            videoContainerRef.current?.focus();
        }
    }

    // play, only if not fullscreen
    const playVideo = () => {
        if (document.fullscreenElement) return;
        videoRef.current?.play();
    }

    // enter fullscreen when playback starts
    const onPlay = () => {
        setPlaying(true);
        toggleFullscreen(true);
    }

    const onPause = () => {
        setPlaying(false);
    }

    const attachListeners = () => {
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        videoRef.current?.addEventListener('play', onPlay);
        videoRef.current?.addEventListener('pause', onPause);
    }

    const detachListeners = () => {
        document.removeEventListener("fullscreenchange", handleFullscreenChange);
        videoRef.current?.removeEventListener('play', onPlay);
        videoRef.current?.removeEventListener('pause', onPause);
    }

    // attach listeners only while in view
    useEffect(() => {
        isInView ? attachListeners() : detachListeners();

        return () => {
            detachListeners();
        }
    }, [isInView]);

    return (
        <button
            disabled={!isInView}
            className='fullscreen-video-container'
            tabIndex={0}
            aria-label={playing ? 'Pause video' : 'Play video'}
            onClick={playVideo}
            ref={videoContainerRef}
        >
            <PlayIcon
                className={playing ? 'hidden' : ''}
            />
            <video
                src={src}
                playsInline
                ref={videoRef}
                controlsList="nodownload noremoteplayback" />
        </button>
    )
}

export default FullscreenVideoBlock;

const PlayIcon = ({className}) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#FFFFFF"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
    )
}