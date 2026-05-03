import type { Metadata } from "next";
// import { Geist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "دکتر سعید سلطانی آذر",
  description: "وکیل پایه یک دادگستری",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`  h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans" dir="rtl">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        </body>
    </html>
  );
}
