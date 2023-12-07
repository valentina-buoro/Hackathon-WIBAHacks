import { Voltaire } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Logo from '../../public/logo.svg'

const Footer = () => {
  return (
    <div className='px-20'>
        <div className='flex items-center justify-center border-b border-[#D9D9D9] pb-10 pt-6'>
            <Image src={Logo} width={100} height={100} alt='VoteMe Logo' />
        </div>
        <div className='grid grid-cols-3 gap-5 px-10 py-14'>
            <div>
                <p className='text-xl font-semibold '>Banana Island, Ikoyi, Lagos State, Nigeria</p>
            </div>
            <div className='text-xl font-medium flex flex-col space-y-10'>
                <p>Home</p>
                <p>Verification Process</p>
                <p>Vote</p>
            </div>
            <div className='text-xl font-medium flex flex-col space-y-8'>
                <p > +234 815 456 7890</p>
                <p>voteme@gmail.com</p>
            </div>
        </div>
        <div className='rounded-3xl bg-[#D9D9D9] py-6 px-5'>
            <div>
                <span>Site by VoteMe</span>
                <span>© 2023 - VoteMe. All rights reserved.</span>
            </div>
        </div>
    </div>
  )
}

export default Footer