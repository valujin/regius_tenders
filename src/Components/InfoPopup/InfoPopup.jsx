import React from "react";
import crossImg from '/imgs/close-square-g.svg'
export default function InfoPopup({ text, setInfo }) {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 backdrop-blur-xs bg-[var(--main)]/50 z-999 h-screen flex ">
      <div className="bg-white max-w-[500px] m-auto w-full p-[30px] rounded-2xl flex flex-col items-center gap-[10px]">
        <img src={crossImg} alt="" className="cursor-pointer hover:scale-110" onClick={()=>setInfo('')} />
        <p className="text-2xl">
        {text}

        </p>
      </div>
    </div>
  );
}
