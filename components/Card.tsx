import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card = (props: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipDiv = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="container antialiased animate">
      <motion.div
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
        onClick={flipDiv}
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="bg-material-white rounded-lg flip-card-front shadow-xl">
          <div className="text-5xl font-semibold text-purple">
            MTS
            </div>
        </div>
        <div className="bg-material-white rounded-lg flip-card-back shadow-xl">
          <div className="text-2xl">
            {props.prompt}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
