import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_48e9ubLg_PSPCvX4P43VMzguB4DMCmBaF");

export async function POST() {
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "heshameldawy__@outlook.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });

  return NextResponse.json({});
}
