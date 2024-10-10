'use client'

import { capitalize, readableMobile } from '@/utils/common'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'

interface Contact {
  name: string
  email: string
  phone: string
  date: string
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const fetchContacts = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}contact`
  const response = await fetch(apiUrl)

  if (!response.ok) {
    throw new Error('Failed to fetch contacts.')
  }

  return response.json()
}

const ContactList = () => {
  // Fetch contacts with re-fetching every 30 seconds
  const {
    data: contacts = [],
    isLoading,
    error,
  } = useQuery<Contact[], Error>({
    queryKey: ['contacts'],
    queryFn: fetchContacts,
    refetchInterval: 10 * 1000,
  })

  if (isLoading) {
    return <p>Loading contacts...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div className='container mx-auto py-36'>
      <h2 className='mb-6 text-3xl font-bold text-gray-200'>Saved Contacts</h2>
      <motion.div
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
        initial='hidden'
        animate='visible'
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <motion.div
              key={index}
              className='relative rounded-lg border border-neutral-700 bg-neutral-800 p-6 shadow-md transition hover:shadow-lg'
              variants={fadeIn}
            >
              <div className='absolute inset-0 -z-10 bg-gradient-to-r from-slate-900 to-slate-700 opacity-50'></div>
              <p className='font-mono text-lg font-semibold text-white'>
                <strong>Name:</strong> {capitalize(contact.name)}
              </p>
              <p className='font-sans text-white '>
                <strong>Email:</strong> {contact.email}
              </p>
              <p className='font-mono text-white'>
                <strong>Phone:</strong> {readableMobile(contact.phone)}
              </p>
              <p className='text-sm text-gray-400'>
                <strong>Date:</strong>{' '}
                {new Date(contact.date).toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                })}
              </p>
            </motion.div>
          ))
        ) : (
          <p className='text-gray-400'>No contacts found</p>
        )}
      </motion.div>
    </div>
  )
}

export default ContactList
