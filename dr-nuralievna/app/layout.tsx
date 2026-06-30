import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Nuralievna — Стоматология в Актобе",
  description:
    "Современная стоматология для взрослых в Актобе: ортодонтия, ортопедия, хирургия, имплантация. Опыт, технологии и забота о каждом пациенте.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
