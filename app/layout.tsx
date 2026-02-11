import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import FloatingActions from "./components/FloatingActions";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

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
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="antialiased font-body overflow-x-hidden">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
