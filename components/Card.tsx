import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card = (props: any) => {

  const flipDiv = () => {
    props.setIsFlipped(!props.isFlipped);
  };

  return (
    <div onClick={flipDiv} className="container antialiased animate">
      <motion.div
        className={`flip-card ${props.isFlipped ? "flipped" : ""}`}
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotateY: props.isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="bg-material-white rounded-lg flip-card-front shadow-2xl">
          <div className="text-5xl font-semibold text-purple">MTS</div>
        </div>
        <div className="bg-material-white rounded-lg text-center flip-card-back shadow-xl">
          <div className="mx-5 text-3xl">{props.prompt}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
