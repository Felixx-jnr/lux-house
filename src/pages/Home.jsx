import React from "react";
import home from "../asset/1.mp4";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative mt-16 w-full">
      <video
        style={{
          height: "500px",
          width: "100%",
          objectFit: "cover",
          filter: "brightness(50%)",
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
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-3xl font-bold ">
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          className="text-7xl"
        >
          LUX HOUSES
        </motion.h1>
        <motion.p
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          fugit similique hic quo laborum suscipit alias eaque repellendus
          obcaecati libero?
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
