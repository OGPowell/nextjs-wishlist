import AuthProvider from '@/components/AuthContext'
import Header from '@/components/Header/Header'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'
import { ThemeProvider } from '@/components/ThemeProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Wishlist',
  description: 'Christmas & Birthday List',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] duration-200`}
      >
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main>{children}</main>
            <ScrollToTopButton />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}