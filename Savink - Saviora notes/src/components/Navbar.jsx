import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className="w-full mt-2  border-2  border-primaryOrange rounded-2xl items-center flex justify-between p-3">
      <span className="text-3xl text-primaryOrange font-bold">Savink</span>
      <div className="flex gap-4">
        <NavLink to={"/"} className="  rounded-xl p-2  px-4 font-semibold text-primaryGreen border-2 border-primaryGreen hover:bg-primaryYellow transition-all duration-300 " >Create</NavLink>
        <NavLink to={"/pastes_list"} className="  rounded-xl p-2  px-4 font-semibold text-primaryGreen border-2 border-primaryGreen hover:text-primaryOrange hover:border-primaryOrange transition-all duration-300 " >Pastes</NavLink>
      </div>
    </div>
  )
}

export default Navbar
