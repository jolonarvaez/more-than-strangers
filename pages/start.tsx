import Card from "@/components/Card";
import { RadioGroup } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const themes = [
  {
    name: "Overcoming Adversity Deck",
    description:
      "This deck features stories of individuals who have overcome tremendous challenges, offering inspiration and guidance. The cards prompt players to reflect on their own obstacles and explore ways to overcome them, encouraging resilience and personal growth.",
    index: 1,
  },
  {
    name: "Mind and Body Wellness Deck",
    description:
      "Promoting holistic well-being, this deck includes cards with practices and insights for nurturing mental and physical health. The questions encourage self-reflection, mindfulness, and the adoption of healthy habits, empowering players to prioritize self-care and achieve balance.",
    index: 2,
  },
  {
    name: "Love and Connection Deck",
    description:
      "Dedicated to celebrating the beauty of human connection, this deck contains stories, prompts, and thought-provoking questions. It encourages players to reflect on their relationships, deepen their connections, and foster love, compassion, and empathy in their interactions with others.",
    index: 3,
  },
  {
    name: "Dreams and Aspirations Deck",
    description:
      "Unlocking the power of imagination and ambition, this deck inspires players to pursue their dreams fearlessly. The cards prompt exploration of personal aspirations, encourage goal-setting, and offer guidance on overcoming obstacles, fostering a sense of purpose and motivation.",
    index: 4,
  },
];

const start = () => {
  let [theme, setTheme] = useState("");
  let [themeSelect, setThemeSelect] = useState(true);
  let [game, setGame] = useState(false);

  const exit = () => {
    setThemeSelect(false);
    setGame(true);
  };

  const [isFlipped, setIsFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [cards] = useState([
    { index: 0, prompt: "Question 1?", isFlipped: false },
    { index: 1, prompt: "Question 2?", isFlipped: false },
    { index: 2, prompt: "Question 3?", isFlipped: false },
    { index: 3, prompt: "Question 4?", isFlipped: false },
    { index: 4, prompt: "Question 5?", isFlipped: false },
  ]);
  const [currentPrompt, setCurrentPrompt] = useState(cards[0].prompt);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    if (isFlipped) {
      flipCard();
    }

    setTimeout(() => {
      setCardIndex(cardIndex + 1);
      setCurrentPrompt(cards[cardIndex + 1].prompt);
    }, 200);
  };

  const prevCard = () => {
    if (isFlipped) {
      flipCard();
    }

    setTimeout(() => {
      setCardIndex(cardIndex - 1);
      setCurrentPrompt(cards[cardIndex - 1].prompt);
    }, 1000);
  };

  return (
    <div className="bg-game-bg h-screen">
      <AnimatePresence>
        {themeSelect && (
          <motion.div
            exit={{ y: 200, opacity: "0" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full lg:w-5/12 h-screen flex flex-col justify-center mx-auto">
              <div className="text-white text-center font-medium text-3xl animate-in">
                Select a Deck Theme
              </div>
              <RadioGroup value={theme} onChange={setTheme}>
                <div className="mt-6 mx-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                  {themes.map((theme) => (
                    <RadioGroup.Option
                      key={theme.name}
                      value={theme.name}
                      as={Fragment}
                    >
                      {({ checked }) => (
                        <div
                          className={`py-3 rounded-xl animate-in shadow-lg cursor-pointer hover:scale-105 ${
                            checked
                              ? "bg-purple transition ease-in-out text-white ring-2 ring-offset-2"
                              : "bg-material-white text-slate-950"
                          }`}
                          style={
                            { "--index": theme.index } as React.CSSProperties
                          }
                        >
                          <div className="text-lg font-semibold text-center">
                            {theme.name}
                          </div>
                          <div
                            className={`text-sm font-normal mx-5 mt-2  ${
                              checked ? "text-slate-300" : "text-gray-500"
                            }`}
                          >
                            {theme.description}
                          </div>
                        </div>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
              <div
                className="w-full flex justify-center animate-in"
                style={{ "--index": 5 } as React.CSSProperties}
              >
                <button
                  disabled={theme === ""}
                  onClick={exit}
                  className={`mx-auto mt-6 px-6 py-2 rounded-lg shadow-lg transition duration-300 ease-in-out border-purple border-2 
                ${
                  theme === ""
                    ? "text-purple"
                    : "text-white bg-purple hover:scale-110"
                }`}
                >
                  <div className="text-xl font-medium">Continue</div>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {game && (
          <div className="w-screen h-screen flex items-center justify-center mx-auto ">
            <div className="animate-in">
              <div className="space-y-3">
                <div
                  className="text-material-white text-center text-2xl animate-in transition"
                  style={{ "--index": 1 } as React.CSSProperties}
                >
                  {cardIndex}/40
                </div>
                <div
                  className="animate-in"
                  style={{ "--index": 2 } as React.CSSProperties}
                >
                  <div>
                    <Card
                      onClick={flipCard}
                      isFlipped={isFlipped}
                      setIsFlipped={setIsFlipped}
                      prompt={currentPrompt}
                    />
                  </div>
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
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default start;
