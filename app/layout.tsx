import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Nuralievna — Стоматология в Актобе",
  description:
    "Премиальная стоматологическая клиника Dr. Nuralievna в Актобе. Ортодонтия, имплантация, протезирование, хирургия. Запишитесь на бесплатную консультацию.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased bg-[#F5EFE6] text-[#2B2420]">
        {children}
      </body>
    </html>
  );
}
