import { SetStateAction, useEffect, useState } from "react";
import { useStepper } from "../../src/context/StepperContext";
import RadioComponent from "../../src/components/common/RadioComponent";
import InputField from "../../src/components/common/InputField";
import { Button } from "@/components/common/Button";

const SolarPanelBrand = () => {
  const { updateFormData, nextStep, formData } = useStepper();
  const [selectedOption, setSelectedOption] = useState(
    formData.panelBrand || ""
  );
  const [otherBrand, setOtherBrand] = useState(formData.otherBrand || "");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      selectedOption !== "" && (selectedOption !== "Other" || otherBrand !== "")
    );
  }, [selectedOption, otherBrand]);

  useEffect(() => {
    setSelectedOption(formData.panelBrand || "");
    setOtherBrand(formData.otherBrand || "");
  }, [formData.panelBrand, formData.otherBrand]);

  const handleRequirementChange = (value: SetStateAction<string>) => {
    setSelectedOption(value);
    if (value !== "Other") {
      updateFormData({ panelBrand: value, otherBrand: "" });
      setOtherBrand("");
    } else {
      updateFormData({ panelBrand: value });
    }
  };

  const handleOtherBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOtherBrand(value);
    updateFormData({ otherBrand: value });
  };

  const handleNextClick = () => {
    if (isFormValid) {
      nextStep();
    }
  };

  return (
    <div className="pt-16 text-center">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        Select Solar Panel Make
      </h1>

      <RadioComponent
        handleChange={handleRequirementChange}
        options={["Adani", "Waaree", "Panasonic", "Raajratna", "Other"]}
        selected={selectedOption}
      />
      {selectedOption === "Other" && (
        <div className="flex justify-center mt-4">
          <InputField
            name="otherBrand"
            type="text"
            value={otherBrand}
            onChange={handleOtherBrandChange}
            placeholder="Enter the name"
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

export default SolarPanelBrand;
