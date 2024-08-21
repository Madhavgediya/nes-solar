import { SetStateAction, useEffect, useState } from "react";
import RadioComponent from "../../src/components/common/RadioComponent";
import { useStepper } from "../../src/context/StepperContext";
import { Button } from "@/components/common/Button";

const SolarStructureHeight = () => {
  const { updateFormData, nextStep, formData } = useStepper();
  const [selectedOption, setSelectedOption] = useState(
    formData.structureHeight || ""
  );
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(selectedOption !== "");
  }, [selectedOption]);

  useEffect(() => {
    setSelectedOption(formData.structureHeight || "");
  }, [formData.structureHeight]);

  const handleRequirementChange = (value: SetStateAction<string>) => {
    setSelectedOption(value);
    updateFormData({ structureHeight: value });
  };

  const handleNextClick = () => {
    if (isFormValid) {
      nextStep();
    }
  };

  return (
    <div className="pt-16">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        Solar Structure Height
      </h1>

      <RadioComponent
        handleChange={handleRequirementChange}
        options={["4-5 ft", "6-7 ft", "8-10 ft", "12ft or above", "Mono Rail"]}
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
export default SolarStructureHeight;
