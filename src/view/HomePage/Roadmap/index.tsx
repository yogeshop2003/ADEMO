import VideoOnScroll from "@/component/VideoOnScroll";

const videoUrlArr = [
  "https://drlnizua5eu2a.cloudfront.net/link-visual/Roadmap.mp4",
];

export default function Roadmap() {


  return (
    <>
      <section
        className="roadmap-section relative w-full overflow-hidden bg-[url('/images/roadmap_bg.jpg')] bg-cover mt-14 2xl:mt-32"
        id="roadmap"
      >
        <h2 className="marquee overflow-hidden whitespace-nowrap ff-orbitron-b flex pb-14 2xl:pb-40">
          <span>ROADMAP</span> <span>ROADMAP</span>
        </h2>

        <VideoOnScroll src="original.mp4" scrollTriggerProps={{
          trigger: ".scroll-linked-video-wrapper-roadmap",
          start: "top top",
          end: "+=1000",
          scrub: true,
          pin: ".scroll-linked-video-wrapper-roadmap",
          pinSpacing: true,
          anticipatePin: 1,
          snap: [0, 0.072, 0.199, 0.343, 0.515, 0.712, 1],
          className: "scroll-linked-video-wrapper-roadmap",
        }} />

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
