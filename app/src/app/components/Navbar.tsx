import { BoltIcon } from '@heroicons/react/16/solid'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className='p-4 text-white'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/' className='hover:text-gray-300'>
          <div className='inline-flex gap-2 bg-gradient-to-r from-teal-500 via-amber-500 to-pink-800 bg-clip-text text-lg font-semibold text-transparent'>
            <BoltIcon className='size-6 text-teal-400' />
            Contact Stream.
          </div>
        </Link>
        <div className='hidden space-x-4 md:flex'>
          <Link href='/faucet' className='relative hover:text-gray-300'>
            <span className='absolute left-[-5px] top-0 animate-ping rounded-full bg-red-500 p-1'></span>
            Faucet
          </Link>
        </div>
        <div className='md:hidden'>
          <button className='text-white focus:outline-none'>
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>

        <ConnectButton
          showBalance={{
            smallScreen: true,
            largeScreen: true,
          }}
        />
      </div>
    </nav>
  )
}

export default Navbar
