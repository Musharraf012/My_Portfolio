// app/api/send-sms/route.ts
import { NextResponse } from "next/server";
import Twilio from "twilio";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const accountSid = process.env.TWILIO_ACCOUNT_SID!;
    const authToken = process.env.TWILIO_AUTH_TOKEN!;
    const fromPhone = process.env.TWILIO_PHONE_NUMBER!;
    const toPhone = process.env.MY_PHONE_NUMBER!;

    const client = Twilio(accountSid, authToken);

    const smsBody = `New message from ${name} (${email}):\nSubject: ${subject}\n${message}`;

    await client.messages.create({
      body: smsBody,
      from: fromPhone,
      to: toPhone,
    });

    return NextResponse.json({ message: "SMS sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Twilio error:", error);
    return NextResponse.json({ message: "Failed to send SMS" }, { status: 500 });
  }
}
