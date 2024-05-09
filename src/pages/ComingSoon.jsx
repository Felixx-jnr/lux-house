import React from "react";
import home from "../asset/1.mp4";
import { motion } from "framer-motion";

const ComingSoon = () => {
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
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 150,
            ease: "easeIn",
          }}
          className="text-7xl"
        >
          NOT AVAILABLE
        </motion.h1>
        <motion.p
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 150,
          }}
        >
          NOT AVALABLE CHECK LATER
        </motion.p>
      </div>
    </div>
  );
};

export default ComingSoon;
