import {
  Center,
  HStack,
  Heading,
  Text,
  VStack,
  Card,
  Box,
  Image,
} from '@chakra-ui/react'

import Link from 'next/link'
import { colors } from '@/theme'
import { LiteTag } from '@/components/ui/Tags'
import { RightArrow } from '@/icons/RightArrow'
import { NewsPaper } from '@/icons/NewsPaper'

interface PostProps {
  title: string
  image: string
  tagTitle: string
  readTime: string
  type: 'primary' | 'secondary'
}

export const Post = ({ title, image, tagTitle, readTime, type }: PostProps) => {
  return (
    <Card.Root overflow='hidden' position='relative' rounded={0}>
      <Image
        src={image}
        alt='Green double couch with wooden legs'
        objectFit='fill'
        h={378}
      />

      <Center
        position='absolute'
        bottom={6}
        left={0}
        right={0}
        flexDir='column'>
        <VStack gap={0} width={'calc(100% - 3rem)'} alignItems='flex-start'>
          <Box bg={type === 'primary' ? 'black' : 'white'} pt={5} pb={1} px={4}>
            <LiteTag title={tagTitle} />
          </Box>

          <Box bg={type === 'primary' ? 'black' : 'white'} p={4}>
            <Heading
              as='h2'
              fontWeight='bold'
              color={type === 'primary' ? 'white' : 'black'}
              lineHeight='27px'
              fontSize='18px'>
              {title}
            </Heading>

            <HStack justify='space-between' mt={2}>
              <Link
                href='/'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  textDecoration: 'none',
                }}>
                <Text
                  fontSize='sm'
                  fontWeight='bold'
                  color={type === 'primary' ? 'white' : 'black'}>
                  Read
                </Text>

                <RightArrow color={colors.purple} />
              </Link>

              <HStack>
                <NewsPaper />
                <Text fontSize='sm' color={colors.gray}>
                  {readTime}
                </Text>
              </HStack>
            </HStack>
          </Box>
        </VStack>
      </Center>
    </Card.Root>
  )
}
