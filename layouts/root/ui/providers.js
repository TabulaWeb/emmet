'use client'

/** */
import { Session } from '@/providers/session'

/** */
export const Providers = ({ children }) => {
  /** */
  return (
    <Session>
      {children}
    </Session>
  )
}
