import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Chindogu Labs",
  description:
    "A company dedicated to the pursuit of meaningful utility. We build things people actually use. Eventually.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${geist.variable} ${jetbrainsMono.variable} antialiased bg-background font-body-md text-on-surface min-h-screen selection:bg-secondary selection:text-on-secondary`}
      >
        {/* Full-bleed wordmark. Drawn as SVG text so `textLength` pins it to
            exactly the viewport width in any browser — a vw-based font-size
            would drift with whichever Helvetica fallback the OS supplies. */}
        <header className="w-full pt-margin-mobile lg:pt-margin-desktop text-primary">
          <svg
            viewBox="0 0 1060 92"
            className="block w-full"
            role="img"
            aria-label="Chindogu Labs"
          >
            <text
              x="0"
              y="87"
              textLength="1060"
              lengthAdjust="spacingAndGlyphs"
              fontFamily="Helvetica, Arial, sans-serif"
              fontWeight="700"
              fontSize="120"
              fill="currentColor"
            >
              CHINDOGU LABS
            </text>
          </svg>
        </header>

        {children}

        <footer className="w-full border-t border-outline-variant py-margin-desktop bg-surface-container-lowest mt-margin-desktop">
          <div className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop">
            <div className="font-code-sm text-code-sm text-on-surface opacity-60">
              © 2026 CHINDOGU LABS. ALL RIGHTS RESERVED.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
