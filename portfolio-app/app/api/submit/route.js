import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER, // Environment variable
        pass: process.env.GMAIL_PASS, // Environment variable
      },
    });

    const mailOptions = {
      from: email,
      to: "oomoniyimicheal18@gmail.com",
      subject: `New message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new Response("Message sent successfully!", { status: 200 });
  } catch (error) {
    console.error("Error in sending email:", error); // Log the error
    return new Response(`Failed to send message: ${error}`, { status: 500 });
  }
}
