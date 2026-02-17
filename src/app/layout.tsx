// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Knovera - Daily Knowledge Game",
  description: "Your daily knowledge game. 5 questions, 3 minutes, new daily.",
  keywords: "quiz, knowledge, daily game, trivia, GK, knovera",
  metadataBase: new URL("https://playnovera.com"),
  openGraph: {
    title: "Knovera - Daily Knowledge Game",
    description: "Test your knowledge daily with 5 curated questions",
    type: "website",
    url: "https://playnovera.com",
    siteName: "Knovera",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knovera - Daily Knowledge Game",
    description: "Test your knowledge daily with 5 curated questions",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body>{children}</body>
    </html>
  );
}