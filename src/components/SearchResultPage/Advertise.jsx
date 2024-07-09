import Image from 'next/image'
import React from 'react'

const Advertise = () => {
  return (
    <div className='w-full h-full 2xl:flex xl:hidden lg:flex hidden flex-col gap-2'>
      <Image alt='ads' width={160} height={600} src='/images/ads/ad.jfif' />
      <Image alt='ads' width={160} height={600} src='/images/ads/ad.jfif' />
      <Image alt='ads' width={160} height={600} src='/images/ads/ad.jfif' />
    </div>
  )
}

export default Advertise