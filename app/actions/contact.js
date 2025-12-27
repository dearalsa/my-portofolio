"use server"

import { prisma } from "@/lib/prisma" 
import { revalidatePath } from "next/cache"

export async function sendContactMessage(formData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  if (!name || !email || !message) {
    return { error: "Semua field harus diisi!" }
  }

  try {
    await prisma.contactMessage.create({
      data: {
        name: name,
        email: email,
        message: message,
      },
    })
    
    revalidatePath("/contact") 
    return { success: true }
  } catch (error) {
    console.error("Database Error:", error)
    return { error: "Gagal mengirim pesan." }
  }
}