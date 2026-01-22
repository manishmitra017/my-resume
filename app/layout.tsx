import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable} font-sans antialiased text-text-primary dark:text-gray-100 bg-cream-300 dark:bg-gray-900 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
