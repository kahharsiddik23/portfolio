import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kahhar Siddik | Bug Bounty Hunter & Cybersecurity Researcher",
  description: "Portfolio of Kahhar Siddik, a Bug Bounty Hunter and Cybersecurity Researcher focused on web application security, vulnerability research, reconnaissance, and security automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased min-h-screen bg-[#0a0a0a] text-white selection:bg-neon-green selection:text-black`}
      >
        <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none mix-blend-screen z-[-1]" />
        {children}
      </body>
    </html>
  );
}
