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
    default: "Dharashiv Diaries",
    template: "%s"
  },
  description: "Generated by create next app",
  openGraph: {
    title:  "Blog",
    description: "आपला ब्लॉग, आपला वारसा",
    images: ["https://firebasestorage.googleapis.com/v0/b/blog-3551c.appspot.com/o/image.png?alt=media&token=64620259-2181-4137-a906-cee97985ba22"],
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
