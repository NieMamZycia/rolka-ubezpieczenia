import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rolka Ubezpieczenia - Agencja ubezpieczeniowa Nowy Sącz",
  description:
    "Rolka Ubezpieczenia - kompleksowe ubezpieczenia komunikacyjne, majątkowe, na życie i zdrowotne w Nowym Sączu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="min-h-screen bg-background text-gray-900">
        {children}
      </body>
    </html>
  );
}

