import Image from 'next/image'
import React from 'react'
import Lagos from '../../public/lagosElection.png'
import Youngsters from '../../public/youngStars.png'
import Women from '../../public/image 1 (2).png'

const ElectionNews = () => {
  return (
    <div className='px-20 mx-auto'>
        <div className='mx-auto'>
            <p>Election News</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
                <div className='col-span-1 w-[400px] mx-auto'>
                    <Image src={Lagos} alt='election news'  />
                    <p>Lagos State Bi-Election</p>
                </div>
                <div  className='col-span-1 w-[400px] mx-auto'>
                    <Image src={Youngsters} alt='election news'  />
                    <p>Young Tech Investors</p>
                </div>
                <div  className='col-span-1 w-[400px] mx-auto'>
                    <Image src={Women} alt='election news'  />
                    <p>Women in Blockchain</p>
                </div>
            </div>
        </div>
        <div>
            <p>Election News</p>
        </div>
    </div>
  )
}

export default ElectionNews 