import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-center flex flex-col lg:flex-row antialiased h-screen w-4/5 sm:w-4/5 md:w-screen lg:w-3/5 mx-auto">
      <div className="space-y-5 flex flex-col lg:h-screen justify-center items-center lg:w-1/2">
        <div className="text-5xl">More Than Strangers</div>
        <div className="mx-auto text-xl px-4">
          <p>
            Discover the essence of connection in "More Than Strangers", an
            engaging social interaction game inspired by "We're Not Strangers."
            Uncover hidden truths, forge meaningful bonds, and navigate
            intriguing conversations to unravel the mysteries of strangers. Are
            you ready to unveil the questions that make us more than strangers?{" "}
          </p>
        </div>
        <img className="mx-auto h-1/2" src="figure1.svg" />
      </div>

      <div className="lg:w-1/2 space-y-5 my-4 flex flex-col-reverse lg:flex-col justify-center items-center">
        <img className="mx-auto mt-8 lg:mt-0" src="figure2.svg" />
        <div className="space-y-5">
          <div className="space-y-2">
            <div className="text-4xl">How to Play</div>
            <div className="mx-auto px-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquam enim at feugiat dictum. Phasellus ultrices sem sed arcu
              rutrum, et luctus nulla fringilla. Nullam ac feugiat nulla. Fusce
              convallis condimentum erat, ut blandit nisl tempus nec.
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-3xl">Ready to Play?</div>
            <button className="px-6 py-2 rounded-lg shadow-lg transition duration-300 ease-in-out border-purple border-2 hover:bg-purple hover:text-white text-purple">
              <div className="text-xl font-medium">Start</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
