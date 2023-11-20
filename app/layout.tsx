import { Footer } from "@/Components/Footer";
import { NavBar } from "@/Components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AMBS",
  description: "Page d'acceuil de site AMBS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-whiteAmbsi`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
