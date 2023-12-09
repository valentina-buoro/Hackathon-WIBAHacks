import Image from 'next/image'
import React from 'react'
import Lagos from '../../public/lagosElection.png'
import Youngsters from '../../public/youngStars.png'
import Women from '../../public/women.png'
import News from '../../public/news.png'
import News2 from '../../public/news2.png'
import News3 from '../../public/news3.png'

const ElectionNews = () => {
  return (
    <div className='px-8 lg:px-20 mx-auto mt-24'>
        <div className='mx-auto'>
            <p className='text-[30px] md:text-[40px] lg:text-[63px] font-bold mb-14 text-center'>Ongoing <span className="text-[#008000]">Elections</span> </p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
                <div className='col-span-1 w-[280px] md:w-[400px] mx-auto text-center'>
                    <Image src={Lagos} alt='election news'  />
                    <p className='font-semibold text-2xl md:text-4xl mt-1 tracking-wider'>Lagos State Bi-Election</p>
                </div>
                <div  className='col-span-1 w-[300px] md:w-[400px] mx-auto text-center'>
                    <Image src={Youngsters} alt='election news'  />
                    <p className='font-semibold text-2xl md:text-4xl mt-1 tracking-wider '>Young Tech Investors</p>
                </div>
                <div  className='col-span-1 w-[300px] md:w-[400px] mx-auto text-center'>
                    <Image src={Women} alt='election news'  />
                    <p className='font-semibold text-2xl md:text-4xl mt-1 tracking-wider '>Women in Blockchain</p>
                </div>
            </div>
        </div>
        <div className='mx-auto mt-40'> 
            <p className='text-[30px] md:text-[40px] lg:text-[63px] font-bold mb-14 text-center' >Election News</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
                <div className='col-span-1 w-[280px] md:w-[363px] mx-auto text-left'>
                    <Image src={News} alt='election news'  />
                    <div>
                        <p className='font-bold text-[#2D3748] text-lg md:text-2xl'> The President Embezzled 10 M</p>
                        <p className='text-[#718096] font-normal text-sm md:text-base'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                        <div className='mt-8 flex justify-between'>
                            <span>May 20th 2020</span>
                            <span> Read More</span>
                        </div>
                    </div>
                </div>
                <div  className='col-span-1 w-[280px] md:w-[363px] mx-auto text-left'>
                    <Image src={News2} alt='election news'  />
                    <div>
                        <p className='font-bold text-[#2D3748] text-lg md:text-2xl'> The President Embezzled 10 M</p>
                        <p className='text-[#718096] font-normal text-sm md:text-base'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                        <div className='mt-8 flex justify-between'>
                            <span>May 20th 2020</span>
                            <span> Read More</span>
                        </div>
                    </div>
                </div>
                <div  className='col-span-1 w-[280px] md:w-[363px] mx-auto text-left'>
                    <Image src={News3} alt='election news'  />
                    <div>
                        <p className='font-bold text-[#2D3748] text-lg md:text-2xl'> The President Embezzled 10 M</p>
                        <p className='text-[#718096] font-normal text-sm md:text-base'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                        <div className='mt-8 flex justify-between'>
                            <span>May 20th 2020</span>
                            <span> Read More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ElectionNews 