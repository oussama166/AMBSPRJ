// import { WelcomeEmail } from "@/Components/EmailTemplate";
// import { render } from "@react-email/render";
import type { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "@/lib/emails";
import sendEmailCompany from "@/lib/emails";
import sendEmailUser from "@/lib/emailsUser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { username, email, message } = req.body;

    if (!username || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await sendEmailCompany({
      to: email || "default@example.com",
      title: username,
      subject: message,
      username,
    });

    await sendEmailUser({
      to: email || "default@example.com",
      title: username,
      subject: message,
      username,
    });
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
