import React, { useState } from "react";
import InputField from "../../src/components/common/InputField";
import { useStepper } from "../../src/context/StepperContext";
import { Button } from "@/components/common/Button";

const Address = () => {
  const { nextStep, updateFormData } = useStepper();
  const [address, setAddress] = useState<string>("");
  const [isAddressValid, setIsAddressValid] = useState<boolean>(true);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setAddress(newValue);
    setIsAddressValid(!!newValue.trim());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (address === "") {
      setError("Address is Required");
    } else if (address.trim()) {
      updateFormData({ address });
      nextStep();
    }
  };

  return (
    <div className="pt-16 flex flex-col items-center w-full">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        Address
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <InputField
          name="address"
          type="text"
          value={address}
          onChange={handleChange}
          placeholder="Enter your address"
          validate={(value: string) => !!value.trim()}
          errorMessage="Address is Required"
        />
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        <div className="justify-center flex m-0">
          <Button
            variant="outlined"
            type="submit"
            className={`font-custom !capitalize !mt-5 !px-10 !py-4 !bg-[#002f63] !text-white !border-0 !rounded-md hover:bg-[#002f63]  ${
              isAddressValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            label="Next &rarr;"
            disabled={!isAddressValid}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default Address;
