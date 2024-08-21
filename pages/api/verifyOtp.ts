import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const verifyOtpHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { orderId, otp, phoneNumber } = req.body;

  if (!orderId || !otp || !phoneNumber) {
    return res.status(400).send({ message: "Bad request: missing parameters" });
  }

  const apiUrl = "https://auth.otpless.app/auth/otp/v1/verify";

  try {
    const response = await axios.post(
      apiUrl,
      {
        orderId,
        otp,
        phoneNumber,
      },
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
    console.error("Error:", error);
    return res.status(500).json({ message: error.message });
  }
};

export default verifyOtpHandler;
