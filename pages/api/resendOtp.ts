import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const resendOtpHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { orderId } = req.body;

  if (!orderId) {
    return res.status(400).send({ message: "Bad request: missing orderId" });
  }

  const apiUrl = "https://auth.otpless.app/auth/otp/v1/resend"; 

  try {
    console.log("Sending request to external API with orderId:", orderId);
    console.log("Client ID:", process.env.NEXT_PUBLIC_OTPLESS_CLIENT_ID);

    const response = await axios.post(
      apiUrl,
      { orderId },
      {
        headers: {
          clientId: `${process.env.NEXT_PUBLIC_OTPLESS_CLIENT_ID}`,
          clientSecret: `${process.env.NEXT_PUBLIC_OTPLESS_CLIENT_SECRET}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          "Access-Control-Allow-Headers":
            "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
        },
      }
    );

    return res.status(200).json({ success: true, data: response.data });
  } catch (error: any) {
    console.error("Error in resendOtpHandler:", error);
    return res.status(500).json({ message: error.message });
  }
};

export default resendOtpHandler;

