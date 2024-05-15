import React from "react";
import house from "../asset/house.jpeg";
import yes from "../asset/yes.jpg";
import no from "../asset/no.jpg";

const Grid = () => {
  return (
    <main>
      <section className="section-one">
        <div className="relative writeup">
          <p className="absolute -top-3.5 left-0 bg-background px-3 font-bold lg:text-xl">
            Strategic Planning
          </p>

          <div className="one">
            <h1 className=" md:text-[700%] lg:text-[800%] text-[500%] leading-none font-bold ">
              01
            </h1>

            <p className="pt-4 font-semibold text-justify p-2 lg:text-lg text-xs ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              harum minus, fuga esse reiciendis accusantium ad quam molestias
              dignissimos soluta? Quasi soluta nulla quam sint expedita maxime
              aliquid quo aut, similique
            </p>
          </div>
        </div>

        <img
          className="pic"
          src={house}
          alt=""
          style={{ width: "100%" }}
        />
      </section>

      <section className="section-two">
        <img
          className="pic"
          src={house}
          alt=""
          style={{ width: "100%" }}
        />

        <div className="relative writeup ">
          <p className="absolute -top-3.5 right-0 bg-background px-3 font-bold lg:text-xl">
            Custom Design
          </p>

          <div className="two">
            <p className="pt-4 font-semibold text-justify p-2 lg:text-lg text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              harum minus, fuga esse reiciendis accusantium ad quam molestias
              dignissimos soluta? Quasi soluta nulla quam sint expedita maxime
              aliquid quo aut, similique
            </p>

            <h1 className=" md:text-[700%] lg:text-[800%] text-[500%] leading-none font-bold ">
              02
            </h1>
          </div>
        </div>
      </section>

      <section className="section-one">
        <div className="relative writeup ">
          <p className="absolute -top-3.5 left-0 bg-background px-3 font-bold lg:text-xl">
            Project Management
          </p>

          <div className="one">
            <h1 className=" md:text-[700%] lg:text-[800%] text-[500%] leading-none font-bold ">
              03
            </h1>

            <p className="pt-4 font-semibold text-justify p-2 lg:text-lg text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              harum minus, fuga esse reiciendis accusantium ad quam molestias
              dignissimos soluta? Quasi soluta nulla quam sint expedita maxime
              aliquid quo aut, similique
            </p>
          </div>
        </div>

        <img
          className="pic"
          src={house}
          alt=""
          style={{ width: "100%" }}
        />
      </section>

      <section className="section-two">
        <img
          className="pic"
          src={house}
          alt=""
          style={{ width: "100%" }}
        />

        <div className="relative writeup ">
          <p className="absolute -top-3.5 right-0 bg-background px-3 font-bold lg:text-xl">
            Engineering Expertise
          </p>

          <div className="two">
            <p className="pt-4 font-semibold text-justify p-2 lg:text-lg text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              harum minus, fuga esse reiciendis accusantium ad quam molestias
              dignissimos soluta? Quasi soluta nulla quam sint expedita maxime
              aliquid quo aut, similique
            </p>

            <h1 className=" md:text-[700%] lg:text-[800%] text-[500%] leading-none font-bold ">
              04
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Grid;
