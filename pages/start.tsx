import Card from "@/components/Card";
import { RadioGroup } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";

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

  return (
    <div className="bg-game-bg">
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
                    style={{ "--index": theme.index } as React.CSSProperties}
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
        <div className="w-full flex justify-center">
          {/* <Link href="/" className=""> */}
          <button
            disabled={theme === ""}
            className={`mx-auto mt-6 px-6 py-2 rounded-lg shadow-lg transition duration-300 ease-in-out border-purple border-2 
            ${theme === "" ? "text-purple": "text-white bg-purple hover:scale-110"}`}
          >
            <div className="text-xl font-medium">Continue</div>
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default start;
