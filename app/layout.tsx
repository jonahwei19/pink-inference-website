import './globals.css'
import { Play } from 'next/font/google'
import SmoothScroll from '@/utilities/SmoothScroll'

const playFont = Play({
  weight: ['400', '700'],
  preload:false,
})

export const metadata = {
  title: 'Pink Inference',
  description: 'Explore the Future of AI and Robotics with Pink Inference. We are developing wetware architecture for the next generation of computing and neuropharmacology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={playFont.className}>
        {children}
        <SmoothScroll />
      </body>
    </html>
  )
}
