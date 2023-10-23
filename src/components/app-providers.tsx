'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { type ReactNode, useState } from 'react'

interface AppProviderProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProviderProps) {
  const [client] = useState(new QueryClient())

  return (
    <SessionProvider>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </SessionProvider>
  )
}
