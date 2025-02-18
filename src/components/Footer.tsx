import { colors } from '@/theme'
import { Box, HStack, IconButton, Text, Card } from '@chakra-ui/react'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { MainTitle } from './MainTitle'

export function LiteFooter() {
  return (
    <Card.Root
      bg={colors.purple}
      borderRadius={2}
      p={10}
      maxH={{ base: '342px', md: '250px' }}
      h='100%'>
      <Box
        display='grid'
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={8}
        height='100%'
        alignItems='center'
        justifyContent='space-between'>
        <MainTitle />
        <HStack gap={4} justify='center'>
          <IconButton
            asChild
            color='white'
            bg='transparent'
            _hover={{ bg: 'whiteAlpha.200' }}>
            <a
              href='https://www.linkedin.com/company/hellolitebox/'
              target='_blank'>
              <FaLinkedinIn />
            </a>
          </IconButton>

          <IconButton
            asChild
            color='white'
            bg='transparent'
            _hover={{ bg: 'whiteAlpha.200' }}>
            <a href='https://www.facebook.com/hellolitebox' target='_blank'>
              <FaFacebookF />
            </a>
          </IconButton>

          <IconButton
            asChild
            color='primary'
            bg='transparent'
            _hover={{ bg: 'whiteAlpha.200' }}>
            <a href='https://x.com/hellolitebox' target='_blank'>
              <FaXTwitter />
            </a>
          </IconButton>
        </HStack>

        <Text color='white' textAlign={{ base: 'center' }} fontSize='sm'>
          © Copyright Lite-Tech. All rights reserved.
        </Text>
      </Box>
    </Card.Root>
  )
}
