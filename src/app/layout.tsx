import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteProvider } from "@/context/QuoteContext";
import { QuoteDrawer } from "@/components/QuoteDrawer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Future Eyes General Trading FZ-LLC",
  description: "The Complete Thermal Paper & Label Solution in Sharjah, UAE.",
  icons: {
    icon: "/logos/eye-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased font-sans bg-gray-50 text-fe-navy-dark`}
      >
        <QuoteProvider>
          <Header />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
          <WhatsAppFloatingButton />
          <QuoteDrawer />
        </QuoteProvider>
      </body>
    </html>
  );
}
