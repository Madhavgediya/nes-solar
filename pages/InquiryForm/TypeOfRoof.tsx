import { SetStateAction, useEffect, useState } from "react";
import RadioComponent from "../../src/components/common/RadioComponent";
import { useStepper } from "../../src/context/StepperContext";
import { Button } from "@/components/common/Button";

const TypeOfRoof = () => {
  const { nextStep, updateFormData, formData } = useStepper();
  const [selectedOption, setSelectedOption] = useState(
    formData.typesOfRoof || ""
  );
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(selectedOption !== "");
  }, [selectedOption]);

  useEffect(() => {
    setSelectedOption(formData.typesOfRoof || "");
  }, [formData.typesOfRoof]);

  const handleRequirementChange = (value: SetStateAction<string>) => {
    setSelectedOption(value);
    updateFormData({ typesOfRoof: value });
  };

  const handleNextClick = () => {
    if (isFormValid) {
      nextStep();
    }
  };

  return (
    <div className="pt-16">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        Types of Roof
      </h1>

      <RadioComponent
        handleChange={handleRequirementChange}
        options={["RCC", "Shed"]}
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

export default TypeOfRoof;
