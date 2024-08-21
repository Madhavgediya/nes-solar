import React, { useEffect, useState } from "react";
import InputField from "../../src/components/common/InputField";
import { useStepper } from "../../src/context/StepperContext";
import { Button } from "@/components/common/Button";

const SolarPowerPlantCapacity: React.FC = () => {
  const { nextStep, updateFormData, formData } = useStepper();
  const [capacity, setCapacity] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (formData.capacity) {
      const numericValue = formData.capacity.replace(/[^0-9.]/g, "");
      setCapacity(numericValue);
    }
  }, [formData.capacity]);

  useEffect(() => {
    setIsFormValid(validateCapacity(capacity));
  }, [capacity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setCapacity(value);
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateCapacity(capacity)) {
      updateFormData({ capacity: parseFloat(capacity) + "kw" });
      nextStep();
    } else {
      setError("Capacity must be a positive number.");
    }
  };

  const validateCapacity = (value: string) => {
    return !isNaN(Number(value)) && parseFloat(value) > 0;
  };

  return (
    <div className="pt-16 flex flex-col items-center w-full">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        Solar Power Plant Capacity
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <InputField
          name="capacity"
          type="text"
          value={capacity}
          onChange={handleChange}
          placeholder="Enter plant capacity in KW"
          validate={validateCapacity}
          errorMessage={error}
          suffix="KW"
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

export default SolarPowerPlantCapacity;
