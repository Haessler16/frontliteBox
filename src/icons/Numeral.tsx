import * as React from 'react'

export const Numeral = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}>
    <path fill='#D8F34E' d='M23.335 10.413v3.172H0v-3.172z' />
    <path fill='#D8F34E' d='M13.277 23.5h-3.219V.5h3.22z' />
    <path fill='#D8F34E' d='m21.057 19.01-2.276 2.244L2.28 4.99l2.276-2.243z' />
    <path
      fill='#D8F34E'
      d='M4.555 21.253 2.278 19.01l16.5-16.264 2.277 2.244z'
    />
  </svg>
)
