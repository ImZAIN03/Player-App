import Image from 'next/image'; /* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { HiPencilSquare, HiOutlineArrowLeftOnRectangle } from "react-icons/hi2"
import { useRouter } from 'next/router';
const USER_IMAGE = "/Images/zee.jpeg"
function Header() {
  const router = useRouter() 
  const { data: session } = useSession()
  console.log("session", session)
  return (
    <div className='flex justify-between p-2 border-b-[2px]
    border-[#6497b1]'>
      <img src="/Images/logo.png"  
      alt="logo" 
      className='h-20 w-20'
      />
      <div className='flex gap-4'>
        <button onClick={()=>router.push('/create-post')} className='bg-gray-800 p-2 px-3
        text-white rounded-full'>
        <span className='hidden sm:block'>
        CREATE POST</span> 
        <HiPencilSquare 
        className='sm:hidden text-[20px]'/></button>
        {!session?<button className='bg-white
        text-black p-2 px-3 border-[2px]
        rounded-full border-gray-500' onClick={()=> signIn()}>
        <span className='hidden sm:block'>
        SIGN IN </span>
        <HiOutlineArrowLeftOnRectangle 
        className='sm:hidden text-20[px] text-black'/></button>
        :<button className='bg-white
        text-black p-2 px-3 border-[2px]
        rounded-full border-gray-500' onClick={()=> signOut()}>
        <span className='hidden sm:block'>
        SIGN OUT </span>
        <HiOutlineArrowLeftOnRectangle 
        className='sm:hidden text-20[px] text-black'/></button>}
      <Image src={session?session?.user?.image:USER_IMAGE} alt="Zain" 
      className='rounded-full'
      width={80} height={80}/>
      </div>
      
    </div>
  )
}

export default Header