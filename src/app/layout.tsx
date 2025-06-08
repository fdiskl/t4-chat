import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import HomeSidebar from "@/components/home-sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "T4 Chat",
  description: "Clone of T3 Chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.className} antialiased`}>
        <div className="flex h-screen">
          <HomeSidebar />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
