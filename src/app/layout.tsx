import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import ProgressBarWrapper from "@/components/ProgressBarWrapper";
import Hero from "@/components/Hero";
import CategoriesNav from "@/components/CategoriesNav";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], weight: ["400", "800"] });
export const metadata: Metadata = {
  title: "Devrectory",
  description: "Your toolkit for web designers & developers.",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased min-h-screen scroll-smooth`}
      >
        <ProgressBarWrapper>
          <ThemeProvider>
            <SessionProvider session={session}>
                <div className="max-w-[1024px] w-full mx-auto px-4 py-2">
                  <Navbar />
                  <Hero />
                  <CategoriesNav />
                  {children}
                </div>
              <Toaster/>
            </SessionProvider>
          </ThemeProvider>
        </ProgressBarWrapper>
      </body>
    </html>
  );
}
