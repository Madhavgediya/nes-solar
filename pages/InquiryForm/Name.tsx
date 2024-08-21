import React, { useEffect, useState } from "react";
import InputField from "../../src/components/common/InputField";
import { useStepper } from "../../src/context/StepperContext";
import { Button } from "@/components/common/Button";

const Name: React.FC = () => {
  const { nextStep, updateFormData, formData } = useStepper();
  const [name, setName] = useState<string>("");
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (formData.name) {
      setName(formData.name);
    }
  }, [formData.name]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setName(newValue);
    setIsNameValid(!!newValue);

    setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "") {
      setError("Name is Required");
    } else if (isNameValid) {
      updateFormData({ name });
      nextStep();
    }
  };

  return (
    <div className="pt-16 flex flex-col items-center w-full">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        Name
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate>
        <InputField
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your Name"
          validate={(value) => !!value}
          errorMessage="Name is Required"
        />
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        <div className="justify-center flex m-0">
          <Button
            variant="outlined"
            type="submit"
            className={`font-custom !capitalize !mt-5 !px-10 !py-4 !bg-[#002f63] !text-white !border-0 !rounded-md hover:bg-[#002f63]  ${
              isNameValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            label="Next &rarr;"
            disabled={!isNameValid}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default Name;
