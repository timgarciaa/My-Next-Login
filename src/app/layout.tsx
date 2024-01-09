import type { Metadata } from 'next';
import { Inter, Jura } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const jura = Jura({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'My Next Login',
  description: 'My Next Login Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jura.className}>
        {children}
      </body>
    </html>
  );
}
