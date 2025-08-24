import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notiislice } from "../js/slices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { faCalendar, faCopy, faEye, faLink, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pastes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setsearch] = useState("");
  const notiilist = useSelector((state) => state.notii.notiis);

  // ✅ Filter notes based on search
  const filterednotiis = search
    ? notiilist.filter((noti) =>
        noti.title.toLowerCase().includes(search.toLowerCase()) ||
        noti.value.toLowerCase().includes(search.toLowerCase())
      )
    : notiilist;

  // ✅ Sort notes by date DESC
  const sortedNotiis = [...filterednotiis].sort((a, b) => new Date(b.date) - new Date(a.date));

  // ✅ Group notes by date (YYYY-MM-DD)
  const groupedByDate = sortedNotiis.reduce((groups, note) => {
    const dateKey = new Date(note.date).toDateString(); // e.g., "Sun Aug 24 2025"
    if (!groups[dateKey]) groups[dateKey] = [];
    groups[dateKey].push(note);
    return groups;
  }, {});

  useEffect(() => {
    dispatch(notiislice.actions.loadfromlocalstorage());
  }, []);

  const deletenotii = (id) => dispatch(notiislice.actions.deletenotii({ id }));
  const handlecopy = (val) => {
    navigator.clipboard.writeText(val);
    toast.success("Note copied to clipboard!");
  };
  const edithandler = (notid) => navigate(`/?paste_id=${notid}`);
  const handleview = (notid) => navigate(`/view?paste_id=${notid}`);

  return (
    <div className="flex w-full gap-4 flex-col overflow-hidden">
      {/* ✅ Search Bar */}
      <input
        placeholder="Search here..."
        className="w-full border md:border-2 border-primaryGreen placeholder:text-whitee text-primaryYellow focus-within:border-primaryYellow font-semibold outline-0 p-4 rounded-2xl"
        onChange={(e) => setsearch(e.target.value)}
      />

      {/* ✅ Notes grouped by date */}
      <div className="w-full overflow-y-auto flex-1/2 pr-4">
        {Object.keys(groupedByDate).map((dateKey) => (
          <div key={dateKey} >
            {/* ✅ Date Header */}
            <div className="text-center  text-primaryOrange font-bold items-center flex mb-4">
              <div className="bg-amber-600  flex-1/4 m-2 h-0.5 "></div><FontAwesomeIcon icon={faCalendar} className="mr-2" /> {dateKey}
              <div className="bg-amber-600  flex-1/4 m-2 h-0.5 "></div>
            </div>

            {groupedByDate[dateKey].map((singlenoti) => (
              <div
                key={singlenoti.id}
                className="md:pl-3 flex relative flex-col w-full gap-2 rounded-2xl overflow-hidden mb-4 border md:border-2 transition-all duration-300 group border-primaryYellow hover:border-primaryGreen"
              >
                <div className="absolute top-0 transition-all duration-300 left-0 bg-primaryYellow md:w-5 h-full group-hover:bg-primaryGreen"></div>

                {/* ✅ Note Title */}
                <div className="text-xl md:pl-4 p-2 font-semibold text-primaryOrange">
                  {singlenoti.title}
                </div>

                {/* ✅ Note Content */}
                <div className="text-primaryGreen font-semibold whitespace-pre-wrap px-2 md:px-6">
                  {singlenoti.value}
                </div>

                {/* ✅ Action Buttons */}
                <div className="flex justify-between py-2 md:ml-4 flex-row-reverse px-2">
                  <div className="flex gap-2">
                    <button
                      className="px-2 border rounded-xl py-2 w-9 flex justify-center items-center h-10 hover:text-primaryGreen text-primaryYellow border-primaryYellow hover:border-primaryGreen"
                      onClick={() => edithandler(singlenoti.id)}
                    >
                      <FontAwesomeIcon icon={faPencil} />
                    </button>
                    <button
                      onClick={() => handleview(singlenoti.id)}
                      className="px-2 border rounded-xl py-2 w-9 flex justify-center items-center hover:text-primaryGreen text-primaryYellow border-primaryYellow hover:border-primaryGreen"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button
                      className="px-2 border rounded-xl py-2 w-9 flex justify-center items-center h-10 hover:text-primaryOrange text-primaryYellow border-primaryYellow hover:border-primaryOrange"
                      onClick={() => deletenotii(singlenoti.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button
                      className="px-2 border rounded-xl py-2 w-9 flex justify-center items-center h-10 hover:text-primaryGreen text-primaryYellow border-primaryYellow hover:border-primaryGreen"
                      onClick={() => handlecopy(singlenoti.value)}
                    >
                      <FontAwesomeIcon icon={faCopy} />
                    </button>
                    <button
                      onClick={() => toast("🫠 Coming Soon")}
                      className="px-2 border rounded-xl py-2 w-9 flex justify-center items-center hover:text-primaryGreen text-primaryYellow border-primaryYellow hover:border-primaryGreen"
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pastes;
