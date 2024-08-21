import React, { useEffect, useState } from "react";
import InputField from "../../src/components/common/InputField";
import { useStepper } from "../../src/context/StepperContext";
import { Button } from "@/components/common/Button";

const SolarPowerPlantCapacity: React.FC = () => {
  const { nextStep, updateFormData, formData } = useStepper();
  const [isBillValid, setIsBillValid] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [selectedBill, setSelectedBill] = useState("");

  useEffect(() => {
    if (formData.selectedBill) {
      setSelectedBill(formData.selectedBill);
    }
  }, [formData.selectedBill]);

  const handleBillSelection = (value: string) => {
    setSelectedBill(value);
    if (value) {
      setIsBillValid(true);
      setError("");
    } else {
      setIsBillValid(false);
      setError("Please select a Monthly bill");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedBill) {
      updateFormData({ monthlyBill: selectedBill });
      nextStep();
    } else {
      setIsBillValid(false);
      setError("Please select a Monthly bill");
    }
  };

  return (
    <div className="pt-16 flex flex-col items-center w-full">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        Monthly Bill
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate>
        <div className="mt-2">
          <label className="block text-sm font-medium">
            Monthly Electricity Bill <span className="text-red-600">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            {[
              "Less than ₹1500",
              "₹1500 - ₹2500",
              "₹2500 - ₹4000",
              "₹4000 - ₹8000",
              "More than ₹8000",
            ].map((bill) => (
              <button
                key={bill}
                type="button"
                className={`w-full py-2 px-2 border text-sm rounded-md hover:bg-gray-200 ${
                  selectedBill === bill ? "bg-gray-200" : ""
                }`}
                onClick={() => handleBillSelection(bill)}
              >
                {bill}
              </button>
            ))}
          </div>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="justify-center flex m-0">
          <Button
            variant="outlined"
            type="submit"
            className={`font-custom !capitalize !mt-5 !px-10 !py-4 !bg-[#002f63] !text-white !border-0 !rounded-md hover:bg-[#002f63]  ${
              isBillValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            label="Next &rarr;"
            disabled={!isBillValid}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default SolarPowerPlantCapacity;
