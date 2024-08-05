"use client";
import { default as _ReactPlayer } from "react-player/lazy";
import { ReactPlayerProps } from "react-player/types/lib";
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export default function MetaVerse() {
  return (
    <>
      <section
        className="metaverse-section w-full relative pt-[75px] lg:pt-[150px]"
        data-aos="fade-up"
        id="metaverse"
      >
        <div className="container">
          <h2 className="page-title ff-orbitron-b text-3xl 2xl:text-[56px] text-phlox page-title-phlox-s">
            [ METAVERSE ]
          </h2>
          <div className="content space-y-5 2xl:space-y-8 2xl:text-[28px]">
            <p>
              The{" "}
            <span className="ff-orbitron-m text-dark_turquoise">
                {" "}
                Holiday Metaverse{" "}
              </span>
              is an immersive metaverse that values imagination and innovation
              above all else. From the comfort of your own home or any place
              you&#39;d like, you can explore a vibrant environment and do just
              about anything your heart wishes for: play an Adventurous Love
              Game, Shop online with{" "}
              <span className="ff-orbitron-m text-phlox"> 3D experience </span>,
              Attend concerts and parties, or even sell your own goods.
            </p>
            <p>
              Users in our metaverse will have a significant say in how the
              metaverse develops. You can create and make money off of your own
              virtual assets, experiences, and, more using The creation engine
              and our user-friendly interface.
            </p>
            <p>
              It&#39;s the ideal option for businesses trying to take advantage
              of our metaverse&#39;s limitless prospects, for creators searching
              for fresh ways to make money off their time, and for anyone who is
              looking to make new friends, go shopping, or do any entertainment.
            </p>
            <p>
              We&#39;re excited to share our vision of the future with you and
              invite you to join us on this exciting journey. Whether you&#39;re
              a creator, a business owner, or simply someone who loves immersive
              experiences, there&#39;s a place for you in Holiday
              Metaverse.We&#39;re excited to share our vision of the future with
              you and invite you to join us on this exciting journey. Whether
              you&#39;re a creator, a business owner, or simply someone who
              loves immersive experiences, there&#39;s a place for you in
              Holiday Metaverse.
            </p>
            <p>
              The phrase{" "}
              <span className="ff-orbitron-m text-dark_turquoise">
                {" "}
                “the only limit is your imagination”{" "}
              </span>{" "}
              is frequently exaggerated. This is simply the truth.
            </p>
          </div>
          <div className="mt-12">
            <div className="relative">
              <ReactPlayer
                controls
                width=""
                height=""
                loop={true}
                url="https://drlnizua5eu2a.cloudfront.net/link-visual/Meta_Glimps.mp4"
                playing={true}
                muted
                className="w-full h-[45vw] min-h-[220px] max-h-[900px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
