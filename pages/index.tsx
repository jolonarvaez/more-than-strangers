import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-center flex flex-col lg:flex-row antialiased">
      <div className="space-y-4">
        <div className="text-5xl">More Than Strangers</div>
        <div className="mx-auto w-4/5 text-xl">
          <p>
            Discover the essence of connection in "More Than Strangers", an
            engaging social interaction game inspired by "We're Not Strangers."
            Uncover hidden truths, forge meaningful bonds, and navigate
            intriguing conversations to unravel the mysteries of strangers. Are
            you ready to unveil the questions that make us more than strangers?{" "}
          </p>
        </div>
        <img className="mx-auto" src="figure1.svg" />
      </div>
      <div className="space-y-4 my-4 flex flex-col-reverse lg:flex-col">
        <img className="mx-auto" src="figure2.svg" />
        <div>
          <div className="text-4xl">How to Play</div>
          <div className="mx-auto w-4/5 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            enim at feugiat dictum. Phasellus ultrices sem sed arcu rutrum, et
            luctus nulla fringilla. Nullam ac feugiat nulla. Fusce convallis
            condimentum erat, ut blandit nisl tempus nec.
          </div>
        </div>
      </div>
    </div>
  );
}
