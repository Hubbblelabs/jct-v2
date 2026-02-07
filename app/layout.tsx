import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JCT Institutions | Career-Oriented Technical Education in Coimbatore",
  description: "JCT Institutions is a multi-college educational trust in Coimbatore offering career-oriented technical education. NAAC 'A' Grade accredited with 100% placement assistance.",
  keywords: "JCT Institutions, engineering college, polytechnic, arts and science, Coimbatore, NAAC A grade, placement, technical education",
  openGraph: {
    title: "JCT Institutions | Career-Oriented Technical Education",
    description: "A multi-college educational trust in Coimbatore offering career-oriented technical education with 100% placement assistance.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
