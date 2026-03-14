import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Niraj Nillawar | MERN Stack Developer",
  description:
    "Explore the portfolio of Niraj Nillawar, a Professional MERN Stack Developer specializing in React.js, Next.js, Node.js, and MongoDB. Built for performance and user experience.",
  keywords: [
    "Niraj Nillawar",
    "Full Stack Developer",
    "Next.js Portfolio",
    "MERN Stack Developer",
    "Software Engineer",
    "React Developer",
  ],
  authors: [{ name: "Niraj Nillawar" }],
  openGraph: {
    title: "Niraj Nillawar | Personal Portfolio",
    description:
      "MERN Stack Developer — Building the future of the web.",
    url: "https://nirajnillawar-portfolio.vercel.app",
    siteName: "Niraj Nillawar Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Niraj Nillawar Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niraj Nillawar | MERN Stack Developer",
    description: "Building modern web applications.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <ToastContainer position="bottom-right" theme="dark" />
        <Footer />
      </body>
    </html>
  );
}
