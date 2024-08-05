import Image from "next/image";
import imgLogoUrl from "~/images/logo.png";
import imgStart from "~/images/start.svg";

export default function MainBanner() {
  return (
    <>
      <section className="main-banner bg-[url('/images/Banner.jpg')] bg-cover bg-center w-full h-screen fixed z-10">
        <div className="flex items-center justify-center w-full flex-col h-screen py-20">
          <div className="logo-image w-6/12">
            <Image src={imgLogoUrl} alt="Holiday" data-aos="zoom-in" />
          </div>
          <div className="logo-start w-4/12 md:w-auto">
            <button
              title="Click To Start"
              className="scroll-link"
              datatype="banner-video"
            >
              <Image src={imgStart} alt="Click To Start" data-aos="fade-up" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
