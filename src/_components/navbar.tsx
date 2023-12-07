import Link from 'next/link'
import React from 'react'
import Logo from '../../public/logo.svg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className=''>
        <div className='flex justify-between items-center h-16 px-8 lg:px-20  shadow-md'>
            <span className='text-[#3366CC] font-black flex md:text-[28.777px] md:leading-[ 25.899px] items-center justify-center'><span className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex items-center justify-center'><Image src={Logo} alt="logo"  /> </span><span>VoteMe</span></span>
            <div className='flex space-x-10'> 
            {/*<Link href="/" className='text-sm font-medium leading-5 active:font-black' >
                    Home
                </Link>
                <Link href="/" className='font-medium leading-5 active:font-black'>
                    Verification Process
                </Link>
                <Link href="/" className='font-medium leading-5 active:font-black'>
                    Vote
                </Link>
            </div>
  <div>*/}
            <button className='py-1 px-3 lg:py-3 lg:px-[25px]   bg-[#008000] text-[#FAFAFA] rounded-lg md:rounded-xl text-[14px] shadow-md shadow-[#2E2F35]'>
               <Link href="/connect-metamask">Get Started</Link>
            </button>
            </div>
        </div>

    </div>

  )
}

export default Navbar