import Link from 'next/link'
import React from 'react'
import Logo from '../../public/logo.svg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className=''>
        <div className='flex justify-between items-center h-16 px-20  shadow-md'>
            <Image src={Logo} alt="logo" width={50} height={50} />
            <div className='flex space-x-10'> 
            <Link href="/" className='font-medium leading-5 active:font-black' >
                    Home
                </Link>
                <Link href="/" className='font-medium leading-5 active:font-black'>
                    Verification Process
                </Link>
                <Link href="/" className='font-medium leading-5 active:font-black'>
                    Vote
                </Link>
            </div>
            <div>
            <button className='py-3 px-[5px] border-2 border-black bg-[#008000] text-[#FAFAFA] rounded-xl text-[14px] shadow-md shadow-[#2E2F35]'>
                Get Started
            </button>
            </div>
        </div>

    </div>

  )
}

export default Navbar