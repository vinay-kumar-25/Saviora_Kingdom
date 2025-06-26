import React from "react";

const Topics = (props) => {
  return (
    <div  className="shadow-2xl aspect-[3/4] min-w-20 max-w-50 flex flex-col  rounded-2xl group justify-between border  hover:border-primaryOrange  border-primaryGreen  overflow-hidden grow ">
      <div
        style={{ backgroundImage: `url(${props.img})` }}
        className=" h-10/12 w-full group-hover:h-9/12 bg-white bg-cover bg-center group-hover:scale-105 transition-all duration-300 group-hover:opacity-60"
      ></div>
      <div className="w-full h-2/12 py-0.5 md:py-2 group-hover:h-3/12 text-white duration-300 group-hover:bg-primaryOrange font-semibold text-[0.7rem] md:text-xl bg-primaryGreen">
        {props.title}
      </div>
    </div>
  );
};

export default Topics;
