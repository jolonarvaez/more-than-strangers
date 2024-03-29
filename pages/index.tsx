import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-center flex flex-col lg:flex-row antialiased w-full sm:w-2/3 mx-auto">
      <div className="space-y-3 flex flex-col justify-center items-center lg:h-screen lg:w-1/2">
        <div
          className="text-3xl animate-in mt-4 lg:mt-0"
          style={{ "--index": 0 } as React.CSSProperties}
        >
          More Than Strangers
        </div>
        <div
          className="mx-4 text-justify animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <p>
            Discover the essence of connection in &quot;More Than Strangers&quot;, an
            engaging social interaction game inspired by &quot;We&apos;re Not Strangers&quot;.
            Uncover hidden truths, forge meaningful bonds, and navigate
            intriguing conversations to unravel the mysteries of strangers. Are
            you ready to unveil the questions that make us more than strangers?
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
        <div className="space-y-2">
          <div
            className="space-y-2 animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <div className="text-3xl">How to Play</div>
            <div className="mx-4">
              This game requires at least 2 people to play. Choose a
              theme and take turns asking each other the card prompts. Are you
              ready to become more than strangers?
            </div>
          </div>
          <div
            className="space-y-6 animate-in"
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <div className="text-2xl">Ready to Play?</div>
            <Link href="/start">
              <button className="mt-2 px-5 py-2 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-110 border-purple border-2 hover:bg-purple hover:text-white text-purple">
                <div className="font-medium">Start</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
