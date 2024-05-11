import React from "react";

const Grid = () => {
  return (
    <div className="my-20">
      <main>
        <div class="short one">
          <h1>01</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            sequi accusamus dolorem commodi.
          </p>
        </div>

        <div className="tall two relative border border-black">
          <p className="absolute -top-3 right-0 bg-background px-3  ">
            Engineering Expertise
          </p>
          <div className="grid grid-cols-2">
            <h1 className="text-[30px]">01</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              sequi accusamus dolorem commodi.
            </p>
          </div>
        </div>

        <div class="short three">
          <h1>01</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            sequi accusamus dolorem commodi.
          </p>
        </div>

        <div class="tall four">
          <img src="" />
        </div>

        <div class="short five">
          <h1>01</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            sequi accusamus dolorem commodi.
          </p>
        </div>

        <div class="tall six">
          <img src="" />
        </div>

        <div class="short seven">
          <h1>01</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            sequi accusamus dolorem commodi.
          </p>
        </div>

        <div class="tall eight">
          <img src="" />
        </div>
      </main>
    </div>
  );
};

export default Grid;
