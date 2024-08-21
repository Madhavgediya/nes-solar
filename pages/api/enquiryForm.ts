import { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "../../src/config/nodemailer";

interface EnquiryMessageData {
  whatsAppNumber: number;
  PinCode: Number;
  title: string;
}

interface EmailContent {
  text: string;
  html: string;
}

const CONTACT_MESSAGE_FIELDS: Record<keyof EnquiryMessageData, string> = {
  whatsAppNumber: "whatsAppNumber",
  PinCode: "PinCode",
  title: "title",
};

const generateEmailContent = (data: EnquiryMessageData): EmailContent => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${
        CONTACT_MESSAGE_FIELDS[key as keyof EnquiryMessageData]
      }: \n${val} \n \n`),
    ""
  );

  return {
    text: stringData,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
                color: #007bff;
            }
            p {
                margin-bottom: 15px;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 15px;
            }
            th, td {
                padding: 8px;
                border-bottom: 1px solid #ddd;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>${data.title} Enquiry</h2>
            <p>A new inquiry has been submitted through the contact form:</p>
            <table>
                <tr>
                    <th>Phone Number:</th>
                    <td>${data.whatsAppNumber}</td>
                </tr>
                <tr>
                    <th>PinCode:</th>
                    <td>${data.PinCode}</td>
                </tr>
            </table>
            <p>Please respond to the inquiry as soon as possible.</p>
        </div>
    </body>
    </html>
    
    `,
  };
};
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;

  if (!data ) {
    return res.status(400).send({ message: "Bad request" });
  }
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `${data.title} Enquiry`,
 
  };

  try {
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
    });

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};
export default handler;
