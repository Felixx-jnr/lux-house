import React from "react";
import house from "../asset/house.jpeg";

const Grid = () => {
  return (
    <main className="my-40">
      <section className="section-one">
        <div className="relative writeup ">
          <p className="absolute -top-3 left-0 bg-background px-3 font-bold ">
            Engineering Expertise
          </p>

          <div className="one">
            <h1 className=" text-[800%] leading-none font-bold ">01</h1>

            <p className="pt-4 font-semibold text-justify p-2">
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
          <p className="absolute -top-3 left-0 bg-background px-3 font-bold ">
            Engineering Expertise
          </p>

          <div className="two">
            <p className="pt-4 font-semibold text-justify p-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              harum minus, fuga esse reiciendis accusantium ad quam molestias
              dignissimos soluta? Quasi soluta nulla quam sint expedita maxime
              aliquid quo aut, similique
            </p>

            <h1 className=" text-[800%] leading-none font-bold ">01</h1>
          </div>
        </div>
      </section>

      <section className="section-one">
        <div className="relative writeup ">
          <p className="absolute -top-3 left-0 bg-background px-3 font-bold ">
            Engineering Expertise
          </p>

          <div className="one">
            <h1 className=" text-[800%] leading-none font-bold ">01</h1>

            <p className="pt-4 font-semibold text-justify p-2">
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
          <p className="absolute -top-3 left-0 bg-background px-3 font-bold ">
            Engineering Expertise
          </p>

          <div className="two">
            <p className="pt-4 font-semibold text-justify p-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              harum minus, fuga esse reiciendis accusantium ad quam molestias
              dignissimos soluta? Quasi soluta nulla quam sint expedita maxime
              aliquid quo aut, similique
            </p>

            <h1 className=" text-[800%] leading-none font-bold ">01</h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Grid;
