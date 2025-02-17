import * as React from 'react'

export const UptArrow = ({
  color = '#000',
  width = 24,
  height = 24,
}: {
  color?: string
  width?: number
  height?: number
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    fill='none'
    viewBox='0 0 24 24'>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M12 21V3m0 0 8.5 8.5M12 3l-8.5 8.5'
    />
  </svg>
)
export const RightArrow = ({ color = '#D8F34E' }: { color?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={10}
    fill='none'
    viewBox='0 0 20 10'>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M15.25 1.25 19 5m0 0-3.75 3.75M19 5H1'
    />
  </svg>
)
