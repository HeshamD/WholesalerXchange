import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/header/Nav";
import Footer from "./components/footer/Footer";
import AuthProvider from "./api/auth/Provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Nav />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Wholesaler Xchange",
  description:
    "Wholesaler Xchange to connect with wholesallers all over the world",
};
