'use client'
import { Numeral } from '@/icons/Numeral'
import { Center, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export const MainTitle = () => {
  const router = useRouter()
  return (
    <Center gap={2} onClick={() => router.push('/')} cursor={'pointer'}>
      <Numeral />
      <Heading as='h1' size='3xl' color='white'>
        lite-tech
      </Heading>
    </Center>
  )
}
