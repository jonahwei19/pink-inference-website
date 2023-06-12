import './globals.css'
import { Play } from 'next/font/google'

const playFont = Play({
  weight: ['400', '700'],
  preload:false,
})

export const metadata = {
  title: 'Pink Inference',
  description: 'Developing wetware architecture for the next generation of computing and neuropharmacology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={playFont.className}>{children}</body>
    </html>
  )
}
