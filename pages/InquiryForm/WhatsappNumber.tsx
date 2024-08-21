// @ts-ignore
import React, { useEffect, useState } from "react";
import InputField from "../../src/components/common/InputField";
import { useStepper } from "../../src/context/StepperContext";
import { sendOtp } from "@/lib/api";
import { Button } from "@/components/common/Button";

const WhatsappNumber: React.FC = () => {
  const { nextStep, updateFormData, formData } = useStepper();
  const [whatsappNumber, setWhatsappNumber] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const timestamp = Date.now();

  useEffect(() => {
    if (formData.whatsappNumber) {
      setWhatsappNumber(formData.whatsappNumber);
    }
  }, [formData.whatsappNumber]);

  useEffect(() => {
    // Update form validity based on the WhatsApp number
    setIsFormValid(validateWhatsappNumber(whatsappNumber));
  }, [whatsappNumber]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatsappNumber(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) {
      setError("Please enter a valid WhatsApp number.");
      return;
    }

    const phoneNumber = "91" + whatsappNumber;
    const channel = "WHATSAPP";
    const expiry = "600";
    const otpLength = "6";
    const orderId = `order${timestamp}`;

    setIsLoading(true);

    try {
      const response = await sendOtp(
        phoneNumber,
        orderId,
        otpLength,
        channel,
        expiry
      );
      if (response.success === true) {
        localStorage.setItem("order_id", response.data.orderId);
        updateFormData({ whatsappNumber });
        nextStep();
      } else {
        setError("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const validateWhatsappNumber = (number: string) => {
    const whatsappRegex = /^\d{10,15}$/;
    return whatsappRegex.test(number);
  };

  return (
    <div className="pt-16 flex flex-col items-center w-full">
      <h1 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        WhatsApp Number
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <InputField
          name="whatsappNumber"
          type="text"
          value={whatsappNumber}
          onChange={handleChange}
          placeholder="Enter your WhatsApp number"
          validate={validateWhatsappNumber}
          errorMessage={error}
        />
        <div className="justify-center flex m-0">
          <Button
            variant="outlined"
            type="submit"
            className={`font-custom !capitalize !mt-5 !px-10 !py-4 !bg-[#002f63] !text-white !border-0 !rounded-md hover:bg-[#002f63] ${
              isFormValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            label={"Next"}
            disabled={!isFormValid || isLoading}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default WhatsappNumber;
