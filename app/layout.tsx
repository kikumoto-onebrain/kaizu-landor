import './globals.css';
import type { Metadata } from 'next';
import { Outfit, Roboto } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const SITE_URL = 'https://kaizu-landor.vercel.app/';
const OG_IMAGE = `${SITE_URL}/thumb-kaizu.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: 'Kaizu | Smart lockers e plataforma para gestão de entregas',
  description:
    'A Kaizu combina smart lockers e plataforma digital para automatizar entregas, retiradas e gestão logística com segurança, rastreabilidade e controle em tempo real.',

  keywords: [
    'Kaizu',
    'smart locker',
    'smart lockers',
    'armário inteligente',
    'armários inteligentes',
    'lockers inteligentes',
    'locker para encomendas',
    'gestão de entregas',
    'automação de entregas',
    'retirada por QR Code',
    'controle de encomendas',
    'rastreamento de entregas',
    'plataforma logística',
    'gestão logística',
    'logística inteligente',
    'automação logística',
    'lockers para condomínios',
    'lockers para empresas',
    'lockers para varejo',
    'lockers para indústrias',
    'lockers para operações logísticas',
    'last mile',
    'última milha',
    'entrega autônoma',
    'retirada autônoma',
    'infraestrutura logística digital',
  ],

  alternates: {
    canonical: `${SITE_URL}/`,
  },

  openGraph: {
    type: 'website',
    url: `${SITE_URL}/`,
    siteName: 'Kaizu',
    locale: 'pt_BR',
    title: 'Kaizu | Smart lockers e plataforma para gestão de entregas',
    description:
      'A Kaizu combina smart lockers e plataforma digital para automatizar entregas, retiradas e gestão logística com segurança, rastreabilidade e controle em tempo real.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Kaizu — Smart lockers e plataforma de gestão logística',
        type: 'image/webp',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Kaizu | Smart lockers e plataforma para gestão de entregas',
    description:
      'A Kaizu combina smart lockers e plataforma digital para automatizar entregas, retiradas e gestão logística com segurança, rastreabilidade e controle em tempo real.',
    images: [OG_IMAGE],
  },

  other: {
    'og:image:secure_url': OG_IMAGE,
    'og:image:type': 'image/webp',
    'og:image:width': '1200',
    'og:image:height': '630',
  },

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: '/favicon-kaizu.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${roboto.variable}`}>
      <body className={roboto.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}