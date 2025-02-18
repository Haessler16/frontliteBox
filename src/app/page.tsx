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
import { useInfiniteQuery } from '@tanstack/react-query'
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

export default function Home() {
  const POSTS_PER_PAGE = 9
  const [currentEndIndex, setCurrentEndIndex] = useState(9)

  const {
    data: posts,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) =>
      axios.get(
        `${api}posts?limit=${POSTS_PER_PAGE}&offset=${
          (pageParam - 1) * POSTS_PER_PAGE
        }`,
      ),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.length === POSTS_PER_PAGE
        ? allPages.length + 1
        : undefined
    },
    initialPageParam: 1,
  })

  const [open, setOpen] = useState(false)
  const [selectedTag, setSelectedTag] = useState<string[]>(['All'])

  useEffect(() => {
    if (selectedTag.length === 0) {
      setSelectedTag(['All'])
    }
  }, [selectedTag])

  const { topics } = Topics()

  function generatePosts(length: number) {
    const items = [{ value: 1, span: 2 }] // First post has span 2
    let current = 1
    let add4 = true // Track whether to add 4 or 2 next

    for (let i = 1; i < length; i++) {
      current += add4 ? 4 : 2
      // Span is 2 if the step was +4, else 1
      items.push({ value: current, span: 2 })
      // items.push({ value: current, span: add4 ? 2 : 0 })
      add4 = !add4 // Toggle the step
    }

    return items
  }

  const handleLoadMore = () => {
    fetchNextPage()
    setCurrentEndIndex((prev) => prev + 9)
  }

  // Generate posts with spans
  if (isLoading && posts === undefined) {
    return (
      <Center height={'100vh'}>
        <Spinner size='xl' color={colors.purple} />
      </Center>
    )
  }

  if (posts?.pages[0].data.length === 0) {
    return (
      <Center height={'100vh'} flexDir='column' gap={4}>
        <Heading>No posts found</Heading>
        <Modal open={open} setOpen={setOpen} refetch={refetch} />
      </Center>
    )
  }

  const allPosts = posts?.pages.flatMap((page) => page.data) || []
  const postsWithSpans = generatePosts(allPosts.length)
  console.log({ posts })

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
        <Post post={posts?.pages[0].data[0]} type='primary' isMain={true} />
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
            {allPosts.slice(0, 3).map((post: iPost, index: number) => {
              const refId = index + 1

              return (
                <Box
                  key={post._id}
                  gridRow={{
                    md: `span ${refId === 1 ? 2 : 0}`,
                  }}>
                  <Post post={post} type='secondary' />
                </Box>
              )
            })}
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
            {allPosts
              .slice(3, currentEndIndex)
              .map((post: iPost, index: number) => {
                const refId = index + 4

                return (
                  <Box
                    key={post._id}
                    gridRow={{
                      md: `span ${
                        postsWithSpans.find((b) => b.value === refId)?.span
                      }`,
                    }}>
                    <Post post={post} type='secondary' />
                  </Box>
                )
              })}
          </Box>

          <Center>
            <LiteButton
              variant='primary'
              width={{ base: 'full', md: 'auto' }}
              marginY={10}
              onClick={handleLoadMore}
              disabled={!hasNextPage || isFetchingNextPage}>
              {isFetchingNextPage
                ? 'Loading...'
                : hasNextPage
                ? 'Load More'
                : 'No more posts'}
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

          {allPosts.slice(0, 5).map((post: iPost, index: number) => (
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
