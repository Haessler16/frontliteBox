import { Numeral } from '@/icons/Numeral'
import { Center, Heading } from '@chakra-ui/react'

export const MainTitle = () => {
  return (
    <Center gap={2}>
      <Numeral />
      <Heading as='h1' size='3xl' color='white'>
        lite-tech
      </Heading>
    </Center>
  )
}
