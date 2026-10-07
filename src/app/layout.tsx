import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PiBi Tech | Enterprise Data Services for AI",
  description:
    "PiBi Tech prepares, labels, and validates the data behind AI. Enterprise Data Engineering, Data for AI, and Data Science & Intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} antialiased bg-[#f8fafc] text-slate-700 min-h-screen relative`}
      >
        {/* Ambient Soft Bluish Glow Background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full bg-radial from-cyan-400/20 via-blue-500/10 to-transparent blur-[120px]" />
          <div className="absolute top-1/3 -left-48 w-[600px] h-[600px] rounded-full bg-radial from-blue-500/15 via-cyan-400/10 to-transparent blur-[130px]" />
          <div className="absolute -bottom-32 right-1/4 w-[550px] h-[550px] rounded-full bg-radial from-blue-400/10 to-transparent blur-[140px]" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
