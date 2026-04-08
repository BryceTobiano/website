import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Bryce Tobiano | Computer Engineer",
  description:
    "Personal website and portfolio for Bryce Tobiano, a tinkerer and engineer focused on semiconductors, web development, and thoughtful digital products.",
  openGraph: {
    title: "Bryce Tobiano | Computer Engineer",
    description:
      "Portfolio and personal website for Bryce Tobiano, featuring selected work and a design system-inspired visual language.",
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryce Tobiano | Computer Engineer",
    description:
      "Personal website and portfolio for Bryce Tobiano.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${workSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
