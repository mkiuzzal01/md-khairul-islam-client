import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "MD Khairul Islam",
  description: "Portfolio website of MD Khairul Islam.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetBrains.className} bg-gray-100 text-gray-900`}>
        <header>
          <Navbar />
        </header>
        <main className="min-h-[calc(100vh-180px)]">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
