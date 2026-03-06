import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./../globals.css";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    metadataBase: new URL('https://huvyn.com'), // Replace with actual production URL
    title: t('title'),
    description: t('heroSubtitle'),
    generator: 'Next.js',
    applicationName: 'Huvyn Global Logistics',
    referrer: 'origin-when-cross-origin',
    keywords: ['logistics', 'global trade', 'shipping', 'tracking', 'supply chain', 'Huvyn'],
    authors: [{ name: 'Huvyn System' }],
    creator: 'Huvyn Tech',
    publisher: 'Huvyn Inc.',
    openGraph: {
      title: t('title'),
      description: t('heroSubtitle'),
      url: `https://huvyn.com/${locale}`,
      siteName: 'Huvyn',
      locale: locale,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: '/',
      languages: {
        'es': '/es',
        'en': '/en',
        'pt': '/pt',
        'fr': '/fr',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const isValidLocale = routing.locales.includes(locale as (typeof routing.locales)[number]);
  if (!isValidLocale) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var cookie = document.cookie.split('; ').find(row => row.startsWith('huvyn_sidebar_final='));
                  var isCollapsed = cookie ? cookie.split('=')[1] === 'true' : false;
                  
                  // 1. Set DOM attribute for CSS selectors
                  document.documentElement.setAttribute('data-sidebar-collapsed', isCollapsed ? 'true' : 'false');
                  
                  // 2. Directly inject CSS variable to override any cached styles immediately
                  var style = document.createElement('style');
                  style.innerHTML = ':root { --sidebar-width: ' + (isCollapsed ? '80px' : '280px') + ' !important; }';
                  document.head.appendChild(style);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-background text-foreground antialiased flex flex-col min-h-screen`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
