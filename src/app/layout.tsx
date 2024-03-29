import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "@/contexts/authContext";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VoxTales",
  description: "Voice Operated Storytelling Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto">
          <Toaster position="bottom-center" />
          <AuthProvider>
            <Navbar />
            <EdgeStoreProvider>{children}</EdgeStoreProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
