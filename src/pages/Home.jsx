import React from "react";
import home from "../asset/1.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faHouse, faGlobe } from "@fortawesome/free-solid-svg-icons";

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
    <div className="relative mb-48 mt-14 w-full border-b border-gold">
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
          laborum suscipit alias eaque repellendus obcaecati libero? Lorem ipsum
          dolor sit
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

      <div className="flex border border-gold items-center justify-center h-28 w-[35%] p-6 bg-nav absolute -bottom-16 left-[50%] -translate-x-1/2 rounded-full text-gold">
        <span className="mx-3 flex flex-col items-center justify-center">
          <FontAwesomeIcon
            className="text-5xl mb-2"
            icon={faGlobe}
          />
          <p className="font-semibold ">1K+ HOUSES</p>
        </span>

        <span className="mx-3 flex flex-col items-center justify-center">
          <FontAwesomeIcon
            className="text-[230%] mb-2"
            icon={faHouse}
          />
          <p className="font-semibold text-[100%] ">65 YEARS </p>
        </span>

        <span className="mx-3 flex flex-col items-center justify-center">
          <FontAwesomeIcon
            className="text-5xl mb-2"
            icon={faLock}
          />
          <p className="font-semibold ">1M+ CUSTOMERS</p>
        </span>
      </div>
    </div>
  );
};

export default Home;
