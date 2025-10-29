import React from 'react';
import Head from 'next/head';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Header } from './Header';
import { Footer } from './Footer';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export function MainLayout({ children, title = 'Autellia - AI & Automation Solutions', description = 'Transforming businesses with cutting-edge AI and automation solutions.' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://autellia.com/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://autellia.com/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/og-image.jpg" />
      </Head>
      
      <div className={cn(
        'min-h-screen bg-background font-sans antialiased flex flex-col',
        inter.variable,
        spaceGrotesk.variable
      )}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
