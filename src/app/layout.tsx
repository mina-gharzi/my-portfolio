import type { Metadata } from "next";
import { cookies } from "next/headers";
import { generalSans, pinar } from "@/lib/fonts";
import { LanguageProvider } from "@/context/language-context";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { MainContent } from "@/components/layout/main-content";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mina Gharzi — Frontend Developer",
  description: "Frontend Developer specializing in React and TypeScript.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("language")?.value;
  const initialLanguage: "en" | "fa" = langCookie === "fa" ? "fa" : "en";
  const dir = initialLanguage === "fa" ? "rtl" : "ltr";
  const fontClass = initialLanguage === "fa" ? "font-fa" : "font-en";

  return (
    <html lang={initialLanguage} dir={dir} suppressHydrationWarning>
      <body
        className={`${generalSans.variable} ${pinar.variable} ${fontClass} antialiased`}
        suppressHydrationWarning
      >
        <LanguageProvider initialLanguage={initialLanguage}>
          <Sidebar />
          <MobileNav />
          <MainContent>
            {children}
            <Footer />
          </MainContent>
        </LanguageProvider>
      </body>
    </html>
  );
}