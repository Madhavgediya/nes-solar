import { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "../../src/config/nodemailer";

interface ContactMessageData {
  Address: string;
  Details: string;
  Email: string;
  Name: string;
  Phone: number;
  file: string;
}

interface EmailContent {
  text: string;
  html: string;
}

const CONTACT_MESSAGE_FIELDS: Record<keyof ContactMessageData, string> = {
  Address: "Address",
  Details: "Details",
  Email: "Email",
  Name: "Name",
  Phone: "Phone",
  file: "file",
};

const generateEmailContent = (data: ContactMessageData): EmailContent => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${
        CONTACT_MESSAGE_FIELDS[key as keyof ContactMessageData]
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
        <title>Contact Form Inquiry</title>
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
            <h2>Contact Form Inquiry</h2>
            <p>A new inquiry has been submitted through the contact form:</p>
            <table>
                <tr>
                    <th>Name:</th>
                    <td>${data.Name}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>${data.Email}</td>
                </tr>
                <tr>
                    <th>Phone Number:</th>
                    <td>${data.Phone}</td>
                </tr>
                <tr>
                    <th>Address:</th>
                    <td>${data.Address}</td>
                </tr>
                <tr>
                    <th>Details:</th>
                    <td>${data.Details}</td>
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

  if (
    !data ||
    !data.Name ||
    !data.Email ||
    !data.Details ||
    !data.Address ||
    !data.file
  ) {
    return res.status(400).send({ message: "Bad request" });
  }
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Contact Enquiry",
    attachments: [
      {
        filename: data.fileName,
        contentType: "image/jpeg,image/png",
        content: Buffer.from(req.body.file.split("base64,")[1], "base64"),
      },
    ],
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
