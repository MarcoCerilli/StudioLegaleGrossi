import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Avvocato Simona Grossi | Studio Legale Terracina',
  description: "Sito professionale dell'Avvocato Simona Grossi. Consulenza legale esperta in Diritto Civile, Penale e di Famiglia a Terracina e provincia.",
  keywords: "Avvocato Terracina, Simona Grossi, Studio Legale, Diritto di Famiglia, Diritto Civile Latina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Dati strutturati senza indirizzo fisico
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Avvocato Simona Grossi",
    "description": "Studio Legale specializzato in Diritto Civile, Penale e di Famiglia a Terracina.",
    "url": "https://www.avvocatosimonagrossi.it", // Sostituisci con il dominio reale
    "telephone": "+393500632527",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Terracina",
      "addressRegion": "LT",
      "addressCountry": "IT"
    },
    "priceRange": "$$"
  };

  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Alegreya:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}