import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Voluwork - Show Your Impact. Get Real Support.',
  description: 'The video-based social impact platform where volunteers document community work, gain visibility, and receive direct donations.',
  
  icons: {
    icon: '/volu.ico',           // Main favicon
    shortcut: '/volu.ico',
    apple: '/apple-touch-icon.png', // For iOS home screen
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/volu.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },

  openGraph: {
    title: 'Voluwork - Where Community Impact Meets Global Support',
    description: 'Document your voluntary work, build supporters, and earn donations through impactful videos.',
    images: [{ url: '/volu.png' }],
    siteName: 'Voluwork',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voluwork - Show Your Impact. Get Real Support.',
    images: ['/volu.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-white">
        {children}
      </body>
    </html>
  );
}