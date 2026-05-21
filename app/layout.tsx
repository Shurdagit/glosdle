import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GLOSDLE",
  description: "Gissa det hemliga svenska ordet på 5 bokstäver. Sex försök. Ett nytt ord varje dag.",
  keywords: ["wordle", "svenska", "ordspel", "gissningsspel"],
  openGraph: {
    title: "ORDLA – Svenska Wordle",
    description: "Gissa det hemliga svenska ordet på 5 bokstäver!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#07091a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Bakgrundsscen */}
        <div className="bg-scene" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}