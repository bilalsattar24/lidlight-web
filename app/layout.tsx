import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turn off the glowing MacBook Pro logo — LidLight",
  description:
    "LidLight turns the glowing Apple logo on the new MacBook Pro off, follows the music, or goes dark when the room does. Pay once.",
  openGraph: {
    title: "LidLight — control the glowing MacBook Pro logo",
    description:
      "Turn it off, follow the music, or switch it off completely in a dark room.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
