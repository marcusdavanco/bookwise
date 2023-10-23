import { ReactNode } from 'react'
import './globals.css'
import { Nunito } from 'next/font/google'
import { AppProviders } from '../components/app-providers'

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'BookWise',
  description: 'BookWise is a book review app.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className}  scrollbar-thumb-gray-600 scrollbar-track-gray-700 scrollbar-thin scrollbar-thumb-rounded-full`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
