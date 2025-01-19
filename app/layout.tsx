import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Notorious | Conor McGregor Fan Page',
  description:
    'Explore the legacy of Conor McGregor, The Notorious MMA icon. Countdown to his return and follow his journey inside and outside the Octagon.',
  keywords: [
    'Conor McGregor',
    'The Notorious',
    'MMA',
    'UFC',
    'Fight',
    'Countdown',
    'Fan Page',
  ],
  openGraph: {
    title: 'The Notorious | Conor McGregor Fan Page',
    description:
      'Explore the legacy of Conor McGregor, The Notorious MMA icon. Countdown to his return and follow his journey inside and outside the Octagon.',
    url: 'https://yourwebsite.com',
    siteName: 'The Notorious',
    images: [
      {
        url: '/conor.jpg',
        width: 1200,
        height: 630,
        alt: 'Conor McGregor posing as The Notorious',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Notorious | Conor McGregor Fan Page',
    description:
      'Explore the legacy of Conor McGregor, The Notorious MMA icon. Countdown to his return and follow his journey inside and outside the Octagon.',
    images: ['/conor.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
