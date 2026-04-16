import { Analytics } from '@vercel/analytics/next';
import Footer from '@/components/main/Footer'
import { Navbar } from '@/components/main/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Agustín Sepúlveda - DevOps & Infrastructure Engineer | Kubernetes, AWS, GCP',
  description:
    'DevOps & Infrastructure Engineer specializing in Kubernetes, AWS, GCP, Terraform, and CI/CD. Portfolio showcasing cloud infrastructure, automation, and homelab projects.',
  keywords: [
    'devops portfolio',
    'infrastructure engineer',
    'devops engineer',
    'agustin sepulveda',
    'agustin sepulveda portfolio',
    'kubernetes engineer',
    'rke2',
    'aws',
    'gcp',
    'terraform',
    'ci cd pipeline',
    'infrastructure automation',
    'proxmox',
    'homelab',
    'jenkins'
  ],
  authors: [{ name: 'Agustín Sepúlveda' }],
  creator: 'Agustín Sepúlveda',
  publisher: 'Agustín Sepúlveda',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://asepulveda.dev',
    title: 'Agustín Sepúlveda - DevOps & Infrastructure Engineer Portfolio',
    description: 'DevOps & Infrastructure Engineer specializing in Kubernetes, AWS, GCP, and CI/CD automation.',
    siteName: 'Agustín Sepúlveda Portfolio',
    images: [
      {
        url: '/profile-pic.png',
        width: 1200,
        height: 630,
        alt: 'Agustín Sepúlveda - DevOps & Infrastructure Engineer',
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Agustín Sepúlveda - DevOps & Infrastructure Engineer Portfolio',
  //   description: 'DevOps & Infrastructure Engineer specializing in Kubernetes, AWS, GCP, and CI/CD.',
  //   images: ['/profile-pic.png'],
  //   creator: '@agustinsepulveda',
  // },
  alternates: {
    canonical: 'https://asepulveda.dev',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Agustín Sepúlveda',
    jobTitle: 'DevOps & Infrastructure Engineer',
    description: 'DevOps & Infrastructure Engineer specializing in Kubernetes, AWS, GCP, Terraform, and CI/CD automation',
    url: 'https://asepulveda.dev',
    image: 'https://asepulveda.dev/profile-pic.png',
    sameAs: [
      'https://github.com/AguuSz',
      'https://linkedin.com/in/agustin-sepulveda',
    ],
    knowsAbout: [
      'DevOps',
      'Infrastructure Engineering',
      'AWS',
      'GCP',
      'Kubernetes',
      'RKE2',
      'Docker',
      'CI/CD',
      'Infrastructure as Code',
      'Terraform',
      'Ansible',
      'Proxmox',
      'Jenkins',
      'Monitoring',
      'Automation'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Iquall Networks'
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://asepulveda.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e40af" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsProvider>
            <Navbar />
            <main role="main">
              {children}
            </main>
            <Footer />
          </AnalyticsProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
