'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'

const queryClient = new QueryClient()

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={defaultSystem}>
        <ThemeProvider
          attribute='class'
          disableTransitionOnChange
          defaultTheme='system'>
          {props.children}
        </ThemeProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
