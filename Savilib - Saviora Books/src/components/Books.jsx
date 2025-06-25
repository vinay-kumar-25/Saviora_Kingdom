import React from 'react'
import Add_book_popup from './Add_book_popup'
import { useState } from 'react'

  
const Books = (props) => {
return (
    <div id={props.id_name}  className=" w-full flex flex-col  h-80 rounded-2xl group justify-between border border-primaryYellow hover:border-primaryOrange  overflow-hidden grow ">
      <div className="w-full h-2/12 py-2 text-primarygrey flex justify-between px-8 items-center duration-300 group-hover:bg-primaryOrange group-hover:text-primarywhite font-semibold text-xl bg-primaryYellow">{props.title}
      <button onClick={()=>{props.bookaddhandle(`${props.title}`)}} className="group-hover:bg-primaryYellow  rounded-full h-10 w-10 text-2xl font-semibold group-hover:text-primaryOrange text-primaryYellow  hover:text-primaryGreen bg-primaryGreen duration-300 flex justify-center items-center">+</button></div>
      <div className=" h-10/12 w-full bg-primarywhite bg-cover bg-center transition-all duration-300"></div>
    </div>
  )
}


export default Books
