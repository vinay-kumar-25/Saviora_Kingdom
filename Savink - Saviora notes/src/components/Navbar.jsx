import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className="w-full mt-2 border-2 border-primaryOrange rounded-2xl items-center flex justify-between p-3">
      <span className="text-3xl text-primaryOrange font-bold">Savink</span>
      <div className="flex gap-4">
        <NavLink to={"/"} className="border border-black rounded-xl p-2 bg-primaryYellow text-primaryOrange hover:text-primaryGreen px-4 font-semibold " >Create</NavLink>
        <NavLink to={"/pastes_list"} className="border border-black rounded-xl p-2 bg-primaryYellow hover:bg-primaryGreen text-primaryGreen hover:text-primaryYellow px-4 font-semibold " >Pastes</NavLink>
      </div>
    </div>
  )
}

export default Navbar
