import { SetStateAction, useEffect, useState } from "react";
import RadioComponent from "../../src/components/common/RadioComponent";
import { useStepper } from "../../src/context/StepperContext";
import InputField from "@/components/common/InputField";
import { Button } from "@/components/common/Button";

const SolarInverterBrand = () => {
  const { updateFormData, nextStep, formData } = useStepper();
  const [selectedOption, setSelectedOption] = useState(
    formData.inverterBrand || ""
  );
  const [otherInverter, setOtherInverter] = useState(
    formData.otherInverter || ""
  );
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      selectedOption !== "" &&
        (selectedOption !== "Other" || otherInverter !== "")
    );
  }, [selectedOption, otherInverter]);

  useEffect(() => {
    setSelectedOption(formData.inverterBrand || "");
    setOtherInverter(formData.otherInverter || "");
  }, [formData.inverterBrand, formData.otherInverter]);

  const handleRequirementChange = (value: SetStateAction<string>) => {
    setSelectedOption(value);
    if (value !== "Other") {
      updateFormData({ inverterBrand: value, otherInverter: "" });
      setOtherInverter("");
    } else {
      updateFormData({ inverterBrand: value });
    }
  };

  const handleOtherInverterChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setOtherInverter(value);
    updateFormData({ otherInverter: value });
  };

  const handleNextClick = () => {
    if (isFormValid) {
      nextStep();
    }
  };

  return (
    <div className="pt-16 text-center">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        Select Solar Inverter
      </h1>

      <RadioComponent
        handleChange={handleRequirementChange}
        options={["Havells", "Sunway", "Sofar", "Solar Edge", "Other"]}
        selected={selectedOption}
      />
      {selectedOption === "Other" && (
        <div className="flex justify-center mt-4">
          <InputField
            name="otherInverter"
            type="text"
            value={otherInverter}
            onChange={handleOtherInverterChange}
            placeholder="Enter the Inverter name"
            className="w-[73%]"
          />
        </div>
      )}
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
export default SolarInverterBrand;
