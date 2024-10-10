'use client'

import useEnsureNetwork from '@/services/hooks/useEnsureNetwork'
import Contact from './components/ContactForm'

export default function Home() {
  const { isCorrectNetwork } = useEnsureNetwork()
  console.log('isCorrectNetwork:', isCorrectNetwork ? 'true' : 'false')

  if (!isCorrectNetwork) {
    return (
      <div className='mx-auto my-4 max-w-4xl text-center'>
        <h4 className='font-heading text-3xl font-semibold'>
          Please switch to the Arbitrum Sepolia Testnet to use this app.{' '}
        </h4>
      </div>
    )
  }

  return (
    <div className='h-28 p-6'>
      <Contact />
    </div>
  )
}
