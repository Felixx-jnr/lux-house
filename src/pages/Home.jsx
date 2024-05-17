import React from "react";
import home from "../asset/1.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import Grid from "../components/Grid";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

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
      <div className="relative mb-28 mt-15 w-full border-b-2 border-gold">
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
        <div className="absolute top-[52%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-gold w-[80%] max-md:w-[90%]">
          <motion.h1
            variants={leftVariant}
            animate="animate"
            initial="initial"
            className="lg:text-5xl text-4xl font-bold"
          >
            LUXE HOUSES
          </motion.h1>
          <motion.p
            variants={rightVariant}
            initial="initial"
            animate="animate"
            className="my-4 lg:text-3xl md:text-2xl text-xl"
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
              className="button p-2 text-xl font-semibold"
            >
              Go To Properties
            </motion.button>
          </Link>
        </div>

        <div className="flex border-2 h-28 sm:h-24 lg:h-24 justify-center align-middle border-gold p-1 bg-nav absolute -bottom-14 sm:-bottom-12 lg:-bottom-12 left-[50%] -translate-x-1/2 rounded-2xl text-gold">
          <span className="mx-3 flex flex-nowrap flex-col items-center justify-center">
            <FontAwesomeIcon
              className="lg:text-4xl text-2xl mb-2 flex-nowrap"
              icon={faHouse}
            />
            <p className="font-bold text-center lg:text-lg text-sm">
              1K+ HOUSES
            </p>
          </span>

          <span className="mx-3 flex flex-col items-center justify-center">
            <FontAwesomeIcon
              className="lg:text-4xl  text-2xl mb-2"
              icon={faClock}
            />
            <p className="text-center font-bold lg:text-lg text-sm">
              65 YEARS{" "}
            </p>
          </span>

          <span className="mx-3 flex flex-col items-center justify-center">
            <FontAwesomeIcon
              className="text-2xl lg:text-4xl mb-2"
              icon={faUser}
            />
            <p className="font-bold text-center lg:text-lg text-sm">
              1M+ CUSTOMERS
            </p>
          </span>
        </div>
      </div>

      <div className="flex place-items-center max-sm:flex-col mb-14 gap-7 mx-4">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          glareColor="#ffffff"
          glarePosition="all"
          scale={1.1}
          glareBorderRadius="10px"
          className="bg-nav max-md:max-w-[100%] max-md:w-[90%] border-gold border-2 text-gold rounded-2xl w-[30%] p-4 text-center"
        >
          <FontAwesomeIcon
            className="text-4xl pb-2 rounded-[50%]"
            icon={faHouse}
          />
          <h3 className="text-center mb-2 font-bold text-lg">1K+ HOUSES</h3>
          <p className="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ea!
            Quaerat nobis quas accusamus temporibus. Mollitia quidem ipsa minima
            quae.
          </p>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          glareColor="#ffffff"
          glarePosition="all"
          scale={1.1}
          glareBorderRadius="10px"
          className="bg-nav max-md:max-w-[100%] max-md:w-[90%] border-2 border-gold  text-gold rounded-2xl w-[30%] p-4 text-center"
        >
          <FontAwesomeIcon
            className="text-4xl pb-2 rounded-[50%]"
            icon={faClock}
          />
          <h3 className="text-center mb-2 font-bold text-lg">65 YEARS</h3>
          <p className="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ea!
            Quaerat nobis quas accusamus temporibus. Mollitia quidem ipsa minima
            quae.
          </p>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          glareColor="#ffffff"
          glarePosition="all"
          scale={1.1}
          glareBorderRadius="10px"
          className="bg-nav max-md:max-w-[100%] max-md:w-[90%] border-2 border-gold text-gold rounded-2xl w-[30%] p-4 text-center"
        >
          <FontAwesomeIcon
            className="text-4xl pb-2 rounded-[50%]"
            icon={faUser}
          />
          <h3 className="text-center mb-2 font-bold text-lg">1M+ CUSTOMERS</h3>
          <p className="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ea!
            Quaerat nobis quas accusamus temporibus. Mollitia quidem ipsa minima
            quae.
          </p>
        </Tilt>
      </div>

      <h2 className="text-center font-bold text-gold my-8 lg:text-6xl md:text-5xl text-4xl">
        EXPLORE OUR WORLD
      </h2>
      <Grid />
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
