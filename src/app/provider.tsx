'use client'

import {
  ChakraProvider,
  createSystem,
  defineConfig,
  defaultSystem,
} from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: '#0FEE0F' },
        secondary: { value: '#EE0F0F' },
      },
      fonts: {
        body: { value: 'system-ui, sans-serif' },
      },
    },
  },
})

export const system = createSystem(config)

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider
        attribute='class'
        disableTransitionOnChange
        defaultTheme='system'>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  )
}
