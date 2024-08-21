import React, { useEffect, useState } from "react";
import { useStepper } from "../../src/context/StepperContext";
import InputField from "../../src/components/common/InputField";
import { Button } from "@/components/common/Button";

const SolarPanelClean: React.FC = () => {
  const { nextStep, updateFormData, formData } = useStepper();
  const [cleaningTime, setCleaningTime] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (formData.cleaningTime) {
      const numericValue = formData.cleaningTime.replace(/[^0-9.]/g, "");
      setCleaningTime(numericValue);
    }
  }, [formData.cleaningTime]);

  useEffect(() => {
    setIsFormValid(validateCleaningTime(cleaningTime));
  }, [cleaningTime]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setCleaningTime(value);
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateCleaningTime(cleaningTime)) {
      updateFormData({ cleaningTime: parseFloat(cleaningTime) + "days" });
      nextStep();
    } else {
      setError("Cleaning frequency is required.");
    }
  };

  const validateCleaningTime = (value: string) => {
    return !!value;
  };

  return (
    <div className="pt-16 flex flex-col items-center w-full">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        How Frequently Are Your Solar Panels Getting Clean?
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <InputField
          name="cleaningTime"
          type="text"
          value={cleaningTime}
          onChange={handleChange}
          placeholder="Enter the cleaning frequency"
          validate={validateCleaningTime}
          errorMessage={error}
          suffix="Days"
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
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default SolarPanelClean;
