import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Web Next.js Complet',
  description: 'Template complet de landing page avec Next.js et Tailwind CSS'
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
