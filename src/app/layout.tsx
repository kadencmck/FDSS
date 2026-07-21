import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FDSS LLC | Feedstock Distribution & Supply Solutions",
  description:
    "Commodities transload station for dairy and beef cattle feed. Cottonseed, canola, soybean hulls, soybean meal, and more. Boise, Idaho. Where the rail line meets the feed bunk.",
  keywords:
    "feedstock distribution, commodities transload, dairy cattle feed, beef cattle feed, cottonseed, canola, soybean hulls, soybean meal, Boise Idaho, feed supply",
  openGraph: {
    title: "FDSS LLC | Feedstock Distribution & Supply Solutions",
    description:
      "Commodities transload station for dairy and beef cattle feed. Boise, Idaho. Where the rail line meets the feed bunk.",
    url: "https://fdssllc.com",
    siteName: "FDSS LLC",
    images: [
      {
        url: "https://fdssllc.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "FDSS LLC — From Field to Feed",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FDSS LLC | Feedstock Distribution & Supply Solutions",
    description:
      "Commodities transload station for dairy and beef cattle feed. Boise, Idaho.",
    images: ["https://fdssllc.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col" style={{ fontFamily: "'Arial', 'Helvetica Neue', Helvetica, sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
