import React from 'react'

const FooterList = ({title,data}) => {
  return (
    <ul className='flex flex-col gap-2'>
        <li className='md:text-lg text-xl text-black'>{title}</li>
        {data.map((item,index) => (
            <li key={index} className='md:text-sm text-lg text-[#1668e3] capitalize'>{item}</li>
        ))}
    </ul>
  )
}

export default FooterList