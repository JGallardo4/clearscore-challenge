import './globals.css'
import type { Metadata } from 'next'
import { Instrument_Sans, Handjet } from 'next/font/google'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans',
})

const handjet = Handjet({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-handjet',
})

export const metadata: Metadata = {
  title: 'Ideas',
  description: 'Keep track of your ideas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${handjet.variable}`}>
      <body>{children}</body>
    </html>
  )
}
