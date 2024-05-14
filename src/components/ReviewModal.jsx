import React from "react";
import { motion } from "framer-motion";

// Define the array of slides with numbers
const slides = [
  {
    name: "Alice",
    review:
      "Luxe Houses is simply amazing! From the first consultation to the final walkthrough, their attention to detail and dedication to creating a serene environment were evident. I'm beyond thrilled with my new home!",
    image: "",
  },
  {
    name: "David",
    review:
      "Luxe Houses exceeded my wildest dreams! The team's passion for creating extraordinary living spaces shines through in every aspect of their work. Living here feels like stepping into a fairytale every day.",
    image: "",
  },
  {
    name: "Sophia",
    review:
      "Luxe Houses truly elevated my expectations! Their innovative designs and commitment to excellence have set a new standard in luxury living. I feel like I'm living in a five-star resort every day.",
    image: "",
  },
  {
    name: "Michael",
    review:
      "Luxe Houses is where luxury meets tranquility. The seamless blend of modern design and natural elements creates an atmosphere of pure bliss. My home here is not just a place, but a sanctuary.",
    image: "",
  },
  {
    name: "Emily",
    review:
      "Luxe Houses lives up to its name in every way. From the peaceful surroundings to the thoughtful design, every moment spent here feels like a retreat. Choosing Luxe Houses was the best decision I've made",
    image: "",
  },
];

const ReviewModal = () => {
  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="my-20 relative w-[90%] bg-gold mx-auto overflow-hidden p-3">
      <motion.div
        className="flex mx-16"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-2"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className=" flex place-items-center flex-col bg-nav p-1 mx-auto text-left rounded-lg">
              <img className=" mb-2 p-2 rounded-[50%] bg-gold w-14 h-14" />
              <p className="mb-1 italic font-semibold text-gold">
                {slide.name}
              </p>
              <p className=" ">{slide.review}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ReviewModal;
