import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Manish Mitra | AI Leadership & Senior Engineering Manager",
  description: "Portfolio of Manish Mitra - AI Leadership, Senior Engineering Manager specializing in Gen AI, LLM, and Quality Engineering at Commonwealth Bank",
  keywords: ["Manish Mitra", "AI Engineer", "Gen AI", "LLM", "Quality Engineering", "Engineering Manager", "Commonwealth Bank"],
  authors: [{ name: "Manish Mitra" }],
  openGraph: {
    title: "Manish Mitra | AI Leadership & Senior Engineering Manager",
    description: "Portfolio showcasing expertise in Gen AI, LLM Operations, and Quality Engineering",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jakarta.variable} font-sans antialiased text-gray-900 dark:text-gray-100 bg-gray-900`}>
        <div className="bg-grain" />
        {children}
      </body>
    </html>
  );
}
