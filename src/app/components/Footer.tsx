import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>

        <div className='font-[family-name:var(--font-geist-sans)] relative bg-[#faedcd] h-[200px] w-full md:h-auto flex justify-between md:justify-around items-center'>
            <Image src={'/cartoon-character-with-the-desk.png'} alt='logo' height={180} width={150} className='md:h-[350px] md:w-[350px]' data-aos="zoom-in" data-aos-duration="1000"/>
            <Image src={'/porttext.png'} alt='Portfolio Text' height={180} width={220} className='md:h-[200px] md:w-[450px]' data-aos="zoom-in" data-aos-duration="1000"/>
            <span className='text-red-500 absolute text-center font-extrabold bottom-12 right-16 text-[10px] md:font-extrabold md:text-xs md:bottom-20 md:right-[310px]'>Made By Zubair <br />Copyright ©2024</span>
        </div> 
    </div>
  )
}

export default Footer