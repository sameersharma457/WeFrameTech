import './globals.css'
import { ReactNode } from 'react'
import Sidebar from '../components/ui/Sidebar'

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard sample built with Next.js + TypeScript + Tailwind'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex">
          <Sidebar />
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
