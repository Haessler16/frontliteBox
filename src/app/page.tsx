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
} from '@chakra-ui/react'

import axios from 'axios'

import { colors } from '@/theme'

import { MainTitle } from '@/components/MainTitle'
import { LiteButton } from '@/components/ui/Button'

import { MostPopularPost, Post } from '@/components/Post'
import { LiteTagSelector } from '@/components/ui/Tags'

import { LiteFooter } from '@/components/Footer'
import { Modal } from '@/components/Modal'

interface Post {
  id: string
  title: string
  image: string
  // Add other static fields as needed
}

const posts = [
  {
    id: '1',
    title:
      'Dictators Used Sandvine Tech to Censor the Internet. The US Finally Did Something About It',
    tag: 'Crypto',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: '2',
    title: 'Your Kid May Already Be Watching AI-Generated Videos on YouTube',
    tag: 'Entertainment',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: '3',
    title: 'Here Come the AI Worms',
    tag: 'AI',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: '4',
    title: 'The AI-Generated Video Boom Is Here',
    tag: 'Video',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: '5',
    title: 'Tech Giants Are Using AI to Create Fake News',
    tag: 'Tech',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: '6',
    title: 'Web3 Is the Future of the Internet',
    tag: 'Web3',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
]

export default function Home() {
  // const [posts, setPosts] = useState<Post[]>([])
  // const [page, setPage] = useState(1)

  const [open, setOpen] = useState(false)
  const [selectedTag, setSelectedTag] = useState<string[]>(['All'])

  useEffect(() => {
    const getPosts = async () => {
      // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const { data } = await axios.get(
        'https://postlitebox.onrender.com/posts?limit=10&offset=0',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      console.log(data)
    }
    getPosts()
  }, [])

  function generatePosts(length: number) {
    const posts = [{ value: 1, span: 2 }] // First post has span 2
    let current = 1
    let add4 = true // Track whether to add 4 or 2 next

    for (let i = 1; i < length; i++) {
      current += add4 ? 4 : 2
      // Span is 2 if the step was +4, else 1
      posts.push({ value: current, span: add4 ? 2 : 1 })
      add4 = !add4 // Toggle the step
    }

    return posts
  }

  // Example: Generate posts with spans
  const bum = generatePosts(posts.length)
  console.log(bum)

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

        <Modal open={open} setOpen={setOpen} />
      </HStack>

      {/* Main Section */}

      <Box maxH={'544px'} height='100%'>
        <Link
          href={`/posts/your-kid-ai-videos`}
          style={{ textDecoration: 'none' }}>
          <Post
            title='Your Kid May Already Be Watching AI-Generated Videos on YouTube'
            image='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            tagTitle='Crypto'
            readTime='6 mins'
            type='primary'
            isMain={true}
          />
        </Link>
      </Box>

      <VStack gap={2} alignItems='flex-start' marginY={4}>
        <Heading as='h4' fontSize='sm' fontWeight={600}>
          Topics
        </Heading>

        <Box overflowX='auto' w='100%'>
          <HStack gap={2} w='100%'>
            <LiteTagSelector
              title='All'
              isSelected={selectedTag.length === 1 && selectedTag[0] === 'All'}
              onClick={() => setSelectedTag(['All'])}
            />

            <LiteTagSelector
              title='Crypto'
              isSelected={selectedTag.includes('Crypto')}
              onClick={() =>
                setSelectedTag((prev) =>
                  prev.includes('Crypto')
                    ? prev.filter((tag) => tag !== 'Crypto')
                    : [...prev, 'Crypto'],
                )
              }
            />
            <LiteTagSelector
              title='AI'
              isSelected={selectedTag.includes('AI')}
              onClick={() =>
                setSelectedTag((prev) =>
                  prev.includes('AI')
                    ? prev.filter((tag) => tag !== 'AI')
                    : [...prev, 'AI'],
                )
              }
            />
            <LiteTagSelector
              title='Web3'
              isSelected={selectedTag.includes('Web3')}
              onClick={() =>
                setSelectedTag((prev) =>
                  prev.includes('Web3')
                    ? prev.filter((tag) => tag !== 'Web3')
                    : [...prev, 'Web3'],
                )
              }
            />
            <LiteTagSelector
              title='Blockchain'
              isSelected={selectedTag.includes('Blockchain')}
              onClick={() =>
                setSelectedTag((prev) =>
                  prev.includes('Blockchain')
                    ? prev.filter((tag) => tag !== 'Blockchain')
                    : [...prev, 'Blockchain'],
                )
              }
            />
            <LiteTagSelector
              title='NFTs'
              isSelected={selectedTag.includes('NFTs')}
              onClick={() =>
                setSelectedTag((prev) =>
                  prev.includes('NFTs')
                    ? prev.filter((tag) => tag !== 'NFTs')
                    : [...prev, 'NFTs'],
                )
              }
            />
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
            {posts.slice(0, 3).map((post) => (
              <Box
                key={post.id}
                gridRow={{
                  md: `span ${Number(post.id) === 1 ? 2 : 0}`,
                }}>
                <Link
                  href={`/posts/${post.id}`}
                  style={{ textDecoration: 'none' }}>
                  <Post
                    title={post.title}
                    image={post.image}
                    tagTitle={post.tag}
                    readTime='6 mins'
                    type='secondary'
                  />
                </Link>
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
            {posts.slice(3).map((post) => (
              <Box
                key={post.id}
                gridRow={{
                  md: `span ${
                    [5, 7, 11, 13, 17, 19].includes(Number(post.id)) ? 2 : 0
                  }`,
                }}>
                <Link
                  href={`/posts/${post.id}`}
                  style={{ textDecoration: 'none' }}>
                  <Post
                    title={post.title}
                    image={post.image}
                    tagTitle={post.tag}
                    readTime='6 mins'
                    type='secondary'
                  />
                </Link>
              </Box>
            ))}
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

          {[
            {
              title:
                'Dictators Used Sandvine Tech to Censor the Internet. The US Finally Did Something About It',
              image:
                'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            },
            {
              title: 'Here Come the AI Worms',
              image:
                'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            },
            {
              title: 'The AI-Generated Video Boom Is Here',
              image:
                'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            },
            {
              title: 'Tech Giants Are Using AI to Create Fake News',
              image:
                'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            },
          ].map((post, index) => (
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
