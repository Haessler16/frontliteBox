'use client'
import { useState } from 'react'
import {
  Box,
  Heading,
  Input,
  Button,
  DialogBackdrop,
  DialogBody,
  DialogContent,
  DialogRoot,
  DialogTrigger,
  Text,
  Center,
  Progress,
  FileUploadFileChangeDetails,
  HStack,
} from '@chakra-ui/react'
import { LiteButton } from './ui/Button'
import { colors } from '@/theme'
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from './ui/file-upload'

import { RightArrow, UptArrow } from '@/icons/Arrows'

import { IoCloseOutline } from 'react-icons/io5'
import { CheckIcon } from '@/icons/Check'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { api } from '@/config/urlApi'
import Topics from '@/constants/Topics'

export const Modal = ({
  open,
  setOpen,
  refetch,
}: {
  open: boolean
  setOpen: (open: boolean) => void
  refetch: () => void
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm()
  const [uploadProgress, setUploadProgress] = useState<number | undefined>(
    undefined,
  )
  const [imageString, setImageString] = useState<string | undefined>(undefined)
  const [rejectedFiles, setRejectedFiles] = useState<boolean>(false)
  const [internalError, setInternalError] = useState<string | undefined>(
    undefined,
  )

  const handleFileUpload = (file: File) => {
    const reader = new FileReader()

    reader.onloadstart = () => {
      setUploadProgress(0)
    }

    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100
        setUploadProgress(progress)
      }
    }

    reader.onload = () => {
      setUploadProgress(100)
      const base64String = reader.result as string
      setImageString(base64String)
    }

    reader.readAsDataURL(file)
  }

  const onSubmit = async (data: { title: string }) => {
    const { topics } = Topics()
    const filteredTopics = topics.filter((topic) => topic.title !== 'All')
    const randomTopic =
      filteredTopics[Math.floor(Math.random() * filteredTopics.length)]

    const post = {
      title: data.title,
      image: imageString,
      tags: randomTopic.title,
      readTime: Math.floor(Math.random() * 30) + 1,
      authorName: 'Haessler',
      authorImage: `https://ui-avatars.com/api/?name=Haessler`,
    }

    try {
      await axios.post(`${api}posts`, post)
      refetch()
      setOpen(false)
    } catch (error) {
      setInternalError('Error creating post')
      console.log(error)
      setUploadProgress(undefined)
      setRejectedFiles(false)
      setImageString(undefined)
    }
  }

  return (
    <DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DialogBackdrop />
      <DialogTrigger asChild>
        <Button bg={'transparent'} display='flex' alignItems='center'>
          <Text
            color='white'
            fontSize='sm'
            fontWeight={500}
            fontFamily='var(--font-space-grotesk)'>
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
        height={isSubmitSuccessful ? 'auto' : '600px'}
        display='flex'
        alignSelf='center'
        justifySelf='center'
        bg={colors.neonGreen}
        border='none'
        boxShadow='none'
        borderRadius={0}
        padding={0}
        margin={0}>
        <DialogBody p={10} position='relative'>
          <Box
            display='flex'
            justifyContent='flex-end'
            w='100%'
            onClick={() => setOpen(false)}>
            <IoCloseOutline color={colors.black} size={50} />
          </Box>

          {isSubmitSuccessful ? (
            <Center flexDirection='column' gap={10}>
              <Heading
                color='black'
                fontWeight={500}
                fontSize='35px'
                lineHeight={'42px'}
                textAlign='center'>
                Your post was successfully uploaded!
              </Heading>

              <LiteButton variant='black' onClick={() => setOpen(false)}>
                Done
              </LiteButton>
            </Center>
          ) : (
            <>
              <Heading
                color='black'
                fontWeight={500}
                fontSize='35px'
                lineHeight={'42px'}
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

              <form
                onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
                <Input
                  {...register('title', {
                    required: 'Este campo es requerido',
                  })}
                  placeholder='Post Title'
                  bg={colors.white}
                  color={colors.black}
                  borderRadius={0}
                  padding='5px 16px'
                  mt={10}
                  height='48px'
                  border='2px solid'
                  borderColor={colors.black}
                  _placeholder={{
                    color: colors.gray,
                    fontSize: '16px',
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 500,
                  }}
                  _hover={{
                    outline: '2px solid',
                    outlineColor: colors.purple,
                    boxShadow: `0 0 0 2px ${colors.purple}`,
                  }}
                  _focus={{
                    outline: 'none',
                    border: '2px solid',
                    borderColor: colors.black,
                    boxShadow: 'none',
                  }}
                />
                {errors.title && (
                  <Text
                    color='red'
                    fontSize='12px'
                    fontFamily='var(--font-space-grotesk)'>
                    {errors.title.message as string}
                  </Text>
                )}

                {uploadProgress === undefined && !rejectedFiles && (
                  <FileUploadRoot
                    mt={2}
                    accept={['image/png', 'image/jpeg']}
                    onFileChange={(data: FileUploadFileChangeDetails) => {
                      if (data.acceptedFiles.length > 0) {
                        handleFileUpload(data.acceptedFiles[0])
                      }
                      if (data.rejectedFiles.length > 0) {
                        setRejectedFiles(true)
                      }
                    }}>
                    <FileUploadTrigger asChild>
                      <LiteButton variant='greenOutline' width='full'>
                        <Box
                          display='flex'
                          justifyContent='center'
                          alignItems='center'
                          gap={2}>
                          <Text
                            fontSize='16px'
                            fontWeight={500}
                            fontFamily='var(--font-space-grotesk)'>
                            Upload image
                          </Text>
                          <UptArrow width={20} height={20} />
                        </Box>
                      </LiteButton>
                    </FileUploadTrigger>

                    <FileUploadList />
                  </FileUploadRoot>
                )}

                {uploadProgress &&
                  uploadProgress > 0 &&
                  uploadProgress <= 100 &&
                  !rejectedFiles && (
                    <Box mt={4} display='flex' flexDirection='column' gap={2}>
                      {uploadProgress > 0 && uploadProgress < 100 && (
                        <Text
                          color='black'
                          fontSize='14px'
                          fontWeight={500}
                          fontFamily='var(--font-space-grotesk)'>
                          Loading Image {uploadProgress}%
                        </Text>
                      )}
                      {uploadProgress === 100 && (
                        <Box display='flex' alignItems='center' gap={2}>
                          <Text
                            color='black'
                            fontSize='14px'
                            fontWeight={500}
                            fontFamily='var(--font-space-grotesk)'>
                            Upload successful
                          </Text>
                          <CheckIcon />
                        </Box>
                      )}
                      <Progress.Root value={uploadProgress} size='sm'>
                        <Progress.Track>
                          <Progress.Range
                            backgroundColor='black'
                            borderRadius={0}
                          />
                        </Progress.Track>
                      </Progress.Root>
                    </Box>
                  )}
                {rejectedFiles && (
                  <Box mt={4} display='flex' flexDirection='column' gap={2}>
                    <Text
                      color='black'
                      fontSize='14px'
                      fontWeight={500}
                      fontFamily='var(--font-space-grotesk)'>
                      Failed to upload your file
                    </Text>

                    <Progress.Root value={100} size='sm'>
                      <Progress.Track>
                        <Progress.Range
                          backgroundColor='red'
                          borderRadius={0}
                        />
                      </Progress.Track>
                    </Progress.Root>
                    <HStack justifyContent='flex-end'>
                      <Button
                        display='flex'
                        justifyContent='flex-end'
                        bg='transparent'
                        border='none'
                        width='auto'
                        p={0}
                        onClick={() => setRejectedFiles(false)}>
                        <Text
                          textAlign='end'
                          color='black'
                          fontSize='14px'
                          fontWeight={500}
                          fontFamily='var(--font-space-grotesk)'>
                          Retry
                        </Text>
                      </Button>
                    </HStack>
                  </Box>
                )}

                <Center
                  position='absolute'
                  bottom={5}
                  left={0}
                  right={0}
                  px={10}>
                  <LiteButton variant='black' width='full' type='submit'>
                    Confirm
                  </LiteButton>
                </Center>
              </form>
            </>
          )}

          {internalError && (
            <Text
              color='red'
              fontSize='14px'
              fontWeight={500}
              fontFamily='var(--font-space-grotesk)'>
              {internalError}
            </Text>
          )}
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  )
}
