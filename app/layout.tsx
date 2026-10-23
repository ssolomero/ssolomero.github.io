import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4, Lato } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-sourceserif4",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharence Solomero",
  description: "Portfolio of Sharence Solomero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif4.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col px-4 sm:px-0">
        {children}
      </body>
    </html>
  );
}
