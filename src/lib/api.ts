import axios from "axios";

// Define types for the form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface EnquiryFormData {
  subject: string;
  description: string;
  email: string;
}

interface OtpRequestData {
  phoneNumber: string;
  orderId: string;
  otpLength: number;
  channel: string;
  expiry: number;
}

interface OtpVerificationData {
  orderId: string;
  otp: string;
  phoneNumber: string;
}

interface ResendOtpData {
  orderId: string;
}

export const sendContactForm = async (data: ContactFormData): Promise<any> =>
  fetch("/api/contactForm", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

export const sendEnquiryForm = async (data: EnquiryFormData): Promise<any> =>
  fetch("/api/enquiryForm", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

export const sendOtp = async (
  phoneNumber: string,
  orderId: string,
  otpLength: string,
  channel: string,
  expiry: string
): Promise<any> => {
  try {
    const response = await axios.post("/api/sendOtp", {
      phoneNumber,
      orderId,
      otpLength,
      channel,
      expiry,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const verifyOtp = async (
  orderId: string,
  otp: string,
  phoneNumber: string
): Promise<any> => {
  try {
    const response = await axios.post("/api/verifyOtp", {
      orderId,
      otp,
      phoneNumber,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const resendOtp = async (orderId: string): Promise<any> => {
  try {
    const response = await axios.post("/api/resendOtp", { orderId });
    return response.data;
  } catch (error) {
    console.error("Error in resendOtp function:", error);
    throw error;
  }
};
