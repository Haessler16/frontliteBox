'use client'
import { Container, Text, HStack, Box, Heading } from '@chakra-ui/react'
import { MainTitle } from '@/components/MainTitle'
import { colors } from '@/theme'
import { Post, MostPopularPost, iPost } from '@/components/Post'
import { Separator } from '@chakra-ui/react'
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6'
import { LiteFooter } from '@/components/Footer'
import { Modal } from '@/components/Modal'
import { useState, use } from 'react'

export default function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const unwrappedParams = use(params)
  const { id } = unwrappedParams

  const [open, setOpen] = useState(false)
  // Mock data for the current post
  const currentPost = {
    title: 'Your Kid May Already Be Watching AI-Generated Videos on YouTube',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    tags: 'AI',
    readTime: '6 mins',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.

    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.`,
  }

  // Mock data for related posts
  const relatedPosts = [
    {
      title: 'Dictators Used Sandvine Tech to Censor the Internet',
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
  ]

  console.log({ id })
  return (
    <Container p={4} minH='100vh' width='100vw' maxW='100%' px={'5%'}>
      {/* Header */}
      <HStack justify='space-between' marginBottom={4}>
        <MainTitle />

        <Modal open={open} setOpen={setOpen} />
      </HStack>

      {/* Main Content */}
      <Box display={'grid'} gap={4} gridTemplateColumns={{ lg: '1fr 0.3fr' }}>
        <section>
          {/* Hero Post */}
          <Box maxH={'544px'} height='100%' marginBottom={8}>
            <Post
              post={currentPost as unknown as iPost}
              type='primary'
              isMain={true}
            />
          </Box>

          {/* Post Content */}
          <Text
            color='white'
            fontSize='lg'
            lineHeight='tall'
            whiteSpace='pre-line'
            marginBottom={8}>
            {currentPost.content}
          </Text>

          {/* Share Section */}
          <Box marginBottom={8}>
            <Heading as='h4' fontSize='sm' color='white' marginBottom={4}>
              Share this post
            </Heading>
            <HStack gap={4}>
              <FaLinkedinIn />
              <FaFacebookF />
              <FaXTwitter />
            </HStack>
          </Box>

          {/* Related Posts */}
          <Box marginTop={8}>
            <Heading as='h3' fontSize='xl' color='white' marginBottom={4}>
              Related Posts
            </Heading>
            <Box
              display={{ base: 'flex', md: 'grid' }}
              flexDir={{ base: 'column', md: 'row' }}
              gridTemplateColumns={{ md: 'repeat(3, 1fr)' }}
              gap={4}>
              {relatedPosts.map((post, index) => (
                <Post key={index} post={post as iPost} type='secondary' />
              ))}
            </Box>
          </Box>
        </section>

        {/* Sidebar */}
        <Box
          as='section'
          display={{ base: 'none', lg: 'flex' }}
          flexDir='column'
          gap={1}>
          <Heading
            as='h4'
            fontFamily='var(--font-space-grotesk)'
            fontSize='18px'
            fontWeight={600}
            color='white'>
            Most Viewed
          </Heading>

          {relatedPosts.map((post, index) => (
            <Box key={index}>
              <MostPopularPost title={post.title} image={post.image} />
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
