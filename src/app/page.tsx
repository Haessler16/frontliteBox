'use client'
import { useEffect, useState } from 'react'

import {
  Container,
  Text,
  Button,
  HStack,
  Center,
  Card,
  IconButton,
  Spacer,
  VStack,
  Heading,
  Box,
  DialogBody,
  DialogContent,
  DialogRoot,
  DialogTrigger,
  DialogBackdrop,
} from '@chakra-ui/react'

import axios from 'axios'

import { colors } from '@/theme'
import { RightArrow } from '@/icons/RightArrow'
import { MainTitle } from '@/components/MainTitle'
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6'
import { LiteButton } from '@/components/ui/Button'

import { Post } from '@/components/Post'
import { LiteTagSelector } from '@/components/ui/Tags'
import { IoCloseOutline } from 'react-icons/io5'
interface Post {
  id: string
  title: string
  image: string
  // Add other static fields as needed
}

export default function Home() {
  // const [posts, setPosts] = useState<Post[]>([])
  // const [page, setPage] = useState(1)

  const [open, setOpen] = useState(false)
  const [selectedTag, setSelectedTag] = useState<string[]>(['All'])

  // useEffect(() => {
  //   const getPosts = async () => {
  //     // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //     const { data } = await axios.get(
  //       'https://postlitebox.onrender.com/posts?limit=10&offset=0',
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     )
  //   }
  //   getPosts()
  // }, [])

  return (
    <Container maxW='md' p={4} height={'100vh'} minH='100vh'>
      {/* Header */}
      <HStack justify='space-between' marginBottom={4}>
        <MainTitle />

        <DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
          <DialogBackdrop />
          <DialogTrigger asChild>
            <Button bg={'transparent'} display='flex' alignItems='center'>
              <Text color='white' fontSize='sm' fontWeight={500}>
                New Post
              </Text>

              <RightArrow />
            </Button>
          </DialogTrigger>

          <DialogContent
            position='absolute'
            top={0}
            left={0}
            right={0}
            bottom={0}
            width={{ base: '90%', sm: '330px', md: '640px' }}
            height='600px'
            display='flex'
            alignSelf='center'
            justifySelf='center'
            bg={colors.neonGreen}
            border='none'
            boxShadow='none'
            borderRadius={0}
            padding={0}
            margin={0}>
            <DialogBody p={10}>
              <Box
                display='flex'
                justifyContent='flex-end'
                w='100%'
                onClick={() => setOpen(false)}>
                <IoCloseOutline color={colors.black} size={50} />
              </Box>
              <Heading
                color='black'
                fontWeight={500}
                fontSize='35px'
                textAlign='center'>
                Upload your post
              </Heading>

              <Text
                mt={5}
                color={colors.gray}
                fontWeight={400}
                fontSize='16px'
                lineHeight={'32px'}
                textAlign='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse commodo libero.
              </Text>

              <LiteButton variant='black' width='full' marginTop={5}>
                Confirm
              </LiteButton>
            </DialogBody>
          </DialogContent>
        </DialogRoot>
      </HStack>

      {/* Main Section */}

      <Post
        title='Your Kid May Already Be Watching AI-Generated Videos on YouTube'
        image='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        tagTitle='Crypto'
        readTime='6 mins'
        type='primary'
      />

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

      <VStack gap={4}>
        <Post
          title='Dictators Used Sandvine Tech to Censor the Internet. The US
              Finally Did Something About It'
          image='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          tagTitle='Crypto'
          readTime='6 mins'
          type='secondary'
        />
        <Post
          title='Dictators Used Sandvine Tech to Censor the Internet. The US
              Finally Did Something About It'
          image='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          tagTitle='Crypto'
          readTime='6 mins'
          type='secondary'
        />

        <Card.Root bg={colors.purple} p={10} borderRadius={2}>
          <Heading color='white' fontWeight={400}>
            Sign up for our newsletter{' '}
            <span style={{ fontWeight: 600 }}>and get daily updates</span>
          </Heading>
          <LiteButton variant='primary' width='full' marginTop={5}>
            Subscribe
          </LiteButton>
        </Card.Root>

        <Post
          title='Here Come the AI Worms'
          image='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          tagTitle='Crypto'
          readTime='6 mins'
          type='secondary'
        />
      </VStack>

      <LiteButton variant='primary' width='full' marginY={10}>
        Load More
      </LiteButton>

      <Spacer />

      {/* Footer */}
      <Card.Root bg={colors.purple} borderRadius={2} p={10} maxH={342} h='100%'>
        <Center flexDir='column' height='100%' justifyContent='space-between'>
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

          <Text color='white' textAlign='center' fontSize='sm'>
            © Copyright Lite-Tech. <br /> <br />
            All rights reserved.
          </Text>
        </Center>
      </Card.Root>
    </Container>
  )
}
