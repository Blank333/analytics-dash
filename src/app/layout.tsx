import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/dashboard/fonts";

export const metadata: Metadata = {
  title: "Analytics Dashboard",
  description: "Analytics Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
