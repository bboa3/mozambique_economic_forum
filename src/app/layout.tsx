import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

// Montserrat: non-variable, load all weights used by the source CSS
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

// Open Sans: variable font, no weight needed
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Mozambique Economic Forum",
  description:
    "Mozambique Economic Forum é o ponto de convergência da economia real,<br>e palco da independência económica de Moçambique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${montserrat.variable} ${openSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
