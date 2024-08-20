import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

  return (
    <div className="mt-12">
      <div
        className="relative w-full h-[45vw] min-h-[220px] max-h-[900px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ReactPlayer
          ref={playerRef}
          width="100%"
          height="100%"
          loop={true}
          url="https://drlnizua5eu2a.cloudfront.net/link-visual/Roadmap.mp4"
          playing={isPlaying}
          muted
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;

// import React, { useState, useRef, useEffect } from 'react';
// import ReactPlayer from 'react-player';

// const VideoPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Consider devices with width <= 768px as mobile
//   const playerRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     let interval;
//     let timeout;
    
//     if (isPlaying) {
//       interval = setInterval(() => {
//         if (playerRef.current) {
//           const player = playerRef.current;
//           const currentTime = player.getCurrentTime();
//           const duration = player.getDuration();
          
//           if (currentTime >= duration - 5) {
//             setIsPlaying(false);
//             clearInterval(interval);
//           } else {
//             player.seekTo(currentTime + 5);
//             setIsPlaying(false);
//             timeout = setTimeout(() => setIsPlaying(true), Math.random() * (5000 - 3000) + 3000);
//           }
//         }
//       }, 5000);
//     } else {
//       clearInterval(interval);
//       clearTimeout(timeout);
//     }
    
//     return () => {
//       clearInterval(interval);
//       clearTimeout(timeout);
//     };
//   }, [isPlaying]);

//   const handleMouseEnter = () => {
//     setIsPlaying(true);
//   };

//   const handleMouseLeave = () => {
//     setIsPlaying(false);
//   };

//   const handleTouchStart = () => {
//     setIsPlaying(!isPlaying); // Toggle play/pause on touch
//   };

//   return (
//     <div className="mt-12 relative">
//       <div
//         className={`relative w-full h-[45vw] min-h-[220px] max-h-[900px] ${isMobile ? 'cursor-pointer' : ''}`}
//         onMouseEnter={!isMobile ? handleMouseEnter : undefined}
//         onMouseLeave={!isMobile ? handleMouseLeave : undefined}
//         onTouchStart={isMobile ? handleTouchStart : undefined}
//       >
//         <ReactPlayer
//           ref={playerRef}
//           width="100%"
//           height="100%"
//           loop={false}
//           url="https://drlnizua5eu2a.cloudfront.net/link-visual/Roadmap.mp4"
//           playing={isPlaying}
//           muted
//           className="w-full h-full"
//         />
//         {isMobile && !isPlaying && (
//           <button
//             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded"
//             onClick={() => setIsPlaying(true)}
//           >
//             Play
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;
