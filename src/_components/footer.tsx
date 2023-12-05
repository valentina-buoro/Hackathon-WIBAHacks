import { Voltaire } from 'next/font/google'
import React from 'react'

const Footer = () => {
  return (
    <div className='px-20'>
        <div className='grid grid-cols-3 gap-5 px-10 py-14'>
            <div>
                <p>Banana Island, Ikoyi, Lagos State, Nigeria</p>
            </div>
            <div>
                <p>Home</p>
                <p>Verification Process</p>
                <p>Vote</p>
            </div>
            <div>
                <p>+234 815 456 7890</p>
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