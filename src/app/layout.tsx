import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './provider';
const inter = Inter({ subsets: ['latin'] });
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from '@/components/ui/toaster';
import { Header } from './header';

export const metadata: Metadata = {
  title: 'Devs',
  description: 'Find your next developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Toaster />
          <NextTopLoader />
          <Header />
          <div className="container mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
