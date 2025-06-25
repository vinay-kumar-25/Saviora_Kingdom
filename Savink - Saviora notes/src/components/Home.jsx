import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import { addnotii, updatenotii } from "../js/slices";
import { notiislice } from "../js/slices";
import toast from "react-hot-toast";
import { nanoid } from "@reduxjs/toolkit";
const Home = () => {
  const navigate = useNavigate();
  // first time load the notiis present in the localstorage
  useEffect(() => {
    console.log("first time home mounted");
    dispatch(notiislice.actions.loadfromlocalstorage());
  }, []);

  const allnotiis = useSelector((state) => state.notii.notiis);
  const [title, settitle] = useState("");
  const [value, setvalue] = useState("");
  const [searchparams] = useSearchParams();
  const paste_id = searchparams.get("paste_id");
  console.log("paste id for update is ", paste_id);

   useEffect(() => {
    console.log("useEffect: Checking paste_id for update. Current paste_id:", paste_id);

    if (paste_id) {
      const notii_to_update = allnotiis.find((paste) => paste.id === paste_id);

      if (notii_to_update) {
        settitle(notii_to_update.title);
        setvalue(notii_to_update.value);
        console.log("Fields populated for update:", notii_to_update.title);
      } else {
        console.log("Note to update not found. Clearing fields and navigating to home.");
        settitle("");
        setvalue("");
        navigate("/", { replace: true });
      }
    } else {
      console.log("Paste_id is null. Clearing input fields for new note creation.");
      settitle("");
      setvalue("");
    }
  }, [allnotiis, paste_id, navigate]);

  const dispatch = useDispatch();

  const addnote = () => {
    if (title.trim() === "") {
      toast("Give the title");
      return;
    }
    if (value.trim() === "") {
      toast("Write the note first");
      return;
    }

    const payload = {
      t: title,
      v: value,
      i: paste_id || nanoid(),
    };
    if (paste_id) {
      dispatch(updatenotii(payload));
    } else {
      dispatch(addnotii(payload));
    }

    navigate("/",{replace:true});
    settitle("");
    setvalue("");
  };

  return (
    <div className="text-white w-full place-self-center flex justify-center flex-col items-center gap-8 text-2xl ">
      <div className="flex gap-4 h-16 w-full  justify-between">
        <input
          className="font-medium flex-1/2 w-auto bg-primaryYellow text-primaryGreen border-primaryYellow border-2 rounded-xl  focus:border-primaryGreen outline-0 p-1 px-2"
          type="text"
          value={title}
          placeholder="Enter Title..."
          onChange={(e) => settitle(e.target.value)}
        />
        <button
          onClick={addnote}
          className=" text-lg border-2 border-primaryYellow  rounded-xl p-2 text-primaryYellow hover:text-primaryGreen hover:border-primaryGreen px-4 font-semibold "
        >
          {paste_id ? "Update Note" : "Create Note"}
        </button>
      </div>
      <textarea
        value={value}
        placeholder="Enter your note here..."
        className="border-2 bg-primaryGreen w-full font-medium rounded-2xl p-4 h-[60vh] border-primaryYellow text-primaryYellow text-primaryYellow outline-0 "
        onChange={(e) => setvalue(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Home;
