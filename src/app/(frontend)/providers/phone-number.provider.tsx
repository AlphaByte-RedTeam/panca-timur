'use client'

import { createContext, useContext } from 'react'

const PhoneNumberContext = createContext<string | undefined>(undefined)

export function PhoneNumberProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: any
}) {
  return <PhoneNumberContext.Provider value={value}>{children}</PhoneNumberContext.Provider>
}

export const usePhoneContext = () => useContext(PhoneNumberContext)
