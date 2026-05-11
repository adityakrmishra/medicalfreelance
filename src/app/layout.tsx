import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://murarimedico.netlify.app/"),
  title: "Murari Medico — Premium Healthcare & Authentic Pharmacy | Dr. A.K. Ghosh",
  description:
    "Murari Medico offers trusted medical consultations by Dr. A.K. Ghosh (M.D., FIC, FIEC) and 24/7 authentic pharmacy services in Gopalganj, Bihar. Cardiology, General Medicine & more.",
  keywords: [
    "Murari Medico",
    "Dr. A.K. Ghosh",
    "clinic Gopalganj",
    "pharmacy Kuchaikot",
    "cardiology Bihar",
    "echocardiography",
    "authentic pharmacy",
  ],
  icons: {
    icon: "/images/Morari Medico logo.png",
    apple: "/images/Morari Medico logo.png",
  },
  openGraph: {
    title: "Murari Medico — Premium Healthcare & Authentic Pharmacy",
    description:
      "Trusted medical consultations by Dr. A.K. Ghosh and 24/7 authentic pharmacy services in Gopalganj, Bihar.",
    url: "https://murarimedico.netlify.app/",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
