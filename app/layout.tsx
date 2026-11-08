import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glowing MacBook Pro logo too bright in the dark — LidLight",
  description:
    "Other apps only dim the glowing Apple logo. LidLight turns it completely off when the room is dark, and can follow the music. Pay once.",
  openGraph: {
    title: "The glowing MacBook Pro logo, off when the room is dark",
    description:
      "Auto-brightness never goes fully dark. LidLight does, at 15 lux. Music is included.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
