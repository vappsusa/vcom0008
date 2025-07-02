import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VERDICT.COM - AI-Powered Legal Q&A Platform',
  description: 'Get professional legal opinions from verified lawyers. AI-powered classification and consensus building for legal questions.',
  keywords: 'legal advice, lawyers, legal questions, AI legal platform, verdict',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}