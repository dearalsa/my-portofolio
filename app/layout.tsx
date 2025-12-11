import "./globals.css";
import localFont from 'next/font/local'
import React from 'react';
import Navbar from './components/navbar';

const poppins = localFont({
  src: './fonts/Poppins-Regular.ttf',
  variable: '--font-poppins',
});

const greatVibes = localFont({
  src: './fonts/GreatVibes-Regular.ttf',
  variable: '--font-greatvibes',
});

const trykker = localFont({
  src: './fonts/Trykker-Regular.ttf',
  variable: '--font-trykker',
});

const TenorSans = localFont({
  src: './fonts/TenorSans-Regular.ttf',
  variable: '--font-tenorsans',
});

const Cooper = localFont({
  src: './fonts/cooper.ttf',
  variable: '--font-cooper',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${greatVibes.variable} ${trykker.variable} ${TenorSans.variable}`}>
        <Navbar /> 
        {children}
      </body>
    </html >
  );
}