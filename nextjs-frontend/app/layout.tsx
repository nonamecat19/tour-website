import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/global.css'
import { ReactNode } from 'react'
import DebugPanel from '@/components/DebugPanel'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tour website',
  description: 'Tour website description',
}

interface IProps {
  children: ReactNode
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang='en' className='h-full'>
      <body className={inter.className + ' h-full'}>
        {children}
        <DebugPanel />
      </body>
    </html>
  )
}
