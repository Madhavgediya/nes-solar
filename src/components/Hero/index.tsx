"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LandingSolarCleaning from "../LandingSolarCleaning/LandingSolarCleaning";
import LandingSolarPvMaintenance from "../LandingSolarPvMaintenance/LandingSolarPvMaintenance";
import CounterSection from "../CounterSection";
import OurClient from "../OurClient";
import { useStepper } from "@/context/StepperContext";
import Image from "next/image";
import { width } from "@mui/system";
import { url } from "inspector";

const TILES = [
  "Residence Solar         ",
  "Commercial & Industrial Solar",
  "Solar Panel Cleaning Robots",
  "O & M",
];

function Hero() {
  const [open, setOpen] = useState(true);
  const [formTitle, setFormTitle] = useState(TILES[0]);
  const [tiles, setTiles] = useState(
    TILES.map((tile, index) => ({
      label: tile,
      hidden: index !== 0,
    }))
  );
  const [activeTab, setActiveTab] = useState(0);

  const { updateFormData } = useStepper();
  const [zipCode, setZipCode] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const isZipCodeValid = (zip: any) => {
    const zipCodePattern = /^\d{6}$/;
    return zipCodePattern.test(zip);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setZipCode(newValue);
    setErrorMessage("");
  };

  const router = useRouter();
  const toggleDrawer = (open: boolean, event: any, tabIndex: number) => {
    const interactedTile = (event.target as HTMLElement).outerText;
    setActiveTab(tabIndex);
    setFormTitle(interactedTile);

    setTiles((prev) =>
      prev.map((tile) => {
        if (tile.label !== interactedTile) {
          return { ...tile, hidden: true };
        } else {
          return tile;
        }
      })
    );
    setOpen(open);
  };

  useEffect(() => {
    if (!open) {
      setTiles((prev) => prev.map((tile) => ({ ...tile, hidden: open })));
    }
  }, [open]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextTab = (activeTab + 1) % TILES.length;
      toggleDrawer(true, { target: { outerText: TILES[nextTab] } }, nextTab);
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isZipCodeValid(zipCode)) {
      updateFormData({ zipCode });
      router.push("/InquiryForm");
    } else {
      setErrorMessage("Please enter a valid 6-digit ZIP code.");
    }
  };
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark z-10 overflow-hidden relative"
      >
        <div className="container ">
          <div className="flex flex-col py-16 lg:h-[58vh] lg:justify-end lg:pb-12">
            <div
              className={`absolute top-20 md:top-20 xs:top-24 left-0 w-full md:h-[60vh] sm:h-[40vh] lg:h-[100vh] h-[45vh] xs:h-[60vh] video-section`}
            >
              <div>
                <video
                  autoPlay
                  loop
                  muted
                  style={{
                    backgroundImage: "url(/assets/bg-compress.png)",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  ref={(videoRef) => {
                    if (videoRef) {
                      videoRef.playbackRate = 0.5;
                    }
                  }}
                >
                  <source src="/assets/bg-compress.mp4" type="video/mp4" />
                </video>
                {/* <Image
                  src="/assets/bg-compress.gif"
                  style={{
                    background: "black",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt="BG"
                /> */}
              </div>
            </div>

            <div
              className={`relative flex flex-col items-center justify-center text-center h-full w-full z-10 top-24 max-sm:top-32`}
            >
              <div className="text-white font-custom font-medium mt-4 mb-4 text-2xl sm:text-xl md:text-4xl leading-9 md:leading-10 sm:leading-10">
                One Stop Solutions for Design, Execution and O&M
              </div>
              <div className="flex items-center mt-4 mb-4 max-sm:mt-16">
                <div className="text-lg text-white font-custom">
                  <p>We</p>
                </div>
                <div
                  className="before:border-l-2 before:absolute before:h-2 before:w-4 before:top-0 before:border-t-2 before:border-solid before:rounded-t before:border-white before:-left-0.5 items-center border-x-white border-white border-2 border-solid rounded-md border-t-0 flex min-w-190 relative pt-1 pr-4 pl-4 pb-1.5 mt-0 mb-0 mr-4 ml-1 after:border-r-2"
                  style={{ width: "190px", height: "46px" }}
                >
                  <div className="font-custom text-white before:mr-2.5 before:border-white before:h-0.5 before:w-3 items-center flex text-sm left-1 absolute right-0.5 -top-2.5 after:ml-3 after:w-full after:h-0.5 after:bg-white">
                    Action
                  </div>
                  <div className="typewriter font-custom text-yellow-400 text-lg font-medium max-w-full pr-2"></div>
                </div>
                <div className="font-custom text-white text-lg">
                  <p>solar energy.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-4 mx-auto mt-16">
            <div className="md:relative sm:relative max-sm:relative items-center mx-auto flex flex-col justify-items-center mb-5 m-0 relative md:px-12 w-full justify-center">
              <div className="w-full text-center mb-4 block sm:hidden">
                <div className="text-2xl md:text-4xl font-bold text-white">
                  {tiles[activeTab]?.label}
                </div>
              </div>

              <div className="relative mt-4 max-sm:mt-4 mb-4">
                <div className="relative z-10 bg-gray-200 rounded-full w-full max-sm:hidden lg:w-full flex items-center max-sm:w-full max-sm:justify-center">
                  {tiles.map((tile, key) => (
                    <React.Fragment key={tile.label}>
                      <button
                        className={`slider-button px-4 py-2 sm:px-8 sm:py-8 lg:px-2 lg:py-4 rounded-none lg:rounded-full font-custom flex text-center relative justify-center items-center h-full w-full bg-cover max-sm:w-16 max-sm:h-16 max-sm:flex-none ${
                          activeTab === key
                            ? "bg-[#203f69] text-white"
                            : "bg-gray-200 text-gray-600"
                        } ${key !== tiles.length - 1 ? "mr-4" : ""}`}
                        onClick={(e) => toggleDrawer(true, e, key)}
                      >
                        <span className="hidden max-sm:block w-full h-full" />
                        <span className="block max-sm:hidden">
                          {tile.label}
                        </span>
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex justify-center mt-4 mb-4 text-black sm:hidden xs:hidden get-quote">
                  <div className="relative flex items-center mr-4">
                    <span className="absolute left-3 text-gray-500">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <input
                      name="zipCode"
                      type="text"
                      value={zipCode}
                      onChange={handleChange}
                      placeholder="ZIP Code"
                      maxLength={6}
                      className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 w-full max-w-xs text-black"
                      required
                    />
                  </div>
                  <button
                    className="px-4 py-2 ml-4  rounded-2xl font-custom flex text-center justify-center items-center bg-white text-[#203f69] max-sm:border-[#203f69] font-bold pulse-button"
                    type="submit"
                  >
                    Get a quote
                  </button>
                </div>
                {errorMessage && (
                  <p className="text-red-500 mt-2">{errorMessage}</p>
                )}
              </form>
            </div>
          </div>
          {/* <div className="mouse_scroll lg:hidden md:hidden">
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
          </div> */}
        </div>
      </section>

      <div>
        <LandingSolarCleaning />
      </div>

      <div>
        <LandingSolarPvMaintenance />
      </div>
      <div>
        <CounterSection />
      </div>
      <OurClient />
    </>
  );
}

export default Hero;
