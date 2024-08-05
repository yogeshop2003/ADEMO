import VideoOnScroll from "@/component/VideoOnScroll";

export default function Story() {

  return (
    <>
      <section
        className="story-section w-full overflow-hidden"
        id="story-section"
      >
        <div className="container">
          <h2 className="story-title text-center text-white ff-orbitron-b mb-14 2xl:mb-[130px]">
            STORY 2D - 3D
          </h2>
        </div>

        <VideoOnScroll src="story.mp4" scrollTriggerProps={{
          trigger: ".scroll-linked-video-wrapper-story",
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: ".scroll-linked-video-wrapper-story",
          pinSpacing: true,
          anticipatePin: 1,
          className: "scroll-linked-video-wrapper-story",
        }} />
      </section>
    </>
  );
}
