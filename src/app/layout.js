import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";

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

export const metadata = {
  title: {
    default: "Digital कट्टा",
    template: "%s"
  },
  description: "Unlocking Knowledge, One Post at a Time",
  openGraph: {
    title:  "Blog",
    description: "Unlocking Knowledge, One Post at a Time",
    images: ["https://firebasestorage.googleapis.com/v0/b/blog-3551c.appspot.com/o/digital_katta_1.png?alt=media&token=72ceba7c-8fb0-4269-9a11-319d5a711d55"],
    favicon: "https://firebasestorage.googleapis.com/v0/b/blog-3551c.appspot.com/o/icon.png?alt=media&token=e554f47e-d52e-460d-8328-42c028d5f3ce", // Replace with the URL of your favicon

  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-adsense-account" content="ca-pub-6087364343233964" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
     
        {children}
        <Analytics />
       
      </body>
    </html>
  );
}
