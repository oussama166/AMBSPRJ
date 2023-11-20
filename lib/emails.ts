import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  subject: string;
  title?: string;
  username?: string;
  html?: string;
};

export default async function sendEmailCompany(data: EmailPayload) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "companyambs130@gmail.com",
      pass: "lgbz xcjq risj yxkr",
    },
  });

  return await transporter.sendMail({
    from: `${data.title} <${data.to}>`,
    to: "AMBS <companyambs130@gmail.com>",
    subject: "AMBS CONTACT NOUS",
    text: data.subject,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Us</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f9f9f9;
                padding: 20px;
            }
            h1 {
                color: #333;
                font-size: 24px;
                text-decoration : underline;
            }
            p {
                color: #555;
                font-size: 16px;
                line-height: 1.5;
            }
            .signature {
                font-style: italic;
            }
        </style>
    </head>
    <body>
        <h1>${data.subject}</h1>
        <p>Dear ${data.username},</p>
        <p>Thank you for reaching out to us at ${data.title}. We appreciate your interest!</p>
        <p>${data.subject}</p>
        <p class="signature">Best regards,</p>
        <p class="signature">The ${data.title} Team</p>
    </body>
    </html>
    `,
  });
}
