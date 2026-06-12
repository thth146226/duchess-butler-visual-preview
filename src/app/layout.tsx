import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Duchess & Butler — Visual Prototype v0.2",
  description:
    "Visual prototype v0.2 · mock content only · no prices · no live availability · no 3D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="h-full antialiased scroll-smooth">
      <body className="min-h-full bg-linen text-ink font-sans">
        <div className="site-chrome">
          <div className="proto text-center" role="note">
            Visual prototype v0.2 ·{" "}
            <b className="text-gold font-500">mock content only</b> · no prices ·
            no live availability · no 3D
          </div>
          <Header />
        </div>

        <main className="site-main">{children}</main>

        <Footer />

        <div
          id="toast"
          role="status"
          aria-live="polite"
          className="fixed left-1/2 bottom-6.5 -translate-x-1/2 translate-y-2.5 bg-ink text-linen px-6.5 py-3.25 text-xs uppercase letter-spacing-14 opacity-0 pointer-events-none transition-all duration-400 z-90"
        />
      </body>
    </html>
  );
}
