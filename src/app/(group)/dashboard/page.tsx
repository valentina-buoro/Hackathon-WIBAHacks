"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  const [user, setUser] = useState({
    email: '',
    message:'',
    full_name:''
  })
  useEffect(()=>{
    const fetchUser = async () => {
      const token = localStorage.getItem('access_token');
      try {
        axios.get('https://voting-basic.onrender.com/api/user', {
          headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            console.log(response);
            console.log(response.data.message)
            setUser(response.data.message)
            //setStores(response.data.stores[0])
            
           })
          .catch(error => {
            // Handle any errors or display appropriate message
            console.error(error);
          });
      } catch (error:any) {
        console.error('Error:', error.message);
      }
      //console.log(stores.address)
    };

    fetchUser();

  },[])
  return (
    <div className=" min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <main className="p-4 lg:w-3/5 mx-auto bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center ">WIBA TEAM 4</h1>
      <section>
      <Image src={ `https://ui-avatars.com/api/?name=${user?.full_name}&background=random`} alt="WIBA TEAM 4" className='rounded-full' width={40} height={40} />  
      <h3>Welcome {user.full_name}</h3>

      <div className='flex flex-col items-center justify-center gap-6'>
        <p>What would you like to do today?</p>
        <Link href=''>Create an election</Link>
        <Link href=''>Manage an election</Link>
      </div>
      </section>
      <section>

      </section>
      </main>
    </div>
  )
}

export default Page