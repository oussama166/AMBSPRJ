import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  subject: string;
  title?: string;
  username?: string;
  html?: string;
};

export default async function sendEmailUser(data: EmailPayload) {
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
    from: "AMBS <companyambs130@gmail.com>",
    to: `${data.title} <${data.to}>`,
    subject: "AMBS CONTACT NOUS",
    text: data.subject,
    html: `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nous Contacter</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f9f9f9;
                padding: 20px;
            }
            h1 {
                color: #333;
                font-size: 24px;
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
        <h1>Contacter notre equipe de service</h1>
        <p>Cher(e) ${data.username},</p>
        <p>Nous vous remercions d'avoir pris contact avec nous chez AMBS . Votre intérêt est très apprécié !</p>
        <p>${data.subject}</p>
        <p class="signature">Cordialement,</p>
        <p class="signature">L'équipe de AMBS</p>
    </body>
    </html>
    
      `,
  });
}
