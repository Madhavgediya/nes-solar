import { imageData } from "@/data/About/ImageData";
import { imageData2 } from "@/data/About/ImageData2";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function OurClient() {
  return (
    <div>
      <div className="brand-wrapper gradient-bg pt-12 font-custom">
        <div className=" mb-14 text-center">
          <h2 className="text-4xl">
            <span className="text-line" style={{ color: "black" }}>
              Our{" "}
              <span
                className="text-bold"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Client
              </span>
            </span>
          </h2>
          <p className="title_line">
            <span></span>
            <span></span>
          </p>
        </div>
        <div className="Marquee">
          <Marquee
            direction="right"
            autoFill={true}
            speed={50}
            pauseOnHover={true}
            style={{ overflow: "hidden" }}
          >
            {imageData.map((data) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="Marquee-tag">
                  <img
                    src={data.clientele}
                    alt="Flexibond"
                    style={{ padding: "15px" }}
                    // width={100}
                    // height={100}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
        <div className="Marquee">
          <Marquee
            direction="left"
            autoFill={true}
            speed={50}
            pauseOnHover={true}
            style={{ overflow: "hidden" }}
          >
            {imageData2.map((data) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="Marquee-tag">
                  <img
                    src={data.clientele}
                    alt="Flexibond"
                    style={{ padding: "15px" }}
                    // width={100}
                    // height={100}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
