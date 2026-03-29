import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Maryam Tariq — Software Engineer",
  description:
    "Software engineer with 2+ years of experience in Python backends, MERN stack apps, secure APIs, and practical AI features.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Maryam Tariq — Software Engineer",
    description:
      "Python, FastAPI, MERN, and full stack delivery. APIs, dashboards, and AI assisted features.",
    url: "https://example.com",
    siteName: "Maryam Tariq",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}

