import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mon site Next.js',
  description: 'Site vitrine créé avec Next.js et Tailwind CSS'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
