import localFont from "next/font/local";
import Script from "next/script";
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
  title: "App scrip Best",
  description: "Hi, I'm Rajesh Sarakr, a passionate frontend developer and content creator. I specialize in web development technologies like React.js, Next.js, and CSS, and I aim to help others learn coding through my YouTube channel. Currently, I'm pursuing a Bachelor of Computer Applications (BCA) and focusing on mastering the MERN stack. My goal is to become a successful entrepreneur in the tech space. When I’m not coding, you can find me exploring digital marketing or blogging about the latest tech trends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script src="https://unpkg.com/@phosphor-icons/web"></Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
