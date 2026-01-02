"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";

// Validasi API key saat initialization
const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
  throw new Error(
    "RESEND_API_KEY is not defined in environment variables"
  );
}

const resend = new Resend(RESEND_API_KEY);

export async function sendContactMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Semua field harus diisi!" };
  }

  try {
    // Simpan ke database
    await prisma.contactMessage.create({
      data: { name, email, message },
    });

    // Kirim email
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["putrisalsabila101208@gmail.com"],
      subject: "📩 Pesan Baru dari Portofolio",
      replyTo: email,
      html: `
        <h3>Pesan Baru</h3>
        <p><b>Nama:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Pesan:</b></p>
        <p>${message}</p>
      `,
    });

    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.error("Error sending contact message:", error);
    return { 
      success: false, 
      error: "Gagal mengirim pesan. Silakan coba lagi." 
    };
  }
}