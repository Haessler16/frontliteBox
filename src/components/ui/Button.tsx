// button.recipe.ts
import { chakra, defineRecipe } from '@chakra-ui/react'
import { colors } from '@/theme'

export const buttonRecipe = defineRecipe({
  base: {
    transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)',
    borderRadius: 'md',
    fontWeight: 'semibold',
    _focus: { transform: 'scale(1.03)' },
  },
  variants: {
    variant: {
      // Primary Variant
      primary: {
        bg: { base: '#D8F34E', md: '#D8F34E' },
        color: 'black',
        borderRadius: 0,
        padding: '5px 0',
        _hover: {
          bg: { base: '#000000', md: '#000000' },
          color: { base: 'white', md: 'white' },
          transform: 'scale(1.03)',
        },
        _focus: {
          boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
          bg: { base: '#D8F34E', md: '#D8F34E' },
          color: { base: 'black', md: 'black' },
          borderWidth: '2px',
          borderColor: 'black',
        },
        _active: {
          bg: { base: '#000000', md: '#000000' },
          color: { base: 'white', md: 'white' },
        },
      },
      // Secondary Variant
      secondary: {
        bg: { base: 'transparent', md: 'transparent' },
        color: colors.gray,
        borderRadius: 0,
        border: '1px solid',
        borderColor: colors.neonGreen,
        padding: '5px 0',
        _hover: {
          bg: { base: colors.neonGreen, md: colors.neonGreen },
          color: 'black',
          transform: 'scale(1.03)',
        },
        _focus: {
          boxShadow: '0 0 0 3px rgba(237, 242, 247, 0.6)',
          bg: { base: 'transparent', md: 'transparent' },
          color: colors.gray,
        },
        _active: {
          bg: { base: colors.neonGreen, md: colors.neonGreen },
          color: 'black',
        },
      },
      // Black Variant
      black: {
        bg: colors.black,
        color: colors.white,
        borderRadius: 0,
        padding: '5px 0',
        _hover: {
          bg: { base: colors.neonGreen, md: colors.neonGreen },
          color: colors.black,
          border: '1px solid',
          borderColor: colors.black,
          transform: 'scale(1.03)',
        },
        _focus: {
          boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.6)',
          bg: { base: colors.neonGreen, md: colors.neonGreen },
          color: colors.black,
          border: '1px solid',
          borderColor: colors.black,
        },
        _active: {
          bg: { base: colors.neonGreen, md: colors.neonGreen },
          color: colors.black,
          border: '1px solid',
          borderColor: colors.black,
        },
      },
      // Green Outline Variant
      greenOutline: {
        bg: colors.neonGreen,
        color: colors.black,
        border: '2px solid',
        borderColor: colors.black,
        borderRadius: 0,
        padding: '5px 0',
        _hover: {
          bg: { base: colors.black, md: colors.black },
          transform: 'scale(1.03)',
          color: colors.white,
        },
        _focus: {
          boxShadow: '0 0 0 3px rgba(72, 187, 120, 0.6)',
          bg: { base: colors.black, md: colors.black },
          color: colors.white,
        },
        _active: {
          bg: { base: colors.black, md: colors.black },
          color: colors.white,
        },
      },
      disabled: {
        bg: 'transparent',
        color: colors.gray,
        border: '2px solid',
        borderColor: colors.gray,
        cursor: 'not-allowed',
        opacity: 0.5,
        _hover: {
          bg: 'transparent',
          color: colors.gray,
        },
      },
    },
    size: {
      lg: {
        height: { base: '48px', md: '56px' },
        minWidth: { base: '120px', md: '160px' },
        fontSize: { base: 'md', md: 'lg' },
        padding: { base: '12px 24px', md: '16px 32px' },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'lg',
  },
})

export const LiteButton = chakra('button', buttonRecipe)
