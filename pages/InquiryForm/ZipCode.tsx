/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import InputField from "../../src/components/common/InputField";
import { useStepper } from "../../src/context/StepperContext";
import { Button } from "@/components/common/Button";

const ZipCode: React.FC = () => {
  const { nextStep, updateFormData, formData } = useStepper();
  const [zipCode, setZipCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (formData.zipCode) {
      setZipCode(formData.zipCode);
    }
  }, [formData.zipCode]);

  useEffect(() => {
    // Check if the zipCode is valid and update isFormValid
    setIsFormValid(validateZipCode(zipCode));
  }, [zipCode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setZipCode(value);
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateZipCode(zipCode)) {
      updateFormData({ zipCode });
      nextStep();
    } else {
      setError("Zip code must be a 6-digit positive number.");
    }
  };

  const validateZipCode = (value: string) => {
    return /^[0-9]{6}$/.test(value);
  };

  return (
    <div className="pt-16 flex flex-col items-center w-full">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        What's your Zip Code?
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <InputField
          name="zipCode"
          type="text"
          value={zipCode}
          onChange={handleChange}
          placeholder="Enter zip code"
          validate={validateZipCode}
          errorMessage={error}
          maxLength={6}
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

export default ZipCode;
