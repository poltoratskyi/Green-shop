import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "../components/styles/globals.scss";

import { Header } from "../components/shared/header";
import { Footer } from "@/components/shared/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=1250" />
      <body className={montserrat.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
