'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import {
  Container,
  HStack,
  Center,
  Card,
  VStack,
  Heading,
  Box,
  Separator,
  Spinner,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { colors } from '@/theme'

import { MainTitle } from '@/components/MainTitle'
import { LiteButton } from '@/components/ui/Button'

import { iPost, MostPopularPost, Post } from '@/components/Post'
import { LiteTagSelector } from '@/components/ui/Tags'

import { LiteFooter } from '@/components/Footer'
import { Modal } from '@/components/Modal'
import { api } from '@/config/urlApi'
import Topics from '@/constants/Topics'

// const posts = [
//   {
//     _id: '1',
//     title:
//       'Dictators Used Sandvine Tech to Censor the Internet. The US Finally Did Something About It',
//     tag: 'Crypto',
//     image:
//       'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//   },
//   {
//     _id: '2',
//     title: 'Your Kid May Already Be Watching AI-Generated Videos on YouTube',
//     tag: 'Entertainment',
//     image:
//       'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//   },
//   {
//     _id: '3',
//     title: 'Here Come the AI Worms',
//     tag: 'AI',
//     image:
//       'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//   },
//   {
//     _id: '4',
//     title: 'The AI-Generated Video Boom Is Here',
//     tag: 'Video',
//     image:
//       'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//   },
//   {
//     _id: '5',
//     title: 'Tech Giants Are Using AI to Create Fake News',
//     tag: 'Tech',
//     image:
//       'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//   },
//   {
//     _id: '6',
//     title: 'Web3 Is the Future of the Internet',
//     tag: 'Web3',
//     image:
//       'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//   },
// ]

export default function Home() {
  // const [posts, setPosts] = useState<Post[]>([])
  // const [page, setPage] = useState(1)
  const {
    data: posts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () => axios.get(`${api}posts?limit=10&offset=0`),
  })

  const [open, setOpen] = useState(false)
  const [selectedTag, setSelectedTag] = useState<string[]>(['All'])

  const { topics } = Topics()

  // useEffect(() => {
  //   const getPosts = async () => {
  //     // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //     const { data } = await axios.get(`${api}posts?limit=10&offset=0`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     console.log({ data })
  //   }
  //   getPosts()
  // }, [])

  useEffect(() => {
    if (selectedTag.length === 0) {
      setSelectedTag(['All'])
    }
  }, [selectedTag])

  function generatePosts(length: number) {
    const items = [{ value: 1, span: 2 }] // First post has span 2
    let current = 1
    let add4 = true // Track whether to add 4 or 2 next

    for (let i = 1; i < length; i++) {
      current += add4 ? 4 : 2
      // Span is 2 if the step was +4, else 1
      items.push({ value: current, span: add4 ? 2 : 0 })
      add4 = !add4 // Toggle the step
    }

    return items
  }

  // Generate posts with spans
  if (isLoading && posts === undefined) {
    return (
      <Center height={'100vh'}>
        <Spinner size='xl' color={colors.purple} />
      </Center>
    )
  }

  if (posts?.data.length === 0) {
    return (
      <Center height={'100vh'} flexDir='column' gap={4}>
        <Heading>No posts found</Heading>
        <Modal open={open} setOpen={setOpen} refetch={refetch} />
      </Center>
    )
  }

  console.log({ posts, selectedTag })
  const postsWithSpans = generatePosts(posts?.data.lenght)

  return (
    <Container
      p={4}
      height={'100vh'}
      minH='100vh'
      width='100vw'
      maxW='100%'
      px={'5%'}>
      {/* Header */}
      <HStack justify='space-between' marginBottom={4}>
        <MainTitle />

        <Modal open={open} setOpen={setOpen} refetch={refetch} />
      </HStack>

      {/* Main Section */}
      <Box maxH={'544px'} height='100%'>
        <Post
          post={posts?.data[0]}
          readTime='6 mins'
          type='primary'
          isMain={true}
        />
      </Box>

      <VStack gap={2} alignItems='flex-start' marginY={4}>
        <Heading as='h4' fontSize='sm' fontWeight={600}>
          Topics
        </Heading>

        <Box overflowX='auto' w='100%'>
          <HStack gap={2} w='100%'>
            {topics.map(({ title }) => (
              <LiteTagSelector
                key={title}
                title={title}
                isSelected={selectedTag.includes(title)}
                onClick={() => {
                  setSelectedTag((prev) =>
                    prev.includes(title)
                      ? prev.filter((tag) => tag !== title)
                      : [...prev, title],
                  )
                }}
              />
            ))}
          </HStack>
        </Box>
      </VStack>

      <Box display={'grid'} gap={4} gridTemplateColumns={{ lg: '1fr 0.3fr' }}>
        <section>
          <Box
            display={{ base: 'flex', md: 'grid' }}
            flexDir={{ base: 'column', md: 'row' }}
            gridTemplateColumns={{ md: 'repeat(2, 1fr)' }}
            gap={4}>
            {posts?.data.slice(0, 3).map((post: iPost) => (
              <Box
                key={post._id}
                gridRow={{
                  md: `span ${Number(post._id) === 1 ? 2 : 0}`,
                }}>
                <Post post={post} readTime='6 mins' type='secondary' />
              </Box>
            ))}
          </Box>

          <Card.Root
            display={'flex'}
            flexDir={{ base: 'column', md: 'row' }}
            bg={colors.purple}
            p={10}
            marginY={8}
            borderRadius={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Heading color='white' fontWeight={400}>
              Sign up for our newsletter{' '}
              <span style={{ fontWeight: 600 }}>and get daily updates</span>
            </Heading>

            <LiteButton
              variant='primary'
              width={{ base: 'full', md: 'auto' }}
              marginTop={{ base: 5, md: 0 }}>
              Subscribe
            </LiteButton>
          </Card.Root>

          <Box
            display={{ base: 'flex', md: 'grid' }}
            flexDir={{ base: 'column', md: 'row' }}
            gridTemplateColumns={{ md: 'repeat(2, 1fr)' }}
            gap={4}>
            {posts?.data.slice(3).map((post: iPost, index: number) => {
              const refId = index + 4

              return (
                <Box
                  key={post._id}
                  gridRow={{
                    md: `span ${
                      postsWithSpans.find((b) => b.value === refId)?.span
                    }`,
                  }}>
                  <Post post={post} readTime='6 mins' type='secondary' />
                </Box>
              )
            })}
          </Box>

          <Center>
            <LiteButton
              variant='primary'
              width={{ base: 'full', md: 'auto' }}
              marginY={10}>
              Load More
            </LiteButton>
          </Center>
        </section>

        <Box
          as='section'
          display={{ base: 'none', lg: 'flex' }}
          flexDir='column'
          gap={1}>
          <Heading
            as='h4'
            fontFamily='var(--font-space-grotesk)'
            fontSize='18px'
            fontWeight={600}>
            Most Viewed
          </Heading>

          {posts?.data.map((post: iPost, index: number) => (
            <Box key={index}>
              <Link
                href={`/posts/most-viewed-${index + 1}`}
                style={{ textDecoration: 'none' }}>
                <MostPopularPost title={post.title} image={post.image} />
              </Link>
              <Separator my={3} borderColor={colors.gray} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Footer */}
      <LiteFooter />
    </Container>
  )
}
