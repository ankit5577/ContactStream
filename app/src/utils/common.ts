import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const checkValidNumber = (_number: string): boolean => {
  return /^(\d+(\.\d+)?)$/.test(_number)
}

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePhone = (phone: string) => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/
  return phoneRegex.test(phone)
}

function readableMobile(phoneNo) {
  return phoneNo.slice(0, 5) + '-' + phoneNo.slice(5)
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1)
}

export { capitalize, checkValidNumber, cn, readableMobile, validateEmail, validatePhone }
