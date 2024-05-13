import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ReviewModal = () => {
  return (
    <section className="my-40">
      <div className=" w-[30%] mx-[2%] bg-nav p-4 text-center">
        <img
          className=" mb-2 p-2 rounded-[50%] bg-white text-center"
          icon={faUser}
        />
        <h3 className="text-center w-auto">Kanye</h3>
        <p className="text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ea!
          Quaerat nobis quas accusamus temporibus. Mollitia quidem ipsa minima
          quae.
        </p>
      </div>
    </section>
  );
};

export default ReviewModal;
