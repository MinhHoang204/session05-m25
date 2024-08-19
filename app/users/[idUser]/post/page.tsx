import React from 'react'

export default function page(props:any) {
    const {params} = props;
    console.log("11111", props);
    const posts = [
        {
            content: "nha ba nu",
            idPost: 155,
            idUser: 1
        },
        {
            content: "hoc lap trinh!",
            idPost: 156,
            idUser: 2
        },
        {
            content: "hoc framwork nextjs",
            idPost: 157,
            idUser: 1
        }
    ]
    let postFilter = posts.filter((item)=>{
        return item.idUser == params.idUser
    })
    console.log("postFilter", postFilter);
  return (
    <div>trang danh sach bai viet cua user co id la: {params.idUser}
        {
            postFilter.map((item, index)=>{
                return <li key={item.idPost}>{item.content}</li>
            })
        }
    </div>
  )
}