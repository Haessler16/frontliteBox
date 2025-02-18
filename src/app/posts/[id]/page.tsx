'use client'
import { Container, Text, HStack, Box, Heading, Image } from '@chakra-ui/react'
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
      title:
        'The first rule of the extreme dishwasher loading facebook group is...',
      tags: 'Tech companies',
      readTime: '6 mins',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title:
        'Binance’s Top Crypto Crime Investigator Is Being Detained in Nigeria',
      tags: 'Crypto',
      readTime: '6 mins',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: 'The AI-Generated Video Boom Is Here',
      tags: 'Security',
      readTime: '6 mins',
      image: 'https://litetech-assets.s3.us-east-2.amazonaws.com/Image.png',
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
      {/* Hero Post */}
      <Box height='100%' marginBottom={8}>
        <Post
          post={currentPost as unknown as iPost}
          type='primary'
          isMain={true}
        />
      </Box>

      <Box display={'grid'} gridTemplateColumns={{ lg: '0.18fr 1fr 0.3fr' }}>
        {/* Share Section */}
        <Box marginBottom={8}>
          <Heading as='h4' fontSize='sm' color='white' marginBottom={4}>
            Share on
          </Heading>
          <HStack gap={4}>
            <FaLinkedinIn />
            <FaFacebookF />
            <FaXTwitter />
          </HStack>
        </Box>

        <section>
          {/* Post Content */}
          <Text
            color='white'
            fontSize='lg'
            fontWeight={600}
            lineHeight='tall'
            whiteSpace='pre-line'
            marginBottom={8}
            fontFamily='var(--font-space-grotesk)'>
            Curabitur sit amet sapien at velit fringilla tincidunt porttitor
            eget lacus. Sed mauris libero, malesuada et venenatis vitae, porta
            ac enim.
          </Text>
          <Text
            color='white'
            fontSize='lg'
            lineHeight='tall'
            fontWeight={300}
            whiteSpace='pre-line'
            marginBottom={8}
            fontFamily='var(--font-space-grotesk)'>
            Curabitur sit amet sapien at velit fringilla tincidunt porttitor
            eget lacus. Sed mauris libero, malesuada et venenatis vitae, porta
            ac enim. Aliquam erat volutpat. Cras tristique eleifend dolor, et
            ultricies nisl feugiat sed. Pellentesque blandit orci eu velit
            vehicula commodo. Phasellus imperdiet finibus ex eget gravida.
            Maecenas vitae molestie dolor. Nulla hendrerit ipsum leo, in tempor
            urna interdum ut. Sed molestie sodales quam. Mauris sollicitudin
            metus at eros imperdiet, vitae pulvinar nunc condimentum.
            Pellentesque rhoncus, lacus sit amet mollis placerat, nulla lectus
            maximus justo, quis gravida elit augue id.
          </Text>

          <Image
            src={'https://litetech-assets.s3.us-east-2.amazonaws.com/Image.png'}
            alt='Post Image'
            marginBottom={8}
          />
          <Heading
            as='h3'
            fontSize='lg'
            color='white'
            marginBottom={4}
            fontFamily='var(--font-space-grotesk)'
            fontWeight={600}>
            Pellentesque venenatis arcu lectu
          </Heading>
          <Text
            color='white'
            fontSize='lg'
            lineHeight='tall'
            fontWeight={300}
            whiteSpace='pre-line'
            marginBottom={8}
            fontFamily='var(--font-space-grotesk)'>
            Pellentesque venenatis arcu lectu Maecenas iaculis et dolor ac
            laoreet. Curabitur placerat porta dolor. Quisque consectetur vitae
            odio ac posuere. Nullam tristique tellus purus, quis aliquet purus
            sodales sed. Sed hendrerit gravida augue luctus suscipit. Maecenas
            id faucibus magna. Sed placerat orci ac orci blandit, at porta ante
            ornare. Praesent tristique sollicitudin fringilla. Morbi at laoreet
            enim, sed viverra ligula. Sed laoreet, elit vel faucibus semper,
            urna ante euismod sem, accumsan volutpat augue ante ut elit.
            Phasellus rutrum, nulla vitae euismod blandit,
          </Text>

          <Image
            src={
              'https://litetech-assets.s3.us-east-2.amazonaws.com/Image2.png'
            }
            alt='Post Image'
          />

          <Box
            borderLeft='4px solid'
            borderColor={colors.neonGreen}
            pl={4}
            my={8}>
            <Text
              color='white'
              fontSize='lg'
              lineHeight='tall'
              fontWeight={600}
              whiteSpace='pre-line'
              fontFamily='var(--font-space-grotesk)'>
              Commodo eget mi. In orci nunc, laoreet eleifend sem vel,
              suscipitlon lorem ipsum Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce vel sem in nunc porttitor dapibus a
              sollicitudin nunc. Sed lacinia nisl a magna congue, maximus
              tristique tellus finibus.
            </Text>
          </Box>
          <Heading
            as='h3'
            fontSize='lg'
            color='white'
            marginBottom={4}
            fontFamily='var(--font-space-grotesk)'
            fontWeight={600}>
            Nullam tristique tellus purus
          </Heading>
          <Text
            color='white'
            fontSize='lg'
            lineHeight='tall'
            fontWeight={300}
            whiteSpace='pre-line'
            fontFamily='var(--font-space-grotesk)'>
            Nullam tristique tellus purus Maecenas iaculis et dolor ac laoreet.
            Curabitur placerat porta dolor. Quisque consectetur vitae odio ac
            posuere. Nullam tristique tellus purus, quis aliquet purus sodales
            sed. Sed hendrerit gravida augue luctus suscipit. Maecenas id
            faucibus magna. Sed placerat orci ac orci blandit, at porta ante
            ornare. Praesent tristique sollicitudin fringilla. Morbi at laoreet
            enim, sed viverra ligula. Sed laoreet, elit vel faucibus semper,
            urna ante euismod sem, accumsan volutpat augue ante ut elit.
            Phasellus rutrum, nulla vitae euismod blandit, elit nisi placerat
            neque, vitae facilisis massa sapien a mi. Fusce sit amet blandit
            lectus.
          </Text>

          {/* Related Posts */}
          <Box marginY={8}>
            <HStack justify='space-between'>
              <Heading
                as='h3'
                fontSize='xl'
                color='white'
                fontFamily='var(--font-space-grotesk)'
                marginBottom={4}>
                Related Posts
              </Heading>
              <Modal open={open} setOpen={setOpen} />
            </HStack>

            <Box
              display={{ base: 'flex', md: 'grid' }}
              flexDir={{ base: 'column', md: 'row' }}
              gridTemplateColumns={{ md: 'repeat(3, 1fr)' }}
              minH={'350px'}
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
