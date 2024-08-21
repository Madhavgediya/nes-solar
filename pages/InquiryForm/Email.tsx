import React, { useState, useEffect } from "react";
import InputField from "../../src/components/common/InputField";
import { useStepper } from "../../src/context/StepperContext";
import { Button } from "@/components/common/Button";

const Email: React.FC = () => {
  const { nextStep, updateFormData, formData } = useStepper();
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (formData.email) {
      setEmail(formData.email);
    }
  }, [formData.email]);

  useEffect(() => {
    setIsEmailValid(validateEmail(email));
  }, [email]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEmail(newValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmailValid && email) {
      updateFormData({ email });
      nextStep();
    } else {
      setError("Please enter a valid email address.");
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="pt-16 flex flex-col items-center w-full">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        Email
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate>
        <InputField
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          validate={(value) => validateEmail(value)}
          errorMessage={error}
        />
        <div className="justify-center flex m-0">
          <Button
            variant="outlined"
            type="submit"
            className={`font-custom !capitalize !mt-5 !px-10 !py-4 !bg-[#002f63] !text-white !border-0 !rounded-md hover:bg-[#002f63]  ${
              isEmailValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            label="Next &rarr;"
            disabled={!isEmailValid || !email}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default Email;
