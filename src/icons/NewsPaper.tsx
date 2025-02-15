import * as React from 'react'

export const NewsPaper = ({ color = '#8C8C8C' }: { color?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={17}
    fill='none'
    viewBox='0 0 16 17'>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4 4.5h5.333M4 7.167h8M8.667 9.833H12M8.667 12.5H12M1.333 14.767V2.233a.4.4 0 0 1 .4-.4h10.435a.4.4 0 0 1 .283.118l2.098 2.098a.4.4 0 0 1 .118.284v10.434a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 1.833V4.1a.4.4 0 0 0 .4.4h2.267'
    />
    <path
      fill={color}
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4 9.833V12.5h2V9.833H4Z'
    />
  </svg>
)
