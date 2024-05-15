import React from "react";
import home from "../asset/1.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import ReviewModal from "../components/ReviewModal";
import Grid from "../components/Grid";

const rightVariant = {
  initial: { x: "-100vw" },
  animate: {
    x: 0,
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 150,
    },
  },
};

const leftVariant = {
  initial: { x: "100vw" },
  animate: {
    x: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 150,
    },
  },
};

const Home = () => {
  return (
    <>
      <div className="relative mb-28 mt-15 w-full border-b border-gold">
        <video
          style={{
            height: "550px",
            width: "100%",
            objectFit: "cover",
            filter: "brightness(40%)",
          }}
          autoPlay
          loop
          muted
        >
          <source
            src={home}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-[50%] text-gold left-[50%] -translate-x-1/2 -translate-y-1/2 text-3xl font-bold w-[80%]">
          <motion.h1
            variants={leftVariant}
            animate="animate"
            initial="initial"
            className="text-5xl"
          >
            LUXE HOUSES
          </motion.h1>
          <motion.p
            variants={rightVariant}
            initial="initial"
            animate="animate"
            className="my-4"
          >
            {" "}
            amet consectetur adipisicing elit. Accusamus fugit similique hic quo
            laborum suscipit alias eaque repellendus obcaecati libero? Lorem
            ipsum dolor sit
          </motion.p>

          <Link to="/properties">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, ease: "easeIn" }}
              className="button p-2 text-xl"
            >
              Go To Properties
            </motion.button>
          </Link>
        </div>

        <div className="flex border border-gold items-center justify-center h-28 w-[35%] p-6 bg-nav absolute -bottom-16 left-[50%] -translate-x-1/2 rounded-2xl text-gold">
          <span className="mx-3 flex flex-nowrap flex-col items-center justify-center">
            <FontAwesomeIcon
              className="lg:text-5xl text-3xl mb-2 flex-nowrap"
              icon={faHouse}
            />
            <p className="font-semibold text-center">1K+ HOUSES</p>
          </span>

          <span className="mx-3 flex flex-col items-center justify-center">
            <FontAwesomeIcon
              className="lg:text-5xl  text-3xl mb-2"
              icon={faClock}
            />
            <p className="text-center font-semibold">65 YEARS </p>
          </span>

          <span className="mx-3 flex flex-col items-center justify-center">
            <FontAwesomeIcon
              className="text-3xl lg:text-5xl mb-2"
              icon={faUser}
            />
            <p className="font-semibold text-center">1M+ CUSTOMERS</p>
          </span>
        </div>
      </div>

      <div className="flex justify-center mb-14">
        <div className="bg-nav border border-gold  text-gold rounded-2xl w-[30%] mx-[2%] p-4 text-center">
          <FontAwesomeIcon
            className="text-3xl pb-2 rounded-[50%]"
            icon={faUser}
          />
          <h3 className="text-center mb-2">GENERAL LABOUR</h3>
          <p className="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ea!
            Quaerat nobis quas accusamus temporibus. Mollitia quidem ipsa minima
            quae.
          </p>
        </div>
        <div className="bg-nav border border-gold  text-gold rounded-2xl w-[30%] mx-[2%] p-4 text-center">
          <FontAwesomeIcon
            className="text-3xl pb-2 rounded-[50%]"
            icon={faUser}
          />
          <h3 className="text-center mb-2">GENERAL LABOUR</h3>
          <p className="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ea!
            Quaerat nobis quas accusamus temporibus. Mollitia quidem ipsa minima
            quae.
          </p>
        </div>
        <div className="bg-nav border border-gold  text-gold rounded-2xl w-[30%] mx-[2%] p-4 text-center">
          <FontAwesomeIcon
            className="text-3xl pb-2 rounded-[50%]"
            icon={faUser}
          />
          <h3 className="text-center mb-2">GENERAL LABOUR</h3>
          <p className="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ea!
            Quaerat nobis quas accusamus temporibus. Mollitia quidem ipsa minima
            quae.
          </p>
        </div>
      </div>

      <h2 className="text-center font-bold text-gold text-5xl mb-5">
        EXPLORE OUR SERVICES
      </h2>
      <Grid />
      <ReviewModal />
    </>
  );
};

export default Home;
