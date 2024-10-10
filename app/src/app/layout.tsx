import Web3Provider from '@/services/Web3Provider'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contact Stream DApp on Arbitrum Sepolia.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='relative m-0 min-h-screen w-full p-0 text-slate-500'>
        <div className='fixed inset-0 z-[-1] h-screen w-full bg-slate-950'>
          <div className='fixed inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(120,119,198,0.3),transparent)]'></div>
          <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,1))]'></div>
        </div>

        <Web3Provider>
          <Toaster position='top-center' />
          <Navbar />
          <div className='container mx-auto px-4'>
            <div className='w-full'>
              <p className='mx-auto rounded-md bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] p-2 text-center text-xs md:text-lg text-slate-500 shadow-md'>
                Contracts are deployed on Arbitrum Sepolia chain. Feel free to get native currency
                from the{' '}
                <Link href={'/faucet'} className='text-teal-300 hover:text-teal-600'>
                  /faucet
                </Link>{' '}
                and start interacting.
              </p>
            </div>
            <br />
            {children}
          </div>
        </Web3Provider>

        {/* Optional Footer */}
        <div className='p-6'></div>
      </body>
    </html>
  )
}
