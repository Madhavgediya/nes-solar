import React, { useEffect, useState } from "react";
import { useStepper } from "../../src/context/StepperContext";
import RadioComponent from "../../src/components/common/RadioComponent";
import { Button } from "@/components/common/Button";

const Repair = () => {
  const { updateFormData, nextStep, formData } = useStepper();
  const [selectedOption, setSelectedOption] = useState(
    formData.repairOrCleaning || ""
  );
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(selectedOption !== "");
  }, [selectedOption]);

  useEffect(() => {
    setSelectedOption(formData.repairOrCleaning || "");
  }, [formData.repairOrCleaning]);

  const handleRequirementChange = (value: React.SetStateAction<string>) => {
    setSelectedOption(value);
    updateFormData({ repairOrCleaning: value });
  };

  const handleNextClick = () => {
    if (isFormValid) {
      nextStep();
    }
  };

  return (
    <div className="pt-16">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        What you Required for your Solar power plant?
      </h1>

      <RadioComponent
        handleChange={handleRequirementChange}
        options={[
          "Repair",
          "Cleaning",
          "Solar Power plant performance monthly monitoring and checking",
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
export default Repair;
