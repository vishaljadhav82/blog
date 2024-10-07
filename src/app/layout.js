import localFont from "next/font/local";
import "./globals.css";


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
    description: "आपला ब्लॉग, आपला वारसा",
    images: ["./digital_katta_1.png"],
    favicon: "./icon.png", // Replace with the URL of your favicon

  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
