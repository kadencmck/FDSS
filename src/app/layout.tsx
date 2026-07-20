import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FDSS LLC | Feedstock Distribution & Supply Solutions",
  description:
    "Dependable commodities transfer and feedstock distribution for dairy and beef cattle operations in the Boise, Idaho area. Cottonseed, canola, soybean husk, and more. From Field to Feed.",
  keywords:
    "feedstock distribution, commodities transfer, dairy cattle feed, beef cattle feed, cottonseed, canola, soybean, Boise Idaho, feed supply",
  openGraph: {
    title: "FDSS LLC | Feedstock Distribution & Supply Solutions",
    description:
      "Dependable commodities transfer and feedstock distribution for dairy and beef cattle operations in the Boise, Idaho area. From Field to Feed.",
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
      "Dependable commodities transfer and feedstock distribution for dairy and beef cattle. Boise, Idaho.",
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
