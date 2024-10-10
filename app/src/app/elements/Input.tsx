'use client'

import React, { useState } from 'react'

interface InputFieldProps {
  label: string
  type?: string
  placeholder: string
  disabled?: boolean
  variant?: 'default' | 'active' | 'disabled' | 'invalid' | 'strong'
  icon?: React.ReactNode
  errorMessage?: string
  onChange?: (value: string) => void
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  disabled = false,
  icon,
  errorMessage,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    if (onChange) {
      onChange(value)
    }
  }

  const inputClasses = `
    w-full rounded border px-[14px] py-3 text-base outline-none focus:outline-2 focus:outline-teal-700
    ${disabled ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-body-color'}
    ${errorMessage ? 'border-red-500' : 'border-stroke focus:border-primary'}
    dark:bg-dark dark:text-dark-6 dark:border-dark-3 dark:focus:border-primary
    pl-10
  `

  return (
    <div className='relative mb-6'>
      {icon && (
        <div className='absolute left-3 top-1/2 z-10 w-4 -translate-y-1/2 transform text-gray-700'>
          {icon}
        </div>
      )}
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder || label}
        name={label}
        value={inputValue}
        onChange={handleChange}
        className={inputClasses}
      />
      {errorMessage && <p className='mt-1 text-sm text-red-500'>{errorMessage}</p>}
    </div>
  )
}

export default InputField
