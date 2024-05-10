import React from "react";
import home from "../asset/1.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faHouse, faGlobe } from "@fortawesome/free-solid-svg-icons";

const rightVariant = {
  initial: { x: -1000 },
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
  initial: { x: 1000 },
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
    <div className="relative mb-48 mt-14 w-full">
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
      <div className="absolute top-[50%] text-gold left-[50%] -translate-x-1/2 -translate-y-1/2 text-3xl font-bold ">
        <motion.h1
          variants={leftVariant}
          animate="animate"
          initial="initial"
          className="text-7xl"
        >
          LUXE HOUSES
        </motion.h1>
        <motion.p
          variants={rightVariant}
          initial="initial"
          animate="animate"
        >
          {" "}
          amet consectetur adipisicing elit. Accusamus fugit similique hic quo
          laborum suscipit alias eaque repellendus obcaecati libero?
        </motion.p>
        Lorem ipsum dolor sit
        <Link to="/properties">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.1 }}
            className="button mt-2 p-1 "
          >
            Go To Properties
          </motion.button>
        </Link>
      </div>

      <div className="h-28 w-[35%] p-6 bg-nav absolute -bottom-16 left-[50%] -translate-x-1/2 rounded-full">
        <span>
          <FontAwesomeIcon icon={faGlobe} />
        </span>
        <span>
          <FontAwesomeIcon icon={faHouse} />
        </span>
        <span>
          <FontAwesomeIcon icon={faLock} />
        </span>
      </div>
    </div>
  );
};

export default Home;
