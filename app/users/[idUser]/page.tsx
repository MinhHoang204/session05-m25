"use client"
import React from 'react'
/*
   trong next js chia làm
   1. client component
   2. server component 
 */
export default function UserDetail(props:any) {
    console.log("gia tri props", props)
    // destructoring
    const {params} = props;
  return (
    <div>
        trang thong tin chi tiet user co id la: {params.idUser}
    </div>
  )
}