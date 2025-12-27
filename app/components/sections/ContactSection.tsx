"use client";

import Image from "next/image";
import { useRef } from "react";
import { sendContactMessage } from "@/app/actions/contact";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);

  async function handleAction(formData: FormData) {
    const result = await sendContactMessage(formData);

    if (result.success) {
      alert("Pesan berhasil dikirim!");
      formRef.current?.reset();
    } else {
      alert(result.error);
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#FFF5F5] px-10 pt-32 pb-20 flex flex-col items-center"
    >
      
      <div className="text-center mb-16">
        <h2 className="text-6xl md:text-8xl text-black tracking-tight contact-title">
          <span className="contact-a">C</span>ontact{" "}
          <span className="contact-m">M</span>e
        </h2>
      </div>

      <div className="relative w-[350px] md:w-[550px]">
        <Image
          src="/contact.svg"
          alt="Contact Letter"
          width={800}
          height={800}
          className="w-full h-auto"
        />

        <Image 
          src="/flowers.svg"
          alt="Flowers Sticker"
          width={100}
          height={100}
          className="flowers-sticker"
        />

        <form
          ref={formRef}
          action={handleAction}
          className="contact-form-container"
        >
          <div>
            <label className="contact-label">Name</label>
            <input name="name" type="text" className="contact-input" required />
          </div>

          <div>
            <label className="contact-label">Email</label>
            <input
              name="email"
              type="email"
              className="contact-input"
              required
            />
          </div>

          <div>
            <label className="contact-label">Message</label>
            <textarea
              name="message"
              rows={2}
              className="contact-input resize-none"
              required
            />
          </div>

          <button type="submit" className="contact-send-button">
            Send 
          </button>
        </form>
      </div>
    </section>
  );
}
