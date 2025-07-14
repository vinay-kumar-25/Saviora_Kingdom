import React from "react";
import { NavLink } from "react-router";
import savioralogo from "../../public/saviora_logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { notiislice } from "../js/slices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudMoon,
  faLightbulb,
  faList,
  faListDots,
  faMoon,
  faPlus,
  faStarHalfStroke,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faTableList } from "@fortawesome/free-solid-svg-icons/faTableList";

const Navbar = () => {
  const theme = useSelector((state) => state.notii.theme);
  const dispatch = useDispatch();

  const handletheme = () => {
    dispatch(notiislice.actions.changetheme({}));
  };

  return (
    <div className="w-full mt-2 border md:border-2   border-primaryOrange rounded-2xl items-center flex justify-between p-2 md:p-3">
      <span className="md:text-3xl text-2xl flex gap-1 justify-center items-center text-primaryOrange font-bold">
        {" "}
        <img
          className="rounded-xl md:rounded-2xl h-8 md:h-12"
          src={savioralogo}
          alt="📚"
        />{" "}
        Savink
      </span>
      <div className="flex gap-2 md:gap-4">
        <NavLink
          to={"/pastes_list"}
          className=" text-2xl rounded-xl hover:scale-95  h-12 w-12 flex justify-center items-center border  md:px-4 font-semibold  text-primaryOrange border-primaryOrange transition-all duration-300  "
        >
          <FontAwesomeIcon icon={faTableList} />
        </NavLink>
        <NavLink
          to={"/"}
          className="  rounded-xl hover:scale-95    text-2xl group  border border-primaryYellow h-12 w-12 flex justify-center items-center text-primaryYellow hover:text-primaryGreen  hover:bg-primaryYellow transition-all duration-300 "
        >
          <FontAwesomeIcon icon={faPlus} />
        </NavLink>
        <button
          onClick={() => handletheme()}
          className="  rounded-xl  text-2xl h-12 w-12 hover:scale-95   overflow-hidden  bg-gray-700 flex justify-center items-center font-bold  transition-all duration-300 "
        >
          {theme === "dark" ? (
            <FontAwesomeIcon
              className=" h-12 w-12  text-primaryYellow"
              icon={faSun}
            />
          ) : (
            <FontAwesomeIcon
              className=" text-stone-100   h-12 w-12   "
              icon={faMoon}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
