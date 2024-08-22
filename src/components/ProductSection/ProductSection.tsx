declare global {
  interface Window {
    particlesJS: any; // Adjust the type as per your usage
  }
}
declare namespace JSX {
  interface IntrinsicElements {
    "ion-icon": any; // You can replace 'any' with appropriate type if known
  }
}
import Script from "next/script";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import ParticlesComponent from "../common/ParticalsComponent";
import "swiper/bundle";
export default function ProjectSection() {
  const fa_imgSwpRef = useRef<Swiper | null>(null);
  const fa_titSwpRef = useRef<Swiper | null>(null);

  useEffect(() => {
    const initializeSwipers = () => {
      // Initialize the Swiper instances
      fa_imgSwpRef.current = new Swiper(".fa_proImg .swiper", {
        autoplay: {
          pauseOnMouseEnter: true,
        },
        speed: 1200,
        effect: "fade",
        navigation: {
          nextEl: ".fa_btn_r",
          prevEl: ".fa_btn_l",
        },
      });

      fa_titSwpRef.current = new Swiper(".fa_proTit .swiper", {
        autoplay: {
          pauseOnMouseEnter: true,
        },
        speed: 1200,
      });

      if (!fa_imgSwpRef.current || !fa_titSwpRef.current) {
        console.error(
          "Swiper initialization failed: Swiper instances are undefined."
        );
        return;
      }

      // Connect Swiper instances only if they are both defined
      if (fa_imgSwpRef.current.controller && fa_titSwpRef.current.controller) {
        fa_imgSwpRef.current.controller.control = fa_titSwpRef.current;
        fa_titSwpRef.current.controller.control = fa_imgSwpRef.current;
      }

      console.log(
        "Swiper instances initialized successfully:",
        fa_imgSwpRef.current,
        fa_titSwpRef.current
      );
    };

    initializeSwipers();

    // Cleanup function
    return () => {
      // Destroy Swiper instances on component unmount
      if (fa_imgSwpRef.current) {
        fa_imgSwpRef.current.destroy();
      }
      if (fa_titSwpRef.current) {
        fa_titSwpRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div id="c_static_001-16620263451640" className="response-animated">
        <div className="e_container-87 s_layout response-transition">
          <div className="cbox-87-0 p_item">
            <div className="e_loop-89 s_list response-transition">
              <div className="">
                <div className="fa_proImg">
                  <div
                    className="swiper swiper-container-fade swiper-container-initialized swiper-container-horizontal "
                    data-swiper-autoplay="2000"
                  >
                    <div
                      className="swiper-wrapper"
                      id="swiper-wrapper-250a59fcac7144fd"
                      aria-live="off"
                      style={{ transition: "all 0ms ease 0s" }}
                    >
                      <div
                        className="swiper-slide"
                        data-swiper-parallax="80%"
                        role="group"
                        aria-label="1 / 3"
                        style={{
                          width: "678px",
                          opacity: "1",
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "all 0ms ease 0s",
                        }}
                      >
                        <div className="cbox-89 fa_li">
                          <div className="e_image-90 s_img fa_Img fa_Imgmax">
                            <a href="" target="_self">
                              <Image
                                src="/assets/products/WhatsApp Image 2024-02-19 at 12.43.37_4ae7032b.webp"
                                alt="Dual solar panel cleaning robot"
                                title="Dual solar panel cleaning robot"
                                width={100}
                                height={100}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-prev"
                        data-swiper-parallax="80%"
                        role="group"
                        aria-label="2 / 3"
                        style={{
                          width: "678px",
                          opacity: "1",
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "all 0ms ease 0s",
                        }}
                      >
                        <div className="cbox-89 fa_li">
                          <div className="e_image-90 s_img fa_Img fa_Imgmax">
                            <a href="" target="_self">
                              <Image
                                src="/assets/products/IMG_20240116_155052.webp"
                                alt="Ground mounted solar panel cleaning robot"
                                title="Ground mounted solar panel cleaning robot"
                                width={100}
                                height={100}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide swiper-slide-active"
                        data-swiper-parallax="80%"
                        role="group"
                        aria-label="3 / 3"
                        style={{
                          width: "678px",
                          opacity: "1",
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "all 0ms ease 0s",
                        }}
                      >
                        <div className="cbox-89 fa_li">
                          <div className="e_image-90 s_img fa_Img fa_Imgmax">
                            <a href="" target="_self">
                              <Image
                                src="https://omo-oss-image.thefastimg.com/portal-saas/new2022091509465100264/cms/image/81a8aaac-282f-4d12-a165-fc8a21c192b0.webp"
                                alt="Other Customized Models"
                                title="Other Customized Models"
                                width={100}
                                height={100}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      className="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cbox-87-1 p_item">
            <div className="e_container-88 s_layout response-transition">
              <div className="cbox-88-0 p_item">
                <div className="e_container-97 s_layout response-transition">
                  <div className="cbox-97-0 p_item">
                    <p className="e_text-96 s_link response-transition">
                      Solar Panel Cleaning Robot
                    </p>
                    <p className="title_line">
                      <span></span>
                      <span></span>
                    </p>
                  </div>
                </div>
                <div className="e_loop-91 s_list response-transition">
                  <div className="">
                    <div className="fa_proTit">
                      <div className="swiper swiper-container-initialized swiper-container-horizontal">
                        <div
                          className="swiper-wrapper"
                          id="swiper-wrapper-a6b4381014cb310a8d"
                          aria-live="off"
                          style={{
                            transition: "all 0ms ease 0s",
                            transform: "translate3d(-1146px, 0px, 0px)",
                          }}
                        >
                          <div
                            className="swiper-slide"
                            role="group"
                            aria-label="1 / 3"
                            style={{ width: "573px" }}
                          >
                            <div className="cbox-91 fa_li">
                              <p className="e_text-93 s_title response-transition">
                                Dual solar panel cleaning robot
                              </p>
                              <p className="e_text-94 s_title response-transition">
                                ·Fully automatic water free cleaning, with
                                cleaning cleanliness up to 99.5%. ·The whole
                                machine has IP65 protection grade and is free
                                from rain and dust. ·The whole machine is light
                                and modular, and the components have no hidden
                                cracks for 33 years. ·Soft and elastic brush
                                design, without damage to component surface.
                                ·Strong obstacle surmounting ability, it can
                                cross the front and back of the components and
                                move up and down. ·Active deviation correction
                                design, no jamming. ·It is widely used and
                                suitable for all kinds of tracking and fixing
                                brackets with frames.
                              </p>
                            </div>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-prev"
                            role="group"
                            aria-label="2 / 3"
                            style={{ width: "573px" }}
                          >
                            <div className="cbox-91 fa_li">
                              <p className="e_text-93 s_title response-transition">
                                Ground mounted solar panel cleaning robot
                              </p>
                              <p className="e_text-94 s_title response-transition">
                                ·Fully automatic water free cleaning, with
                                cleaning cleanliness up to 99.5%. ·The whole
                                machine has IP65 protection grade and is free
                                from rain and dust. ·The whole machine is light
                                and modular, and the components have no hidden
                                cracks for 33 years. ·Soft and elastic brush
                                design, without damage to component surface.
                                ·Strong obstacle surmounting ability, it can
                                cross the front and back of the components and
                                move up and down. ·Active deviation correction
                                design, no jamming. ·It is widely used and
                                suitable for all kinds of tracking and fixing
                                brackets with frames.
                              </p>
                            </div>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-active"
                            role="group"
                            aria-label="3 / 3"
                            style={{ width: "573px" }}
                          >
                            <div className="cbox-91 fa_li">
                              <p className="e_text-93 s_title response-transition">
                                Other Customized Models
                              </p>
                              <p className="e_text-94 s_title response-transition">
                                ·The components are arranged horizontally or
                                vertically with strong adaptability. ·Fully
                                automatic water free cleaning, with cleaning
                                cleanliness up to 99.5%. ·The whole machine has
                                IP65 protection grade and is free from rain and
                                dust. ·The whole machine is light and modular,
                                and the components have no hidden cracks for 33
                                years. ·Soft and elastic brush design, without
                                damage to component surface. ·Strong obstacle
                                surmounting ability, it can cross the front and
                                back of the components and move up and down.
                                ·Active deviation correction design, no jamming.
                                ·It is widely used and suitable for all kinds of
                                tracking and fixing brackets with frames.
                              </p>
                            </div>
                          </div>
                        </div>
                        <span
                          className="swiper-notification"
                          aria-live="assertive"
                          aria-atomic="true"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="e_container-98 s_layout fa_box_btn response-transition">
                  <div
                    className="fa_btn_l"
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                    aria-controls="swiper-wrapper-250a59fcac7144fd"
                    aria-disabled="false"
                  >
                    <i className="a_icon"></i>
                  </div>
                  <div
                    className="fa_btn_r"
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                    aria-controls="swiper-wrapper-250a59fcac7144fd"
                    aria-disabled="false"
                  >
                    <i className="a_icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ParticlesComponent />
        <div id="particles-js-service"></div>
      </div>
    </div>
  );
}
