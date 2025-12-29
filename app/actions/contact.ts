"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Semua field harus diisi!" };
  }

  try {
    await prisma.contactMessage.create({
      data: { name, email, message },
    });

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["putrisalsabila101208@gmail.com"],
      subject: "📩 Pesan Baru dari Portfolio",
      replyTo: email,
      html: `
        <h3>Pesan Baru</h3>
        <p><b>Nama:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Gagal mengirim pesan." };
  }
}
