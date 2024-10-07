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
    default: "Digital Katta",
    template: "%s"
  },
  description: "आपला ब्लॉग, आपला वारसा",
  openGraph: {
    title:  "Blog",
    description: "आपला ब्लॉग, आपला वारसा",
    images: ["./image.png"],
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
