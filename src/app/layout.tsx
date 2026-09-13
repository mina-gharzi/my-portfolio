import type { Metadata } from "next";
import { generalSans, pinar } from "@/lib/fonts";
import { LanguageProvider } from "@/context/language-context";
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
    <LanguageProvider>{children}</LanguageProvider>
  </body>
</html>
  );
}
