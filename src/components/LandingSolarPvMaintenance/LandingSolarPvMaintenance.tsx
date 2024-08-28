import React, { useEffect, useState } from "react";
import SolarPVButton from "./button";
import PopupPopover from "../common/PopupPopover/PopupPopover";
import AccordionComponent from "../common/AccordionComponent";
import { independentPowerData } from "@/data/Maintenance/IndependentPower";
import { utilitiesData } from "@/data/Maintenance/Utilities";

export default function LandingSolarPvMaintenance() {
  const [selectedButton, setSelectedButton] = useState<string | null>(
    "Utility Scale Solar"
  );

  const handleClick = (buttonValue: string) => {
    setSelectedButton(buttonValue);
  };
  const [visiblePopover, setVisiblePopover] = useState(0);

  useEffect(() => {
    const popoverCount = 4;
    const interval = setInterval(() => {
      setVisiblePopover((prev) => (prev + 1) % popoverCount);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container mx-auto px-4 py-8 font-custom">
      {/* Heading */}

      <div className="mt-10 mb-8 text-center">
        <h2 className="text-4xl">
          <span
            className="text-line"
            style={{ color: "black", fontWeight: "normal" }}
          >
            Solar PV{" "}
            <span
              className="text-bold"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Maintenance
            </span>
          </span>
        </h2>
        <p className="title_line">
          <span></span>
          <span></span>
        </p>
      </div>
      {/* Toggle Buttons */}
      <div className="flex flex-row max-sm:flex-col sm:space-x-4 mb-8">
        <SolarPVButton
          label="Utility Scale Solar"
          onClick={() => handleClick("Utility Scale Solar")}
          isActive={selectedButton === "Utility Scale Solar"}
        />
        <SolarPVButton
          label="Rooftop Solar"
          onClick={() => handleClick("Rooftop Solar")}
          isActive={selectedButton === "Rooftop Solar"}
        />
        <SolarPVButton
          label="Preventive Maintenance"
          onClick={() => handleClick("Preventive Maintenance")}
          isActive={selectedButton === "Preventive Maintenance"}
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-row max-sm:flex-col max-sm:mt-6 md:flex-col lg:flex-row">
        <div className="w-full  lg:w-8/12 mb-8 sm:mb-0 bg-gray-200 p-8 rounded-lg shadow-md h-full relative">
          {/* Images */}

          <div
            className="w-full h-96 bg-cover bg-center"
            style={{
              backgroundImage:
                selectedButton === "Utility Scale Solar"
                  ? `url('/assets/independentPowerProcedure.webp')`
                  : selectedButton === "Rooftop Solar"
                  ? `url('/assets/utilities.webp')`
                  : `url('/assets/Expertise/expertise-80720220414.webp')`,
            }}
          >
            {selectedButton === "Utility Scale Solar" && (
              <div className="absolute w-full max-sm:w-0 flex justify-center">
                <div className="w-5 h-5 absolute left-52 max-sm:left-20 top-32 max-md:left-4 max-lg:left-10 2xl:left-[15.5rem] 2xl:top-[7.3rem]">
                  <PopupPopover
                    title="1"
                    path="/assets/error-icon.webp"
                    content="Cracked Module"
                    visible={visiblePopover === 0}
                  />
                </div>
                <div className="relative top-52 left-12">
                  <PopupPopover
                    title="2"
                    path="/assets/error-icon.webp"
                    content="Reverse Polarity Detect"
                    visible={visiblePopover === 1}
                  />
                </div>
                <div className="w-5 h-5 absolute left-52 max-sm:left-20 top-80 max-md:left-4 max-xl:left-96 2xl:left-64 2xl:top-[22rem]">
                  <PopupPopover
                    title="3"
                    path="/assets/error-icon.webp"
                    content="Hot Spot Detect"
                    visible={visiblePopover === 2}
                  />
                </div>
                <div className="w-5 h-5 absolute left-[26rem] max-sm:left-44 top-32 max-md:left-4 max-lg:left-10 2xl:left-[15.5rem] 2xl:top-[7.3rem]">
                  <PopupPopover
                    title="4"
                    src="/assets/color-card.webp"
                    image={true}
                    visible={visiblePopover === 3}
                  />
                </div>
              </div>
            )}

            {selectedButton === "Rooftop Solar" && (
              <div className="absolute lg:w-full max-sm:w-[150px] flex justify-center">
                <div className="relative top-20 -left-10">
                  <PopupPopover
                    title="1"
                    path="/assets/error-icon.webp"
                    content="Asset Degradation Spotted"
                    visible={visiblePopover === 0}
                  />
                </div>
                <div className="relative top-20 lg:left-36 max-sm:left-20">
                  <PopupPopover
                    title="2"
                    path="/assets/energy-icon.webp"
                    content="Under Performance Detect 5.2%"
                    visible={visiblePopover === 1}
                  />
                </div>
                <div className="relative top-52 -left-10">
                  <PopupPopover
                    title="3"
                    src="/assets/color-card.webp"
                    image={true}
                    visible={visiblePopover === 2}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="w-full  lg:w-4/12 ml-0 sm:ml-8 max-sm:mt-8">
          <h2 className="text-2xl font-bold ml-5">
            Trusted platform for optimized solar asset performance & payback
          </h2>
          {selectedButton === "Utility Scale Solar" ? (
            <>
              <AccordionComponent accordionData={independentPowerData} />
            </>
          ) : selectedButton === "Rooftop Solar" ? (
            <>
              <AccordionComponent accordionData={utilitiesData} />
            </>
          ) : (
            <>
              We leverage our proprietary software and state-of-the-art
              technology, including advanced thermal imaging instruments, to
              perform these critical inspections and maintenance tasks. With our
              expert solar O&M services, you can trust that your solar panels
              will generate maximum power for decades to come, ensuring the best
              solar life and performance for your investment.
            </>
          )}
        </div>
      </div>
    </div>
  );
}
