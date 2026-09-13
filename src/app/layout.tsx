import type { Metadata } from "next";
import { generalSans, pinar } from "@/lib/fonts";
import { LanguageProvider } from "@/context/language-context";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { MainContent } from "@/components/layout/main-content";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mina Gharzi — Frontend Developer",
  description: "Frontend Developer specializing in React and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${generalSans.variable} ${pinar.variable} font-en antialiased`}>
        <LanguageProvider>
          <Sidebar />
          <MobileNav />
          <MainContent>{children}</MainContent>
        </LanguageProvider>
      </body>
    </html>
  );
}