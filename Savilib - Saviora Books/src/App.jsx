import { useState } from 'react';
import './App.css';
import Topics from './components/Topics';
import Books from './components/Books';
import Add_book_popup from './components/Add_book_popup';

import Communication_img from './assets/communication_image.jpg';
import Fantasy_img from './assets/fantesy_image.svg';
import Food_img from './assets/food_image.jpg';
import Health_img from './assets/health_image.svg';
import Money_img from './assets/money_image.svg';
import Moral_img from './assets/moral_image.svg';
import Profession_img from './assets/profession_image.svg';
import Spiritual_img from './assets/spritual_image.jpg';  // keep if the filename is intentional

function App() {
  const [count, setCount] = useState(0);
  const [popup,setpopup] = useState(false);

  const [popuptitle,setpopuptitle] = useState("Topic")

 function add_book_popup_toggle(ctopic="topic"){
  console.log("Title aaya hai ",ctopic)
     popup? setpopup(false):setpopup(true)
    setpopuptitle(`${ctopic}`)
 }

  return (
    <div id='main' className="flex flex-col  gap-4 ">
      {/* Topics Section */}
      <div className="border-2 border-primaryYellow rounded-2xl p-8 gap-6 flex flex-col">
        <h1 className="bg-softWhite text-lightGray text-3xl md:text-5xl font-semibold">
          What fascinates you most Today!
        </h1>
        <div className="grid gap-4 grid-rows-1 lg:grid-cols-8 md:grid-cols-4 grid-cols-3 justify-start items-start">
          <a href="#profession"  className="grow">
            <Topics title="Profession" img={Profession_img} />
          </a>
          <a href="#health"  className="grow">
            <Topics title="Health" img={Health_img} />
          </a>
          <a href="#money"  className="grow">
            <Topics title="Money" img={Money_img} />
          </a>
          <a href="#spiritual"  className="grow">
            <Topics title="Spiritual" img={Spiritual_img} />
          </a>
          <a href="#moral"  className="grow">
            <Topics title="Moral" img={Moral_img} />
          </a>
          <a href="#food"  className="grow">
            <Topics title="Food" img={Food_img} />
          </a>
          <a href="#communicate"  className="grow">
            <Topics title="Communicate" img={Communication_img} />
          </a>
          <a href="#fantasy"  className="grow">
            <Topics title="Fantasy" img={Fantasy_img} />
          </a>
        </div>
      </div>

      {/* Detailed Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <Books bookaddhandle={add_book_popup_toggle} id_name="profession" title="Profession" />
        <Books bookaddhandle={add_book_popup_toggle} id_name="health" title="Health" />
        <Books bookaddhandle={add_book_popup_toggle} id_name="money" title="Money" />
        <Books bookaddhandle={add_book_popup_toggle} id_name="spiritual" title="Spiritual" />
        <Books bookaddhandle={add_book_popup_toggle} id_name="moral" title="Moral" />
        <Books bookaddhandle={add_book_popup_toggle} id_name="food" title="Food" />
        <Books bookaddhandle={add_book_popup_toggle} id_name="communicate" title="Communicate" />
        <Books bookaddhandle={add_book_popup_toggle} id_name="fantasy" title="Fantasy"/>
      </div>
    {popup&&
      <div className='fixed self-center top-0 h-full w-full bg-white/30 backdrop-blur-xs'></div>
    }
    {popup && <Add_book_popup title = {popuptitle} bookaddhandle={add_book_popup_toggle} />}


    </div>
  );
}

export default App;
