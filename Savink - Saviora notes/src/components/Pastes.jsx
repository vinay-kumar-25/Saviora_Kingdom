import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notiislice } from "../js/slices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { faCalendar, faCopy, faCut, faDeleteLeft, faDumpster, faEye, faLink, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Pastes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setsearch] = useState("");
  const notiilist = useSelector((state) => state.notii.notiis);

  const filterednotiis = search
    ? notiilist.filter((noti) =>
        noti.title.toLowerCase().includes(search.toLowerCase())||noti.value.toLowerCase().includes(search.toLowerCase())
      )
    : notiilist;
  // first time load the notiis present in the localstorage
  useEffect(() => {
    console.log("first time paste mounted");
    dispatch(notiislice.actions.loadfromlocalstorage());
  }, []);
  const deletenotii = (id) => {
    dispatch(notiislice.actions.deletenotii({ id }));
  };
  //handle copy
  const handlecopy = (val) => {
     navigator.clipboard.writeText(val);
     toast.success("Note copied to clipboard!");
  };
  const edithandler = (notid) => {
    navigate(`/?paste_id=${notid}`);
  };
  const handleview =(notid)=>{
    navigate(`/view?paste_id=${notid}`);
  }
  return (
    <div className="flex w-full gap-4 flex-col overflow-hidden ">
      {/* search bar */}
      <input
        placeholder="search here...."
        className="w-full   border-2  border-primaryGreen bg-primaryGreen placeholder:text-whitee text-primaryYellow font-semibold  outline-0 p-4 rounded-2xl"
        onChange={(e) => setsearch(e.target.value)}
      />
     <div className=" w-full overflow-y-auto flex-1/2 snap-mandatory pr-4 ">
      {filterednotiis.map((singlenoti) => (
        // complete card note l
        <div className=" pl-3 flex relative flex-col w-full  gap-2 rounded-2xl overflow-hidden mb-4 border-2 transition-all duration-300 group border-primaryYellow hover:border-primaryGreen">
          <div className="absolute top-0 transition-all duration-300 left-0 bg-primaryYellow w-5 h-full group-hover:bg-primaryGreen"></div>
          {/* top section */}
          <div className="w-full top-0 p-2  flex justify-between">
            <div className="text-xl pl-4 font-semibold  text-primaryOrange">
              {singlenoti.title}
            </div>
            <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <button
                className="px-2 border rounded-sm py-2 w-9 flex justify-center items-center h-10 transition-all duration-300 hover:text-primaryGreen  text-primaryYellow border-primaryYellow  hover:border-primaryGreen"
                onClick={() => {
                  edithandler(singlenoti.id);
                }}
              >
               <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
              </button>
              <button onClick={()=>{handleview(singlenoti.id)}} className="px-2 border rounded-sm py-2 w-9 flex justify-center items-center transition-all duration-300 h-10 hover:text-primaryGreen text-primaryYellow border-primaryYellow   hover:border-primaryGreen">
                <FontAwesomeIcon icon={faEye}/>
              </button>
              <button
                className="px-2 border rounded-sm py-2 w-9 flex justify-center items-center h-10 transition-all duration-300 hover:text-primaryOrange text-primaryYellow border-primaryYellow hover:border-primaryOrange"
                onClick={() => {
                  deletenotii(singlenoti.id);
                }}
              >
                <FontAwesomeIcon icon={faTrash}/>
              </button>
              <button
                className="px-2 border rounded-sm py-2 w-9 flex justify-center items-center h-10 transition-all duration-300 hover:text-primaryGreen text-primaryYellow border-primaryYellow   hover:border-primaryGreen"
                onClick={() => handlecopy(singlenoti.value)}
              >
                <FontAwesomeIcon icon={faCopy}/>
              </button>
              <button className="px-2 border rounded-sm py-2 w-9 flex justify-center items-center transition-all duration-300 h-10 hover:text-primaryGreen text-primaryYellow border-primaryYellow   hover:border-primaryGreen">
                <FontAwesomeIcon icon={faLink}/>
              </button>
            
          </div>
          <div className="text-primaryOrange  font-semibold gap-2 flex justify-end items-center text-sm px-2">
            <FontAwesomeIcon icon={faCalendar}/> {singlenoti.date}
          </div></div>
          </div>
          {/* down note section  */}
          
            <div className="text-primaryGreen font-semibold pb-4 whitespace-pre-wrap px-6">{singlenoti.value}</div>
         
        
        </div>
      ))}
      </div>
    </div>
  );
};

export default Pastes;
