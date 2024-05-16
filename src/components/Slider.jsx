import React from "react";

const Slider = () => {
  return (
    <div className="reviews relative bg-slate-950 flex">
      <div className="reviews-slide flex flex-grow-0">
        <div className="mx-8 w-40 h-40 bg-orange-400"></div>
        <div className="mx-8 w-40 h-40 bg-cyan-400"></div>
        <div className="mx-8 w-40 h-40 bg-pink-400"></div>
        <div className="mx-8 w-40 h-40 bg-blue-400"></div>
        <div className="mx-8 w-40 h-40 bg-green-400"></div>
        <div className="mx-8 w-40 h-40 bg-yellow-400"></div>
      </div>
      <div className="reviews-slide flex flex-grow-0 ">
        <div className="mx-8 w-40 h-40 bg-orange-400"></div>
        <div className="mx-8 w-40 h-40 bg-cyan-400"></div>
        <div className="mx-8 w-40 h-40 bg-pink-400"></div>
        <div className="mx-8 w-40 h-40 bg-blue-400"></div>
        <div className="mx-8 w-40 h-40 bg-green-400"></div>
        <div className="mx-8 w-40 h-40 bg-yellow-400"></div>
      </div>
    </div>
  );
};

export default Slider;
