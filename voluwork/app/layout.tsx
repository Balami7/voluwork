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
  description: 'The video-based social impact platform where volunteers document community work, gain visibility, and receive direct donations from supporters worldwide.',
  keywords: [
    'Voluwork', 
    'Social Impact', 
    'Volunteer Platform', 
    'Community Work', 
    'Crowdfunding', 
    'Impact Videos', 
    'Youth Development', 
    'Nigeria Volunteers',
    'Donate to Volunteers'
  ],
  authors: [{ name: 'Voluwork' }],
  openGraph: {
    title: 'Voluwork - Where Community Impact Meets Global Support',
    description: 'Document your voluntary work, build supporters, and earn donations through impactful videos.',
    images: [{ url: '/og-image.jpg' }],
    siteName: 'Voluwork',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voluwork - Show Your Impact. Get Real Support.',
    description: 'Video platform for volunteers to showcase community work and receive support.',
    images: ['/og-image.jpg'],
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