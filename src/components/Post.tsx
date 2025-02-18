'use client'
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
import { RightArrow } from '@/icons/Arrows'
import { NewsPaper } from '@/icons/NewsPaper'

export interface iPost {
  _id: string
  title: string
  image: string
  tags: string
  readTime: string
}
export interface iPostProps {
  post: iPost
  type: 'primary' | 'secondary'
  isMain?: boolean
}

export const Post = ({ post, type, isMain = false }: iPostProps) => {
  return (
    <Card.Root overflow='hidden' position='relative' rounded={0} h='100%'>
      <Image
        src={post.image}
        alt='Green double couch with wooden legs'
        objectFit='fill'
        h={{ base: isMain ? '100%' : '378px', md: '100%' }}
      />

      <Center
        position='absolute'
        bottom={6}
        left={0}
        right={0}
        flexDir='column'>
        <VStack gap={0} width={'calc(100% - 3rem)'} alignItems='flex-start'>
          <Box bg={type === 'primary' ? 'black' : 'white'} pt={5} pb={1} px={4}>
            <LiteTag title={post.tags} />
          </Box>

          <Box bg={type === 'primary' ? 'black' : 'white'} p={4}>
            <Heading
              as='h2'
              fontWeight='bold'
              color={type === 'primary' ? 'white' : 'black'}
              lineHeight='27px'
              fontSize='18px'
              maxW={'350px'}
              fontFamily='var(--font-space-grotesk)'>
              {post.title}
            </Heading>

            <HStack justify='space-between' mt={2}>
              <Link
                href={`/posts/${post._id}`}
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
                  {post.readTime}
                </Text>
              </HStack>
            </HStack>
          </Box>
        </VStack>
      </Center>
    </Card.Root>
  )
}

export const MostPopularPost = ({
  title,
  image,
}: {
  title: string
  image: string
}) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} gap={2}>
      <Text
        fontSize={'16px'}
        fontWeight={600}
        fontFamily='var(--font-space-grotesk)'
        color={colors.gray}>
        {title}
      </Text>
      <Image
        src={image}
        alt='Green double couch with wooden legs'
        objectFit='fill'
        h={'80px'}
        w={'80px'}
      />
    </Box>
  )
}
