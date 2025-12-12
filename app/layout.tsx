import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "William Haraldsson - Full Stack Developer",
  description: "Portfolio of William Haraldsson - Full Stack Developer specializing in modern web technologies",
  keywords: ["developer", "portfolio", "web development", "full stack", "William Haraldsson"],
  authors: [{ name: "William Haraldsson" }],
  openGraph: {
    title: "William Haraldsson - Full Stack Developer",
    description: "Portfolio of William Haraldsson - Full Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
