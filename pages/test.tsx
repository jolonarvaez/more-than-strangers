import Card from "@/components/Card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const test = () => {
  const [cardIndex, setCardIndex] = useState(1);

  const nextCard = () => {
    setCardIndex(cardIndex + 1);
  };

  const prevCard = () => {
    setCardIndex(cardIndex - 1);
  };

  return (
    <div className="bg-game-bg w-screen h-screen flex flex-col items-center justify-center">
      <div className="space-y-3">
        <div
          className="text-material-white text-center text-2xl animate-in "
          style={{ "--index": 1 } as React.CSSProperties}
        >
          {cardIndex}/40
        </div>
        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Card prompt="What is your favorite food?" />
        </div>
        <div
          className="flex flex-row justify-center gap-8 text-2xl animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <motion.div whileTap={{ scale: 0.8 }}>
            <button
              onClick={prevCard}
              className="text-white bg-purple p-2 rounded-md border-2 border-material-white"
            >
              <AiOutlineLeft />
            </button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.8 }}>
            <button
              onClick={nextCard}
              className="text-white bg-purple p-2 rounded-md border-2 border-material-white"
            >
              <AiOutlineRight />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default test;
