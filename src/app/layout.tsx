import type { Metadata } from "next";
import { Playfair_Display, Open_Sans, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/components/Navbar";
import Footer from "@/layout/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Configure Playfair Display for headings
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

// Configure Open Sans for body text
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deco Decoster | Professional House Painting Services",
  description:
    "Transform your space with Deco Decoster's expert interior & exterior painting services. Licensed, insured, and trusted by homeowners and businesses. Get your free quote today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(playfairDisplay.variable, openSans.variable, "font-sans", geist.variable)}>
      <body className={`font-body ${openSans.variable}`}>
        {/* Layout wrapper for navbar and footer */}
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
