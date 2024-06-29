import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Top from "@/components/Top";
import { LoadingProvider } from "@/context/loadingContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className}  `}>
        <LoadingProvider>
          <div className="container mx-auto max-w-md p-4  bg-custom-bg bg-no-repeat bg-top">
            <Top />
            {children}
            <Nav />
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}
