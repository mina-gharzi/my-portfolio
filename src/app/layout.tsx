import type { Metadata } from "next";
import { cookies } from "next/headers";
import { generalSans, pinar } from "@/lib/fonts";
import { LanguageProvider } from "@/context/language-context";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { MainContent } from "@/components/layout/main-content";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mina Gharzi — Frontend Developer",
  description:
    "Frontend Developer specializing in React and TypeScript. Portfolio of full-stack and frontend projects including a job board, booking platform, and admin dashboard.",
  keywords: [
    "Mina Gharzi",
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Next.js Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Mina Gharzi" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mina Gharzi — Frontend Developer",
    description:
      "Frontend Developer specializing in React and TypeScript. Portfolio of full-stack and frontend projects.",
    url: siteUrl,
    siteName: "Mina Gharzi Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mina Gharzi — Frontend Developer",
    description:
      "Frontend Developer specializing in React and TypeScript. Portfolio of full-stack and frontend projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
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