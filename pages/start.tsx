import Card from "@/components/Card";
import { RadioGroup } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import OverComingAversity from "../data/overcomingadversity.json";
import DreamsAndAspirations from "../data/dreamsandaspirations.json";
import LoveAndConnection from "../data/loveandconnection.json";
import MindAndBodyWellNess from "../data/mindandbodywellness.json";

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
  const [theme, setTheme] = useState("");
  const [themeSelect, setThemeSelect] = useState(true);
  const [game, setGame] = useState(false);

  const [isFlipped, setIsFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const [cards, setCards] = useState([{ index: 0, prompt: "" }]);
  const [currentPrompt, setCurrentPrompt] = useState("");

  const exit = () => {
    setThemeSelect(false);
    setGame(true);

    let prompts: Prompt[] = [];

    switch (theme) {
      case "Overcoming Adversity Deck":
        prompts = OverComingAversity;
        break;
      case "Mind and Body Wellness Deck":
        prompts = MindAndBodyWellNess;
        break;
      case "Love and Connection Deck":
        prompts = LoveAndConnection;
        break;
      case "Dreams and Aspirations Deck":
        prompts = DreamsAndAspirations;
        break;
    }

    prompts = prompts.sort(() => 0.5 - Math.random()).splice(0, 20);
    setCards(prompts);
    setCurrentPrompt(prompts[0].prompt);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    if (cardIndex == 19) return;

    if (isFlipped) {
      flipCard();
    }

    setTimeout(() => {
      setCardIndex(cardIndex + 1);
      setCurrentPrompt(cards[cardIndex + 1].prompt);
    }, 200);
  };

  const prevCard = () => {
    if (cardIndex == 0) return;
    setCardIndex(cardIndex - 1);
    setCurrentPrompt(cards[cardIndex - 1].prompt);
  };

  const back = () => {
    setThemeSelect(true);
    setTheme("");
    setCardIndex(0);
    setIsFlipped(false);
    setGame(false);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="bg-game-bg h-screen">
      {themeSelect && (
        <div className="w-full lg:w-3/4 xl:w-6/12 h-screen flex flex-col justify-center mx-auto">
          <div className="mx-6">
            <Link href="/">
              <button className="text-material-white bg-purple px-3 py-2 rounded-lg flex flex-row space-x-1 hover:opacity-50 transition">
                <div className="my-auto">
                  <BiArrowBack />
                </div>
                <div>Back</div>
              </button>
            </Link>
          </div>
          <div className="text-material-white text-center font-medium text-3xl animate-in">
            Select a Deck Theme
          </div>
          <RadioGroup value={theme} onChange={setTheme}>
            <div className="mt-6 mx-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {themes.map((theme) => (
                <motion.div whileHover={{ scale: 1.05 }}>
                  <RadioGroup.Option
                    key={theme.name}
                    value={theme.name}
                    as={Fragment}
                  >
                    {({ checked }) => (
                      <div
                        className={`py-3 rounded-xl animate-in shadow-lg cursor-pointer hover:scale-105 ${
                          checked
                            ? "bg-purple transition ease-in-out text-material-white ring-2 ring-offset-2"
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
                </motion.div>
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
      )}

      {game && (
        <div className="h-screen">
          <div className="w-full lg:w-3/4 xl:w-6/12 h-screen flex flex-col justify-center mx-auto">
            <div className="w-full lg:w-1/2 xl:w-1/3 mx-6">
              <button
                onClick={back}
                className="text-material-white bg-purple px-3 py-2 rounded-lg flex flex-row space-x-1 hover:opacity-50 transition"
              >
                <div className="my-auto">
                  <BiArrowBack />
                </div>
                <div>Back</div>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className="space-y-4">
                <div
                  className="text-center text-white text-2xl animate-in"
                  style={{ "--index": 1 } as React.CSSProperties}
                >
                  {theme}
                </div>
                <div
                  className="text-material-white text-center text-xl animate-in transition"
                  style={{ "--index": 2 } as React.CSSProperties}
                >
                  {cardIndex + 1}/{cards.length}
                </div>
                <div
                  className="animate-in"
                  style={{ "--index": 3 } as React.CSSProperties}
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
                  className="flex flex-row justify-center items-center gap-8 text-2xl animate-in"
                  style={{ "--index": 4 } as React.CSSProperties}
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
                    {cardIndex != 19 ? (
                      <div>
                        <button
                          onClick={nextCard}
                          className="text-white bg-purple p-2 rounded-md border-2 border-material-white"
                        >
                          <div>
                            <AiOutlineRight />
                          </div>
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={refreshPage}
                          className="text-white bg-purple py-1 px-2 rounded-md border-2 border-material-white"
                        >
                          <div className="text-md">Finish</div>
                        </button>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default start;
