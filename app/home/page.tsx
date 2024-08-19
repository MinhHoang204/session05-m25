"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
export default function Home() {
    const router = useRouter();
    const loginUser=()=>{
        router.push("/auth/login");
    }
  return (
    <div className='flex gap-9'>
        trang home!
        <button onClick={loginUser}>login</button>
        <button>register</button>
    </div>
  )
}
