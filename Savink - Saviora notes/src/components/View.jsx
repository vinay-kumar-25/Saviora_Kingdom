import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { notiislice } from "../js/slices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRotateLeft, faBackspace, faBackward, faCopy, faPencil } from "@fortawesome/free-solid-svg-icons";

const View = () => {
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();
  const paste_id = searchparams.get("paste_id");
  const notiilist = useSelector((state) => state.notii.notiis);
  const note = notiilist.find((n) => n.id === paste_id);

  const title = note?.title || "";
  const value = note?.value || "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    toast.success("Note copied to clipboard!");
  };

  return (
    <div className="text-white w-full  max-h-8/12 h-full  flex justify-center flex-col items-center gap-8 text-2xl ">
      <div className="flex gap-4 h-16 w-full justify-between">
        <input
          readOnly
          className="font-medium flex-1/2  bg- text-primaryGreen border-primaryYellow border-2 rounded-xl   outline-0 p-1 px-2"
          type="text"
          value={title}
          placeholder="Note Title"
        />
        <button
          onClick={()=>{navigate(`/?paste_id=${paste_id}`)}}
          className="text-lg border-2 border-primaryYellow rounded-xl p-2 text-primaryYellow hover:text-primaryGreen hover:border-primaryGreen px-4 font-semibold"
        >
         < FontAwesomeIcon icon={faPencil}/>
        </button>
        <button
          onClick={copyToClipboard}
          className="text-lg border-2 border-primaryYellow rounded-xl p-2 text-primaryYellow hover:text-primaryGreen hover:border-primaryGreen px-4 font-semibold"
        >
          <FontAwesomeIcon className="text-2xl" icon={faCopy}/>
        </button>
        <button
          onClick={()=>{navigate("/pastes_list")}}
          className="text-lg border-2 border-primaryYellow rounded-xl p-2 text-primaryYellow hover:text-primaryGreen hover:border-primaryGreen px-4 font-semibold"
        >
          <FontAwesomeIcon icon={faArrowLeft}/>
        </button>
      </div>

      <div
        className="border-2 w-full font-medium text-xl  rounded-2xl p-4 flex-1/2  border-primaryGreen text-stone-500 outline-0 whitespace-pre-wrap"
      >
        {value}
      </div>
    </div>
  );
};

export default View;
