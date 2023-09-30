import '../globals.css';

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Home',
  description: 'Record management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className='bg-slate-600'>{children}</body>
    </html>
  )
}
