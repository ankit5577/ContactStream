'use client'

import * as contactsContract from '@/deployments/arbitrumSepolia/Contacts.json'
import useEnsureNetwork from '@/services/hooks/useEnsureNetwork'
import { validateEmail, validatePhone } from '@/utils/common'
import { EnvelopeIcon, FaceSmileIcon, PhoneIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useWriteContract } from 'wagmi'
import InputField from '../elements/Input'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const { isCorrectNetwork } = useEnsureNetwork()
  const wContract = useWriteContract()

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (!form.name || form.name.length < 2) {
        return toast.error('Please enter a valid name (min. 2 characters)', {
          icon: '❌',
        })
      }
      if (!validateEmail(form.email)) {
        return toast.error('Please enter a valid email address', {
          icon: '❌',
        })
      }
      if (!validatePhone(form.phone) || !(form.phone.length === 10)) {
        return toast.error('Please enter a valid phone number', {
          icon: '❌',
        })
      }
      if (!isCorrectNetwork) {
        toast.error('Wrong Network!')
        return
      }

      toast.success(`Adding Contact to Blockchain`, {
        icon: '⌛️',
      })

      await wContract.writeContractAsync({
        abi: contactsContract.abi,
        address: contactsContract.address,
        functionName: 'createContact',
        args: [form.name.toString(), form.email.toString(), form.phone.toString()],
      })
    } catch (e) {
      const readableError = e?.message?.split('.')[0] || 'Transaction failed.'
      toast.error(readableError, {
        icon: '❌',
      })
      console.error('Transaction Error:', e)
    }
  }

  return (
    <div className='container'>
      <div className='-mx-4 flex flex-wrap lg:justify-between'>
        <div className='w-full px-4 lg:w-1/2 xl:w-6/12'>
          <div className='mb-12 max-w-[570px] lg:mb-0'>
            <span className='text-primary mb-4 block text-base font-semibold'>Contact Form</span>
            <h2 className='text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px] dark:text-white'>
              Add Your Favorite Contacts to the Blockchain
            </h2>
            <p className='text-body-color dark:text-dark-6 mb-9 text-base leading-relaxed'>
              Secure your favorite contacts on the blockchain, ensuring they’re preserved forever.
              With Sepolia, enjoy the benefits of decentralization and immutability while managing
              your most important contacts.
            </p>
          </div>
        </div>
        <div className='w-full px-4 lg:w-1/2 xl:w-5/12'>
          <div className='dark:bg-dark-2 relative rounded-lg bg-neutral-900 p-8 shadow-lg sm:p-12'>
            <form>
              <InputField
                type='text'
                label='name'
                placeholder='Your Name'
                icon={<FaceSmileIcon />}
                onChange={value => handleChange('name', value)}
              />
              <InputField
                type='text'
                label='email'
                placeholder='Your Email'
                icon={<EnvelopeIcon />}
                onChange={value => handleChange('email', value)}
              />
              <InputField
                type='text'
                label='phone'
                placeholder='Your Phone'
                icon={<PhoneIcon />}
                onChange={value => handleChange('phone', value)}
              />
              <div>
                <button
                  onClick={handleSubmit}
                  disabled={(wContract.isPending || wContract.isPaused) && !wContract.isError}
                  className={`border-primary bg-primary w-full rounded border p-3 text-white transition ${
                    wContract.isPending
                      ? 'hover:scale-105 hover:bg-teal-500 hover:bg-opacity-90 hover:shadow-lg'
                      : 'opacity-50'
                  }`}
                >
                  {wContract.isPending ? 'Saving...' : 'Save Contact'}
                </button>
              </div>
            </form>
            {/* {isSuccess && <p className='mt-3 text-green-500'>Contact successfully saved!</p>}
            {isTxLoading && (
              <p className='mt-3 text-yellow-500'>Transaction is being processed...</p>
            )} */}
            <div>
              <span className='absolute -right-9 -top-10 z-[-1]'>
                <svg
                  width={100}
                  height={100}
                  viewBox='0 0 100 100'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z'
                    fill='#3056D3'
                  />
                </svg>
              </span>
              <span className='absolute -right-10 top-[90px] z-[-1]'>
                <img src={'/t1.svg'} />
              </span>
              <span className='absolute -bottom-7 -left-7 z-[-1]'>
                <img src={'/t2.svg'} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
