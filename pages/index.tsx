import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-center flex flex-col lg:flex-row antialiased w-4/5 sm:w-4/5 md:w-screen lg:w-3/5 mx-auto">
      <div className="space-y-5 flex flex-col justify-center items-center lg:h-screen lg:w-1/2">
        <div
          className="text-5xl animate-in"
          style={{ "--index": 0 } as React.CSSProperties}
        >
          More Than Strangers
        </div>
        <div
          className="mx-auto text-xl px-4 animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <p>
            Discover the essence of connection in "More Than Strangers", an
            engaging social interaction game inspired by "We're Not Strangers."
            Uncover hidden truths, forge meaningful bonds, and navigate
            intriguing conversations to unravel the mysteries of strangers. Are
            you ready to unveil the questions that make us more than strangers?{" "}
          </p>
        </div>
        <img
          className="mx-auto h-1/2 animate-in"
          src="figure1.svg"
          style={{ "--index": 2 } as React.CSSProperties}
        />
      </div>

      <div className="lg:w-1/2 space-y-5 my-4 flex flex-col-reverse lg:flex-col justify-center items-center">
        <img
          className="mx-auto mt-8 lg:mt-0 animate-in"
          src="figure2.svg"
          style={{ "--index": 1 } as React.CSSProperties}
        />
        <div className="space-y-5">
          <div
            className="space-y-2 animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <div className="text-4xl">How to Play</div>
            <div className="mx-auto px-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquam enim at feugiat dictum. Phasellus ultrices sem sed arcu
              rutrum, et luctus nulla fringilla. Nullam ac feugiat nulla. Fusce
              convallis condimentum erat, ut blandit nisl tempus nec.
            </div>
          </div>
          <div
            className="space-y-6 animate-in"
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <div className="text-3xl">Ready to Play?</div>
            <Link href="/start" className="">
              <button className="mt-6 px-6 py-2 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-110 border-purple border-2 hover:bg-purple hover:text-white text-purple">
                <div className="text-xl font-medium">Start</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
