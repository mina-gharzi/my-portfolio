import localFont from "next/font/local";

export const generalSans = localFont({
  src: [
    {
      path: "../fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-en",
  display: "swap",
});

export const pinar = localFont({
  src: [
    {
      path: "../fonts/PINAR-REGULAR.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/PINAR-BOLD.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fa",
  display: "swap",
});
