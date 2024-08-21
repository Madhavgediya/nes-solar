import React, { useEffect, useState } from "react";
import { useStepper } from "../../src/context/StepperContext";
import InputField from "../../src/components/common/InputField";
import { resendOtp, verifyOtp } from "@/lib/api";
import { Button } from "@/components/common/Button";

const OtpVerification: React.FC = () => {
  const { nextStep, updateFormData, formData, saveFormData } = useStepper();
  const [otp, setOtp] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [orderId, setOrderId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [timer, setTimer] = useState<number>(60);
  const [timerActive, setTimerActive] = useState<boolean>(true);

  useEffect(() => {
    const storedOrderId = localStorage.getItem("order_id") || "";
    setOrderId(storedOrderId);
  }, []);

  useEffect(() => {
    if (timerActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setTimerActive(false);
    }
  }, [timer, timerActive]);

  const phoneNumber = "91" + formData.whatsappNumber;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateOtp(otp)) {
      setIsSubmitting(true);
      const updatedFormData = { ...formData, otp };
      updateFormData(updatedFormData);

      try {
        if (orderId) {
          const data = await verifyOtp(orderId, otp, phoneNumber);
          if (data.success && data.data.isOTPVerified) {
            await saveFormData(updatedFormData);
            nextStep();
            localStorage.removeItem("orderId");
            setOrderId("");
          } else {
            setError("OTP is invalid");
          }
        } else {
          setError("Order ID is missing");
        }
      } catch (error) {
        setError("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setError("Invalid OTP. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleResendOtp = async () => {
    setTimer(60);
    setTimerActive(true);
    setError("");
    setIsSubmitting(true);

    try {
      if (orderId) {
        const response = await resendOtp(orderId);
        if (response.success) {
          setTimerActive(false);
          setTimer(0);
        } else {
          setError(`Error: ${response.statusText}`);
        }
      } else {
        setError("Order ID is missing");
      }
    } catch (error: any) {
      setError(
        error.response?.data?.message ||
          error.message ||
          "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateOtp = (otp: string): boolean => {
    const otpRegex = /^\d{6}$/;
    return otpRegex.test(otp);
  };

  return (
    <div className="pt-16 flex flex-col items-center w-full">
      <h2 className="text-center text-dark-blue text-5xl font-bold font-weight-bolder mb-6">
        OTP Verification
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <InputField
          name="otp"
          type="text"
          value={otp}
          onChange={handleChange}
          placeholder="Enter OTP"
          errorMessage={error}
        />
        {error && <p className="text-red-500 text-base mt-1">{error}</p>}
        <div className="items-center flex-col flex m-0">
          {timer > 0 ? (
            <p className="text-sky-950 mt-4 font-medium">
              Resend OTP in {timer} seconds
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResendOtp}
              className="mt-5 px-10 py-4 ml-4 bg-[#002f63] text-white rounded-md hover:bg-[#001a40]"
            >
              Resend OTP
            </button>
          )}
          <Button
            variant="outlined"
            type="submit"
            className={`font-custom !capitalize !mt-5 !px-10 !py-4 !bg-[#002f63] !text-white !border-0 !rounded-md hover:bg-[#002f63]  ${
              isSubmitting ? "" : "opacity-50 cursor-not-allowed"
            }`}
            label="Next &rarr;"
            disabled={isSubmitting}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default OtpVerification;
