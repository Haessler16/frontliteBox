import React from 'react'
import { colors } from '@/theme'
import { Tag } from '@chakra-ui/react'
import { IoCloseOutline } from 'react-icons/io5'

export const LiteTag = ({ title }: { title: string }) => {
  return (
    <Tag.Root
      bg={colors.neonGreen}
      rounded={50}
      shadowColor='none'
      px={3}
      py={2}>
      <Tag.Label color='black' fontSize='sm' fontWeight='bold'>
        {title}
      </Tag.Label>
    </Tag.Root>
  )
}

export const LiteTagSelector = ({
  title,
  isSelected,
  onClick,
}: {
  title: string
  isSelected: boolean
  onClick: () => void
}) => {
  return (
    <Tag.Root
      bg={isSelected ? colors.neonGreen : 'transparent'}
      border={isSelected ? 'none' : `1px solid ${colors.gray}`}
      rounded={50}
      shadowColor='none'
      px={3}
      py={2}
      transition='all 0.4s ease-in-out'
      _hover={{
        transform: 'scale(1.05)',
      }}
      onClick={onClick}>
      <Tag.Label
        color={isSelected ? 'black' : colors.gray}
        fontSize='sm'
        fontWeight={600}
        transition='all 0.2s ease-in-out'>
        {title}
      </Tag.Label>
      {isSelected && (
        <IoCloseOutline
          color={colors.black}
          size={22}
          style={{ marginLeft: -5 }}
        />
      )}
    </Tag.Root>
  )
}
