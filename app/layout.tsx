import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Md Imam Hassan Dihan | Frontend Developer',
  description: 'Frontend developer specializing in React and Next.js, with hands-on experience across the MERN stack (Node.js, Express, MongoDB). Available for internships and remote opportunities.',
  keywords: ['Frontend Developer', 'React Developer', 'Next.js Developer', 'MERN Stack', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Web Developer'],
  authors: [{ name: 'Md Imam Hassan Dihan' }],
  openGraph: {
    title: 'Md Imam Hassan Dihan | Frontend Developer',
    description: 'Frontend developer specializing in React and Next.js, with hands-on experience across the MERN stack.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/fab-icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/fab-icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/fab-icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}