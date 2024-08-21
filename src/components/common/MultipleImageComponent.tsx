import React, { useEffect } from "react";
import Fancybox from "./Fancybox";
import ConsultComponent from "./ConsultComponent";
import { Fancybox as FancyboxLib } from "@fancyapps/ui";
import Image from 'next/image';

export default function MultipleImageComponent({ imageData, title }: any) {
  useEffect(() => {
    const onShow = () => {
      const header = document.querySelector("header");
      if (header) header.style.display = "none";
    };

    const onHide = () => {
      const header = document.querySelector("header");
      if (header) header.style.display = "block";
    };

    FancyboxLib.bind('[data-fancybox="gallery"]', {
      on: {
        reveal: onShow,
        destroy: onHide,
      },
    });

    return () => {
      FancyboxLib.unbind('[data-fancybox="gallery"]');
    };
  }, []);

  return (
    <div>
      <section className="single-service-area font-custom">
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <div className="container">
            <div className="row">
              <div className=" xl:basis-4/6 xl:grow-0 xl:shrink-0 lg:basis-full md:basis-full sm:basis-full px-4">
                <div className="single-service-top">
                  <h1>{title}</h1>

                  <div className="text mt-2">
                    <div className="container mb-5 mt-5">
                      <div className="row">
                        {imageData.map((data: any) => {
                          return (
                            // eslint-disable-next-line react/jsx-key
                            <div
                              className="col-xl-3 sm:col-xl-12"
                              style={{ marginBottom: "15px" }}
                            >
                              <div className="bg-items">
                                <div className="items">
                                  <Image
                                    className="items"
                                    src={data.image}
                                    alt="gallery item"
                                    width={100} height={100}
                                  />
                                  <div className="three"></div>
                                  <div className="details">
                                    <a
                                      className="lightbox-image"
                                      data-fancybox="gallery"
                                      href={data.image}
                                    >
                                      <i
                                        className="fa-solid fa-magnifying-glass-plus text-5xl"
                                        style={{ color: "#10213e" }}
                                      ></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ConsultComponent />
            </div>
          </div>
        </Fancybox>
      </section>
    </div>
  );
}
