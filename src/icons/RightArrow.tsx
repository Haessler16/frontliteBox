import * as React from 'react'

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
