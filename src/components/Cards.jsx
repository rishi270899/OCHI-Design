import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen px-32 bg-zinc-900 flex items-center gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full  bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full text-[#CDEA68]">
            &copy;2019-2024
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full  bg-[#082320]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full text-[#CDEA68]">
            &copy;2019-2024
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full  bg-[#082320]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full text-[#CDEA68]">
            &copy;2019-2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
