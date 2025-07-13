import React from 'react'
import { NavLink } from 'react-router'
import savioralogo from '../../public/saviora_logo.svg' 
import { useSelector ,useDispatch} from 'react-redux' 
import { notiislice } from '../js/slices'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudMoon, faLightbulb, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    const theme  = useSelector((state)=>state.notii.theme)
    const dispatch = useDispatch();

const handletheme = ()=>{
  dispatch(notiislice.actions.changetheme({}))
}

  return (
    <div className="w-full mt-2  border-2   border-primaryOrange rounded-2xl items-center flex justify-between p-3">
      <span className="text-3xl flex gap-1 justify-center items-center text-primaryOrange font-bold"> <img className=" rounded-2xl h-12" src={savioralogo} alt="📚" /> Savink</span>
      <div className="flex gap-4">
        <NavLink to={"/"} className="  rounded-xl p-2  px-4 font-semibold text-primaryGreen border-2 border-primaryGreen hover:bg-primaryYellow transition-all duration-300 " >Create</NavLink>
        <NavLink to={"/pastes_list"} className="  rounded-xl p-2  px-4 font-semibold text-primaryGreen border-2 border-primaryGreen hover:text-primaryOrange hover:border-primaryOrange transition-all duration-300 " >Pastes</NavLink>
        <button onClick={()=>handletheme()} className="  rounded-xl p-2  px-4 font-semibold text-primaryGreen border-2 border-primaryGreen hover:text-primaryOrange hover:border-primaryOrange transition-all duration-300 ">{theme==="dark"?<FontAwesomeIcon className="transition-all duration-1000 ease-in-out text-xl text-white" icon={faSun}/>:<FontAwesomeIcon className="text-xl text-black transition-all duration-1000 ease-in-out" icon={faMoon}/>}</button>
      </div>
    </div>
  )
}

export default Navbar
