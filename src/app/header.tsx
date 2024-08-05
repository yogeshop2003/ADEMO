"use client";

import useWallet from "@/web3/Store/useWallet";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AOS from "aos";
import $ from "jquery";
import Link from "next/link";
import { useEffect } from "react";
import "~/css/aos.css";
import "~/js/aos.js";

const navigation = [
  { name: "LANDING PAGE", href: "#", current: false, datatype: "banner-video" },
  { name: "ABOUT NFT", href: "#", current: false, datatype: "about" },
  { name: "ROAD MAP", href: "#", current: false, datatype: "roadmap" },
  { name: "STORY", href: "#", current: false, datatype: "story-section" },
  { name: "METAVERSE", href: "#", current: false, datatype: "metaverse" },
  { name: "TEAM", href: "#", current: false, datatype: "team" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(): JSX.Element {
  const { connected } = useWallet();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    $(".scroll-link").click(function () {
      $(".main-banner").addClass("hide");
      $("nav").addClass("show");
    });
    $(document).ready(function () {
      $(".main-nav .nav-link, .scroll-link, .skip-link").click(function () {
        var id = $(this).attr("datatype");
        $("html, body").animate(
          {
            scrollTop: $("#" + id).offset()?.top,
          },
          100
        );
        //   setTimeout(function() {
        //   $(".main-banner").fadeOut();
        // }, 1200);
      });
    });
    // $(window).scroll(function () {
    //   $(".main-banner").addClass("hide");
    //   $(".main-nav").addClass("show");
    //   // if ($("#banner-video").is(":visible")) {
    //   //   $(".main-nav").addClass("show");
    //   //   setTimeout(function() {
    //   //     $(".main-banner").fadeOut();
    //   //   }, 1000);
    //   // }
    // });
  }, []);
  return (
    <Disclosure
      as="nav"
      className="bg-primary md:bg-transparent w-full fixed main-nav z-10"
    >
      {({ open }) => (
        <>
          <div className="">
            <div className="relative flex h-16 items-center justify-between px-4">
              <div className="flex items-center justify-between sm:items-stretch w-full">
                <div className="flex flex-shrink-0 items-center md:absolute md:top-5 mint-btn">
                  <Link
                    title="MINT PAGE"
                    href="mint"
                    className="text-primary bg-primary_l xl:text-xl px-5 py-2 xl:px-9 xl:py-4 rounded-lg hover:text-white hover:bg-secondary transition ease-in-out delay-300 ff-exo-sb"
                  >
                    MINT PAGE {connected && ""}
                  </Link>
                </div>

                <div className="hidden md:ml-6 md:block md:absolute md:top-5 desktop-menu">
                  <div className="flex space-y-1 flex-col ff-inter-r">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        datatype={item.datatype}
                        onClick={(e) => e.preventDefault()}
                        className={classNames(
                          item.current
                            ? "text-secondary"
                            : "text-gray-300 hover:text-secondary",
                          "rounded-md px-3 py-2 text-sm font-normal text-right 2xl:text-xl nav-link"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden md:ml-6 md:block md:fixed md:end-14 desktop-social">
                  <div className="flex space-y-3 2xl:space-y-9 flex-col">
                    <a
                      href="#"
                      title="twitter"
                      className="social-link text-white hover:text-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="ic_twitter"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                      >
                        <path
                          id="Path_6"
                          data-name="Path 6"
                          d="M0,0H36V36H0Z"
                          fill="rgba(255,255,255,0)"
                        />
                        <path
                          id="Path_7"
                          data-name="Path 7"
                          d="M32.517,4.072A26.909,26.909,0,0,1,27.94,5.621c-1.71-1.979-4.246-2.088-6.683-1.153a6.147,6.147,0,0,0-4,5.846v1.564A14.22,14.22,0,0,1,5.052,5.621s-6.381,11.627,6.1,17.207C8.3,24.779,5.45,26.094,2,25.957c5.048,2.82,10.548,3.79,15.311,2.373A17.01,17.01,0,0,0,28.985,16.219a22.162,22.162,0,0,0,.758-5.871c0-.39,2.3-4.336,2.774-6.277Z"
                          transform="translate(0.741 1.445)"
                          fill="currentcolor"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      title="discord"
                      className="social-link text-white hover:text-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                      >
                        <g id="ic_discord" transform="translate(-10951 -646)">
                          <path
                            id="Path_6"
                            data-name="Path 6"
                            d="M0,0H36V36H0Z"
                            transform="translate(10951 646)"
                            fill="rgba(255,255,255,0)"
                          />
                          <path
                            id="discord"
                            d="M28.911,18.779a12.74,12.74,0,0,0-7.228-2.685l-.362.413a16.955,16.955,0,0,1,6.428,3.253,22.239,22.239,0,0,0-20.808,0A16.939,16.939,0,0,1,13.705,16.4l-.258-.31a12.794,12.794,0,0,0-7.228,2.685A34.086,34.086,0,0,0,2.5,33.7s2.169,3.717,7.874,3.9c0,0,.955-1.136,1.73-2.117a8.068,8.068,0,0,1-4.518-3.02,19.119,19.119,0,0,0,6.738,2.607,18.662,18.662,0,0,0,13.4-2.607,8.185,8.185,0,0,1-4.673,3.046c.774.955,1.7,2.065,1.7,2.065,5.7-.18,7.874-3.9,7.874-3.872A34.086,34.086,0,0,0,28.911,18.779ZM12.75,31.3a2.744,2.744,0,0,1-2.633-2.84,2.64,2.64,0,1,1,5.267,0A2.728,2.728,0,0,1,12.75,31.3Zm9.423,0a2.744,2.744,0,0,1-2.633-2.84,2.64,2.64,0,1,1,5.267,0A2.728,2.728,0,0,1,22.173,31.3Z"
                            transform="translate(10951.499 636.907)"
                            fill="currentcolor"
                          />
                        </g>
                      </svg>
                    </a>
                    <a
                      href="#"
                      title="youtube"
                      className="social-link text-white hover:text-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                      >
                        <g id="ic_youtube" transform="translate(-10955 -767)">
                          <path
                            id="Path_6"
                            data-name="Path 6"
                            d="M0,0H36V36H0Z"
                            transform="translate(10955 767)"
                            fill="rgba(255,255,255,0)"
                          />
                          <path
                            id="youtube"
                            d="M29.764,11.385a11.112,11.112,0,0,0-1.19-5.4,3.817,3.817,0,0,0-2.249-1.307,102.444,102.444,0,0,0-10.942-.405,102.553,102.553,0,0,0-10.9.392,3.752,3.752,0,0,0-1.909.967c-1.177,1.085-1.307,2.941-1.438,4.51a63.128,63.128,0,0,0,0,8.471,12.485,12.485,0,0,0,.392,2.615,4.1,4.1,0,0,0,.928,1.778A3.739,3.739,0,0,0,4.4,24.027a59.064,59.064,0,0,0,8.5.431c4.576.065,8.589,0,13.335-.366a3.765,3.765,0,0,0,2-1.02,3.255,3.255,0,0,0,.8-1.307,13.831,13.831,0,0,0,.68-4.445C29.764,16.589,29.764,12.17,29.764,11.385Zm-17.335,6.72V10.013l7.739,4.066C18,15.281,15.135,16.641,12.429,18.105Z"
                            transform="translate(10957.619 770.63)"
                            fill="currentcolor"
                          />
                        </g>
                      </svg>
                    </a>
                    <a
                      href="#"
                      title="instagram"
                      className="social-link text-white hover:text-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                      >
                        <g
                          id="ic_instagram"
                          transform="translate(-0.337 -0.337)"
                        >
                          <rect
                            id="Rectangle_17"
                            data-name="Rectangle 17"
                            width="36"
                            height="36"
                            transform="translate(0.337 0.337)"
                            fill="none"
                          />
                          <circle
                            id="Ellipse_2"
                            data-name="Ellipse 2"
                            cx="5"
                            cy="5"
                            r="5"
                            transform="translate(13.337 13.337)"
                            fill="currentcolor"
                          />
                          <path
                            id="Path_8"
                            data-name="Path 8"
                            d="M48.558,28H35.995A8,8,0,0,0,28,35.995V48.558a8,8,0,0,0,7.995,7.995H48.558a8,8,0,0,0,7.995-7.995V35.995A8,8,0,0,0,48.558,28ZM42.276,49.129a6.853,6.853,0,1,1,6.853-6.853,6.853,6.853,0,0,1-6.853,6.853ZM49.7,36.566a1.713,1.713,0,1,1,1.713-1.713A1.713,1.713,0,0,1,49.7,36.566Z"
                            transform="translate(-23.939 -23.939)"
                            fill="currentcolor"
                          />
                        </g>
                      </svg>
                    </a>
                    <a
                      href="#"
                      title="web"
                      className="social-link text-white hover:text-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                      >
                        <g
                          id="vuesax_bold_global"
                          data-name="vuesax/bold/global"
                          transform="translate(-172 -252)"
                        >
                          <path
                            id="Vector"
                            d="M6.885,6.855c-.045,0-.1.03-.15.03A15.009,15.009,0,0,1,0,.15C0,.105.03.045.03,0a47.839,47.839,0,0,0,5.6,1.26A50.322,50.322,0,0,0,6.885,6.855Z"
                            transform="translate(176.59 276.51)"
                            fill="#fff"
                          />
                          <path
                            id="Vector-2"
                            data-name="Vector"
                            d="M6.975.165A15.14,15.14,0,0,1,0,7.02,45.844,45.844,0,0,0,1.365,1.26,46.921,46.921,0,0,0,6.945,0C6.93.06,6.975.12,6.975.165Z"
                            transform="translate(196.435 276.51)"
                            fill="#fff"
                          />
                          <path
                            id="Vector-3"
                            data-name="Vector"
                            d="M7.095,7.1A47.465,47.465,0,0,0,1.365,5.73,41.871,41.871,0,0,0,0,0,15.078,15.078,0,0,1,7.095,7.1Z"
                            transform="translate(196.435 256.47)"
                            fill="#fff"
                          />
                          <path
                            id="Vector-4"
                            data-name="Vector"
                            d="M7.005.045A46.872,46.872,0,0,0,5.76,5.625,43.3,43.3,0,0,0,0,6.975,15.14,15.14,0,0,1,6.855,0C6.9,0,6.96.045,7.005.045Z"
                            transform="translate(176.47 256.59)"
                            fill="#fff"
                          />
                          <path
                            id="Vector-5"
                            data-name="Vector"
                            d="M10.47,6.885A46.993,46.993,0,0,0,0,6.885,42.56,42.56,0,0,1,1.53.795a2.453,2.453,0,0,0,.03-.33A15.609,15.609,0,0,1,5.235,0a15.483,15.483,0,0,1,3.66.465,2.491,2.491,0,0,0,.045.33A43.068,43.068,0,0,1,10.47,6.885Z"
                            transform="translate(184.765 255)"
                            fill="#fff"
                          />
                          <path
                            id="Vector-6"
                            data-name="Vector"
                            d="M6.885,10.47A42.064,42.064,0,0,1,.795,8.94a2.453,2.453,0,0,0-.33-.03A15.609,15.609,0,0,1,0,5.235a15.483,15.483,0,0,1,.465-3.66,2.491,2.491,0,0,0,.33-.045A44.655,44.655,0,0,1,6.885,0,48.861,48.861,0,0,0,6.885,10.47Z"
                            transform="translate(175 264.765)"
                            fill="#fff"
                          />
                          <path
                            id="Vector-7"
                            data-name="Vector"
                            d="M6.885,5.235A15.609,15.609,0,0,1,6.42,8.91a2.453,2.453,0,0,0-.33.03A45.215,45.215,0,0,1,0,10.47,46.993,46.993,0,0,0,0,0,42.56,42.56,0,0,1,6.09,1.53a1.249,1.249,0,0,0,.33.045A15.583,15.583,0,0,1,6.885,5.235Z"
                            transform="translate(198.115 264.765)"
                            fill="#fff"
                          />
                          <path
                            id="Vector-8"
                            data-name="Vector"
                            d="M10.47,0A42.064,42.064,0,0,1,8.94,6.09a2.491,2.491,0,0,0-.045.33,15.483,15.483,0,0,1-3.66.465A15.609,15.609,0,0,1,1.56,6.42a2.453,2.453,0,0,0-.03-.33A44.655,44.655,0,0,1,0,0,46.935,46.935,0,0,0,5.235.33,46.71,46.71,0,0,0,10.47,0Z"
                            transform="translate(184.765 278.115)"
                            fill="#fff"
                          />
                          <path
                            id="Vector-9"
                            data-name="Vector"
                            d="M11.645,11.645a45.059,45.059,0,0,1-11.29,0,45.059,45.059,0,0,1,0-11.29,45.059,45.059,0,0,1,11.29,0A45.059,45.059,0,0,1,11.645,11.645Z"
                            transform="translate(184 264)"
                            fill="#fff"
                          />
                          <path
                            id="Vector-10"
                            data-name="Vector"
                            d="M0,0H36V36H0Z"
                            transform="translate(172 252)"
                            fill="none"
                            opacity="0"
                          />
                          <path
                            id="Vector-11"
                            data-name="Vector"
                            d="M0,0H36V36H0Z"
                            transform="translate(208 288) rotate(180)"
                            fill="none"
                            opacity="0"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="inset-y-0 left-0 flex items-center md:hidden md:fixed">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:none focus:none focus:none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 ff-inter-r">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium nav-link"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="space-x-3 px-2 pb-3 pt-2 flex">
              <a
                href="#"
                title="twitter"
                className="social-link text-white hover:text-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="ic_twitter"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                >
                  <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M0,0H36V36H0Z"
                    fill="rgba(255,255,255,0)"
                  />
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M32.517,4.072A26.909,26.909,0,0,1,27.94,5.621c-1.71-1.979-4.246-2.088-6.683-1.153a6.147,6.147,0,0,0-4,5.846v1.564A14.22,14.22,0,0,1,5.052,5.621s-6.381,11.627,6.1,17.207C8.3,24.779,5.45,26.094,2,25.957c5.048,2.82,10.548,3.79,15.311,2.373A17.01,17.01,0,0,0,28.985,16.219a22.162,22.162,0,0,0,.758-5.871c0-.39,2.3-4.336,2.774-6.277Z"
                    transform="translate(0.741 1.445)"
                    fill="currentcolor"
                  />
                </svg>
              </a>
              <a
                href="#"
                title="discord"
                className="social-link text-white hover:text-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                >
                  <g id="ic_discord" transform="translate(-10951 -646)">
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M0,0H36V36H0Z"
                      transform="translate(10951 646)"
                      fill="rgba(255,255,255,0)"
                    />
                    <path
                      id="discord"
                      d="M28.911,18.779a12.74,12.74,0,0,0-7.228-2.685l-.362.413a16.955,16.955,0,0,1,6.428,3.253,22.239,22.239,0,0,0-20.808,0A16.939,16.939,0,0,1,13.705,16.4l-.258-.31a12.794,12.794,0,0,0-7.228,2.685A34.086,34.086,0,0,0,2.5,33.7s2.169,3.717,7.874,3.9c0,0,.955-1.136,1.73-2.117a8.068,8.068,0,0,1-4.518-3.02,19.119,19.119,0,0,0,6.738,2.607,18.662,18.662,0,0,0,13.4-2.607,8.185,8.185,0,0,1-4.673,3.046c.774.955,1.7,2.065,1.7,2.065,5.7-.18,7.874-3.9,7.874-3.872A34.086,34.086,0,0,0,28.911,18.779ZM12.75,31.3a2.744,2.744,0,0,1-2.633-2.84,2.64,2.64,0,1,1,5.267,0A2.728,2.728,0,0,1,12.75,31.3Zm9.423,0a2.744,2.744,0,0,1-2.633-2.84,2.64,2.64,0,1,1,5.267,0A2.728,2.728,0,0,1,22.173,31.3Z"
                      transform="translate(10951.499 636.907)"
                      fill="currentcolor"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="#"
                title="youtube"
                className="social-link text-white hover:text-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                >
                  <g id="ic_youtube" transform="translate(-10955 -767)">
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M0,0H36V36H0Z"
                      transform="translate(10955 767)"
                      fill="rgba(255,255,255,0)"
                    />
                    <path
                      id="youtube"
                      d="M29.764,11.385a11.112,11.112,0,0,0-1.19-5.4,3.817,3.817,0,0,0-2.249-1.307,102.444,102.444,0,0,0-10.942-.405,102.553,102.553,0,0,0-10.9.392,3.752,3.752,0,0,0-1.909.967c-1.177,1.085-1.307,2.941-1.438,4.51a63.128,63.128,0,0,0,0,8.471,12.485,12.485,0,0,0,.392,2.615,4.1,4.1,0,0,0,.928,1.778A3.739,3.739,0,0,0,4.4,24.027a59.064,59.064,0,0,0,8.5.431c4.576.065,8.589,0,13.335-.366a3.765,3.765,0,0,0,2-1.02,3.255,3.255,0,0,0,.8-1.307,13.831,13.831,0,0,0,.68-4.445C29.764,16.589,29.764,12.17,29.764,11.385Zm-17.335,6.72V10.013l7.739,4.066C18,15.281,15.135,16.641,12.429,18.105Z"
                      transform="translate(10957.619 770.63)"
                      fill="currentcolor"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="#"
                title="instagram"
                className="social-link text-white hover:text-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                >
                  <g id="ic_instagram" transform="translate(-0.337 -0.337)">
                    <rect
                      id="Rectangle_17"
                      data-name="Rectangle 17"
                      width="36"
                      height="36"
                      transform="translate(0.337 0.337)"
                      fill="none"
                    />
                    <circle
                      id="Ellipse_2"
                      data-name="Ellipse 2"
                      cx="5"
                      cy="5"
                      r="5"
                      transform="translate(13.337 13.337)"
                      fill="currentcolor"
                    />
                    <path
                      id="Path_8"
                      data-name="Path 8"
                      d="M48.558,28H35.995A8,8,0,0,0,28,35.995V48.558a8,8,0,0,0,7.995,7.995H48.558a8,8,0,0,0,7.995-7.995V35.995A8,8,0,0,0,48.558,28ZM42.276,49.129a6.853,6.853,0,1,1,6.853-6.853,6.853,6.853,0,0,1-6.853,6.853ZM49.7,36.566a1.713,1.713,0,1,1,1.713-1.713A1.713,1.713,0,0,1,49.7,36.566Z"
                      transform="translate(-23.939 -23.939)"
                      fill="currentcolor"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="#"
                title="tik_tok"
                className="social-link text-white hover:text-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                >
                  <g id="ic_tik_tok" transform="translate(-10990 -850)">
                    <path
                      id="tiktok"
                      d="M35.791,20.416V15.251a7.241,7.241,0,0,1-5.456-1.9A8.094,8.094,0,0,1,28.4,8.221V7.848L23.514,7.73V28.71a4.547,4.547,0,1,1-2.946-5.1v-5a9.676,9.676,0,0,0-1.546-.127A9.421,9.421,0,1,0,28.443,27.9a9.6,9.6,0,0,0-.073-1.155V18.425A13.168,13.168,0,0,0,35.791,20.416Z"
                      transform="translate(10985.705 845.744)"
                      fill="currentcolor"
                    />
                    <rect
                      id="Rectangle_17"
                      data-name="Rectangle 17"
                      width="36"
                      height="36"
                      transform="translate(10990 850)"
                      fill="none"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
