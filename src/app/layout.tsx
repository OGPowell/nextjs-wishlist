import { ScrollToTopButton } from '@/components/Buttons/ScrollToTopButton';
import Header from '@/components/Header';
import AuthProvider from '@/components/Providers/AuthProvider';
import { ThemeProvider } from '@/components/Providers/ThemeProvider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Wishlist',
  description: 'Christmas & Birthday List',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-slate-50 font-mono duration-200 dark:bg-[#0d1117]`}
      >
        <AuthProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <Header />
            <main>{children}</main>
            <ScrollToTopButton />
          </ThemeProvider>
        </AuthProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
