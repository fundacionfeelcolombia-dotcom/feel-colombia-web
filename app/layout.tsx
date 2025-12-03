import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Feel Colombia - Fundación de Bienestar Emocional y Salud Mental",
    template: "%s | Feel Colombia",
  },
  description:
    "Fundación Feel Colombia promueve el bienestar emocional y la prevención en salud mental a través de programas educativos, corporativos e innovación. Transformamos comunidades con Aula Viva, Pulso Corporativo y Synha Lab.",
  keywords: [
    "bienestar emocional",
    "salud mental",
    "fundación Colombia",
    "prevención suicidio",
    "educación emocional",
    "salud mental juvenil",
    "Aula Viva",
    "Pulso Corporativo",
    "Synha Lab",
    "innovación salud mental",
  ],
  authors: [{ name: "Fundación Feel Colombia" }],
  creator: "Fundación Feel Colombia",
  publisher: "Fundación Feel Colombia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.fundacionfeelcolombia.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Feel Colombia - Fundación de Bienestar Emocional y Salud Mental",
    description:
      "Promovemos el bienestar emocional y la prevención en salud mental en Colombia. Programas educativos, corporativos y de innovación para transformar comunidades.",
    url: "https://www.fundacionfeelcolombia.org",
    siteName: "Feel Colombia",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feel Colombia - Fundación de Bienestar Emocional",
    description:
      "Transformamos comunidades promoviendo el bienestar emocional y la salud mental en Colombia.",
    creator: "@feelcolombia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: 'tu-codigo-de-verificacion', // Agregar cuando tengas el código
    // yandex: 'tu-codigo-yandex',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
