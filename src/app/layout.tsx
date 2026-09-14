import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var lang = localStorage.getItem("language");
                  if (lang === "fa") {
                    document.documentElement.lang = "fa";
                    document.documentElement.dir = "rtl";
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${generalSans.variable} ${pinar.variable} font-en antialiased`}
        suppressHydrationWarning
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var lang = localStorage.getItem("language");
                  if (lang === "fa") {
                    document.body.classList.remove("font-en");
                    document.body.classList.add("font-fa");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <LanguageProvider>
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