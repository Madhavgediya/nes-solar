import React, { useState, useEffect } from "react";
import { useStepper } from "../../src/context/StepperContext";
import RadioComponent from "../../src/components/common/RadioComponent";
import { Button } from "@/components/common/Button";

const WhatIsYourRequirements = () => {
  const {
    updateFormData,
    setStepSequence,
    formData,
    selectedOption,
    setSelectedOption,
  } = useStepper();

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(selectedOption !== "");
  }, [selectedOption]);

  useEffect(() => {
    setSelectedOption(formData.requirement || "");
  }, [formData.requirement]);

  const handleRequirementChange = (value: React.SetStateAction<string>) => {
    setSelectedOption(value);
    updateFormData({ requirement: value });
  };

  const handleNextClick = () => {
    if (isFormValid) {
      setStepSequence(selectedOption);
    }
  };

  return (
    <div className="pt-16">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        What Is Your Requirement?
      </h1>

      <RadioComponent
        handleChange={handleRequirementChange}
        options={[
          "Residential Solar",
          "Industrial or Commercial Solar",
          "Solar Panel Cleaning Robot",
          "O&M",
        ]}
        selected={selectedOption}
      />
      <div className="justify-center flex m-0">
        <Button
          variant="outlined"
          type="submit"
          className={`font-custom !capitalize !mt-5 !px-10 !py-4 !bg-[#002f63] !text-white !border-0 !rounded-md hover:bg-[#002f63]  ${
            isFormValid ? "" : "opacity-50 cursor-not-allowed"
          }`}
          label="Next &rarr;"
          disabled={!isFormValid}
          onClick={handleNextClick}
        ></Button>
      </div>
    </div>
  );
};

export default WhatIsYourRequirements;
