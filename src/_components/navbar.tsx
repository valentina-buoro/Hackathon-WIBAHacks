import Link from 'next/link'
import React from 'react'
import Logo from '../../public/logo.svg'
import Image from 'next/image'
import { NavbarProps } from '@/app/types'




const Navbar = ({connected, connectToMetamask}: NavbarProps) => {
  return (
    <div className=''>
        <div className='flex justify-between items-center h-16 pl-8  pr-4 lg:pl-20  lg:pr-10 shadow-md'>
           <Link href='/'> <span className='text-[#3366CC] font-black flex md:text-[28.777px] md:leading-[ 25.899px] items-center justify-center cursor-pointer '><span className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex items-center justify-center'><Image src={Logo} alt="logo"  /> </span><span>TrustBallot</span></span></Link>
            <div className='hidden md:flex space-x-10'> 
            <Link href="/" className='text-sm font-medium leading-5 active:font-black' >
                    Home
                </Link>
                <Link href="/" className='font-medium leading-5 active:font-black'>
                Ongoing Election
                </Link>
                <Link href="/" className='font-medium leading-5 active:font-black'>
                Election News
                </Link>
                <Link href="/" className='font-medium leading-5 active:font-black'>
                Contact Us
                </Link>
                <Link href="/" className='font-medium leading-5 active:font-black'>
                FAQ
                </Link>

            </div>
  <div>
            <div className='flex gap-4'>
             
            <button className='py-1 px-3 lg:py-3 lg:px-[25px]   bg-[#008000] text-[#FAFAFA] rounded-lg md:rounded-xl text-[14px] shadow-md shadow-[#2E2F35]' onClick={connectToMetamask}>
               {connected? 'Connected': 'Get Started'}
            </button >
            {connected && <button className='py-1 px-3 lg:py-3 lg:px-[25px]   border-[#008000] text-[#008000] rounded-lg md:rounded-xl text-[14px] shadow-md shadow-[#2E2F35]' onClick={connectToMetamask}>
              View Election Results
            </button >}
            </div>
            </div>
        </div>

    </div>

  )
}

export default Navbar