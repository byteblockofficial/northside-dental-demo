import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://northside-dental.vercel.app"),
  title: { default: "Northside Dental Practice | Dentist in Didsbury", template: "%s | Northside Dental" },
  description: "NHS and private dentist in Didsbury, Manchester. GDC registered, CQC rated Good. Book an appointment on 0161 000 0001.",
  openGraph: { siteName: "Northside Dental Practice", locale: "en_GB", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
