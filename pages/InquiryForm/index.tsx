import React, { useState, useEffect } from "react";
import { useStepper } from "../../src/context/StepperContext";
import Address from "./Address";
import AttachModule from "./AttachModule";
import Email from "./Email";
import MonthlyBill from "./MonthlyBill";
import Name from "./Name";
import OtpVerification from "./OtpVerification";
import OwnOrRent from "./OwnOrRent";
import Repair from "./Repair";
import SolarInverterBrand from "./SolarInverterBrand";
import SolarPanelBrand from "./SolarPanelBrand";
import SolarPanelClean from "./SolarPanelClean";
import SolarPowerPlantCapacity from "./SolarPowerPlantCapacity";
import SolarStructureHeight from "./SolarStructureHeight";
import TypeOfRoof from "./TypeOfRoof";
import WhatIsYourRequirements from "./WhatIsYourRequirements";
import WhatsappNumber from "./WhatsappNumber";
import ZipCode from "./ZipCode";
import { useIsMobile } from "@/utils/useIsMobile";
import Image from 'next/image'

const InquiryForm = () => {
  const { currentStep, prevStep, steps } = useStepper();
  const [progress, setProgress] = useState(0);
  const isMobile = useIsMobile();
  useEffect(() => {
    const totalSteps = steps.length;
    setProgress(((steps.indexOf(currentStep) + 1) / totalSteps) * 100);
  }, [currentStep, steps]);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <ZipCode />;
      case 1:
        return <WhatIsYourRequirements />;
      case 2:
        return <OwnOrRent />;
      case 3:
        return <TypeOfRoof />;
      case 4:
        return <SolarPowerPlantCapacity />;
      case 5:
        return <SolarPanelBrand />;
      case 6:
        return <SolarInverterBrand />;
      case 7:
        return <MonthlyBill />;
      case 8:
        return <Address />;
      case 9:
        return <Name />;
      case 10:
        return <Email />;
      case 11:
        return <WhatsappNumber />;
      case 12:
        return <OtpVerification />;
      case 13:
        return <SolarStructureHeight />;
      case 14:
        return <AttachModule />;
      case 15:
        return <Repair />;
      case 16:
        return <SolarPanelClean />;
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <>
      <header className="flex items-center p-4">
        {isMobile
          ? currentStep > 0 && (
              <button
                className="flex-none mr-4 p-2 text-blue-500 hover:bg-blue-100 rounded"
                onClick={() => prevStep(currentStep)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
            )
          : currentStep > 1 && (
              <button
                className="flex-none mr-4 p-2 text-blue-500 hover:bg-blue-100 rounded"
                onClick={() => prevStep(currentStep)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
            )}
        <div className="flex-grow text-center">
          <Image
            // src="/assets/nes-solar-header-logo-35420220703.webp"
            src="/assets/NES_Solar_logo_f.svg"
            alt="Logo"
            className="h-16 mx-auto"
            width={100} height={100}
          />
        </div>
      </header>
      <div className="flex-grow">
        <div className="h-[0.2rem] w-full">
          <div
            className="h-[0.2rem] bg-[#002f63] progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-right pr-4">
          <div>
            {steps.length === 1 || steps.length === 2 ? (
              ""
            ) : (
              <span>
                {steps.indexOf(currentStep) + 1} / {steps.length}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="wrapper rounded p-3 p-sm-2 p-md-4 mt-150 pt-150 mx-auto">
        {renderStep()}
      </div>
    </>
  );
};

export default InquiryForm;
