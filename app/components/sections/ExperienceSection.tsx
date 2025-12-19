'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certificates = [
  {
    title: '[Coding Camp 2025] Certificate - FS022D5X0036',
    image: '/certificate/CertificateCodingCamp2025.jpg',
    pdfFile: '/certificate/CertificateCodingCamp2025.pdf',
  },
  {
    title: 'Dasar Pemrograman',
    image: '/certificate/DasarPemrograman.jpg',
    pdfFile: '/certificate/DasarPemrograman.pdf',
  },
  {
    title: 'Pemrograman Javascript',
    image: '/certificate/PemrogramanJavascript.jpg',
    pdfFile: '/certificate/PemrogramanJavascript.pdf',
  },
  {
    title: 'Front-end Pemula',
    image: '/certificate/FrontEndPemula.jpg',
    pdfFile: '/certificate/FrontEndPemula.pdf',
  },
  {
    title: 'Fundamental Front-end',
    image: '/certificate/FundamentalFrontEnd.jpg',
    pdfFile: '/certificate/FundamentalFrontEnd.pdf',
  },
  {
    title: 'Git dan GitHub',
    image: '/certificate/GitGithub.jpg',
    pdfFile: '/certificate/GitGithub.pdf',
  },
  {
    title: 'Pemrograman Logic (101)',
    image: '/certificate/PemrogramanLogic(101).jpg',
    pdfFile: '/certificate/PemrogramanLogic(101).pdf',
  },
  {
    title: 'Pemrograman Web',
    image: '/certificate/PemrogramanWeb.jpg',
    pdfFile: '/certificate/PemrogramanWeb.pdf',
  },
  {
    title: 'Belajar Penggunaan Generative AI',
    image: '/certificate/BelajarPenggunaanGenerativeAI.jpg',
    pdfFile: '/certificate/BelajarPenggunaanGenerativeAI.pdf',
  },
  {
    title: 'Belajar Dasar Structured Query Language (SQL)',
    image: '/certificate/BelajarDasarStructuredQueryLanguage(SQL).jpg',
    pdfFile: '/certificate/BelajarDasarStructuredQueryLanguage(SQL).pdf',
  },
  {
    title: 'Belajar Dasar Data Science',
    image: '/certificate/BelajarDasarDataScience.jpg',
    pdfFile: '/certificate/BelajarDasarDataScience.pdf',
  },
  {
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    image: '/certificate/BelajarDasarClouddanGenAIdiAWS.jpg',
    pdfFile: '/certificate/BelajarDasarClouddanGenAIdiAWS.pdf',
  },
  {
    title: 'Belajar Dasar AI',
    image: '/certificate/BelajarDasarAI.jpg',
    pdfFile: '/certificate/BelajarDasarAI.pdf',
  },
  {
    title: 'Back-end Pemula',
    image: '/certificate/BackendPemula.jpg',
    pdfFile: '/certificate/BackendPemula.pdf',
  },
  {
    title: 'AI Praktis untuk Produktivitas',
    image: '/certificate/AIPraktisUntukProduktivitas.jpg',
    pdfFile: '/certificate/AIPraktisUntukProduktivitas.pdf',
  },
  {
    title: 'Financial Literacy',
    image: '/certificate/FinancialLiteracy.jpg',
    pdfFile: '/certificate/FinancialLiteracy.pdf',
  },
  {
    title: 'Google',
    image: '/certificate/Google.jpg',
    pdfFile: '/certificate/Google.pdf',
  },
  {
    title: 'English for Business',
    image: '/certificate/EnglishForBusiness.jpg',
    pdfFile: '/certificate/EnglishForBusiness.pdf',
  },
  {
    title: 'National English Competition Batch 1',
    image: '/certificate/NationalEnglishCompetitionBatch1.jpg',
    pdfFile: '/certificate/NationalEnglishCompetitionBatch1.pdf',
  },
  {
    title: 'Lomba Jagoan Hosting',
    image: '/certificate/JagoanHosting.jpg',
    pdfFile: '/certificate/JagoanHosting.pdf',
  },
  {
    title: 'Pelatihan Teknologi Kecerdasan Buatan',
    image: '/certificate/PelatihanTeknologiKecerdasanBuatan.jpg',
    pdfFile: '/certificate/PelatihanTeknologiKecerdasanBuatan.pdf',
  },
  {
    title: 'Top 10 Duta GenRe Terbaik Kabupaten Bogor 2025',
    image: '/certificate/DutaGenRe2025.png',
    pdfFile: '/certificate/DutaGenRe2025.pdf',
  },
];

export default function ExperienceSection() {
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#FFF5F5] px-10 pt-32 pb-20"
    >
      <h2
        style={{ fontFamily: 'var(--font-tenorsans)' }}
        className="text-center text-2xl md:text-3xl mb-16 tracking-wide text-black font-semibold"
      >
        Achievements & Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
        {certificates.map((item, index) => {
          const controls = useAnimation();
          const [ref, inView] = useInView({ threshold: 0.3 });

          useEffect(() => {
            if (inView) {
              controls.start({ opacity: 1, y: 0 });
            } else {
              controls.start({ opacity: 0, y: 40 });
            }
          }, [inView, controls]);

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col"
            >
              <div className="relative border-2 border-black rounded-lg p-4 bg-transparent overflow-hidden w-full">
                {!loaded[index] && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />
                    <p className="text-sm text-gray-600">Loading...</p>
                  </div>
                )}

                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                    onLoadingComplete={() =>
                      setLoaded(prev => ({ ...prev, [index]: true }))
                    }
                  />
                </div>
              </div>

              {/* bagian yang mengarahkan ke pdf */}
              <div className="mt-4 w-full flex justify-end">
                <a
                  href={item.pdfFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm tracking-wide text-black hover:underline"
                >
                  SHOW CERTIFICATE
                  <ArrowUpRight
                    size={16}
                    className="translate-y-0.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
