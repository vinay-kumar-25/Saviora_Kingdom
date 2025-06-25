import React from "react";
function modifytheme(Bookname){
  let minibooks = document.querySelectorAll(".themebook");
  console.log("success")
 minibooks.forEach((book) => {
      book.textContent=`${Bookname}`
  }); }
const Add_book_popup = (props) => {
  return (
    <div id="add_book_popup_id" className="animate-rise_popup fixed gap-4  w-[40vw]  overflow-hidden self-center justify-self-center rounded-2xl shadow-2xl ">
      <div className="w-full h-12 bg-primaryGreen text-center flex items-center justify-center text-2xl font-semibold text-white">
        {props.title}
      </div>
      <div className="p-8 flex flex-col gap-4 justify-start   overflow-hidden self-center bg-primarywhite shadow-2xl">
        
        {/* book name input*/}
        <div className="flex w-full border rounded-2xl outline-0 hover:bg-stone-200 gap-4">
          <input
            className="w-full px-4 h-12   text-primaryGreen font-semibold rounded-2xl"
            placeholder="Enter the book name "
            type="text"
            onChange={e=>{modifytheme(e.target.value)}}
          />
        </div>
        {/* themes section  */}
             <div className="text-start  rounded-2xl mt-4">
        <div className=" px-4 text-primarygrey font-semibold text-xl"><span className="text-primaryGreen">Choose</span> <span className="text-primaryYellow">Your</span> <span className="text-primaryOrange">Theme</span></div>
        <div className="w-full px-4 flex justify-between items-center  h-50">

          <div  className="themebook aspect-[3/4] w-1/6 rounded-tr-3xl rounded-[5px] p-3 text-center text-xs flex justify-center items-center font-semibold hover:shadow-2xl duration-300 cursor-pointer text-primarygrey bg-gray-400"></div>
          <div  className="themebook aspect-[3/4] w-1/6 rounded-tr-3xl rounded-[5px] p-3 text-center text-xs flex justify-center items-center font-semibold hover:shadow-2xl duration-300 cursor-pointer text-primaryGreen bg-primaryYellow"></div>
          <div  className="themebook aspect-[3/4] w-1/6 rounded-tr-3xl rounded-[5px] p-3 text-center text-xs flex justify-center items-center font-semibold hover:shadow-2xl duration-300 cursor-pointer text-primarygrey bg-primaryOrange"></div>
          <div  className="themebook aspect-[3/4] w-1/6 rounded-tr-3xl rounded-[5px] p-3 text-center text-xs flex justify-center items-center font-semibold hover:shadow-2xl duration-300 cursor-pointer text-primaryYellow bg-primaryGreen"></div>
          <div  className="themebook aspect-[3/4] w-1/6 rounded-tr-3xl rounded-[5px] p-3 text-center text-xs flex justify-center items-center font-semibold hover:shadow-2xl duration-300 cursor-pointer text-primarywhite bg-primarygrey"></div>
        </div>
      </div>
      
      <input className="w-full file:text-primarywhite file:text-sm flex justify-center items-center file:px-2 file:h-12 file:font-semibold file-hover:bg-orange-500 file:duration-300 file:bg-primaryOrange file:rounded-l-2xl border rounded-2xl border-primaryOrange" onSubmit={console.log("book mil gyi !!!!")} type="file"/>
      <div className="w-full flex justify-between ">
      <button className="w-[30%] px-4 h-12 text-primaryGreen font-semibold hover:text-primaryYellow duration-300 bg-primaryYellow hover:bg-primaryGreen rounded-2xl">Submit</button>
      <button className="w-[30%] px-4 h-12 text-primarygrey font-semibold hover:text-primarywhite duration-300 bg-stone-200 hover:bg-primaryOrange rounded-2xl" onClick={props.bookaddhandle} >Cancel</button></div>
    
        
      </div>
    </div>
  );
};

export default Add_book_popup;
