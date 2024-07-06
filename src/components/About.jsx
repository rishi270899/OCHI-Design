import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="text-[4vw] font-['Neue Montreal'] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      <div className="w-full flex gap-5 pt-10 border-t-[1px] mt-20 border-[#a9c05e]">
        <div className="w-1/2 ">
          <h1 className="text-5xl">Our approach: </h1>
          <button className="flex uppercase gap-10 items-center px-12 py-3 bg-zinc-900 rounded-full text-white mt-10">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] rounded-3xl bg-[#88a911]">

        
        </div>
      </div>
    </div>
  );
}

export default About;
