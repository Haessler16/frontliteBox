import { UptArrow } from '@/icons/Arrows'

import {
  Box,
  Heading,
  Input,
  Button,
  DialogBackdrop,
  FileUploadRoot,
  FileUploadTrigger,
  DialogBody,
  DialogContent,
  DialogRoot,
  DialogTrigger,
  Text,
  Center,
} from '@chakra-ui/react'
import { LiteButton } from './ui/Button'
import { colors } from '@/theme'
import { FileUploadList } from './ui/file-upload'
import { RightArrow } from '@/icons/Arrows'
import { IoCloseOutline } from 'react-icons/io5'

export const Modal = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) => (
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
      <DialogBody p={10} position='relative'>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          commodo libero.
        </Text>

        <Input
          placeholder='Post Title'
          bg={colors.white}
          color={colors.black}
          borderRadius={0}
          padding='5px 16px'
          mb={5}
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

        <FileUploadRoot>
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

        <Center position='absolute' bottom={5} left={0} right={0} px={10}>
          <LiteButton variant='black' width='full'>
            Confirm
          </LiteButton>
        </Center>
      </DialogBody>
    </DialogContent>
  </DialogRoot>
)
