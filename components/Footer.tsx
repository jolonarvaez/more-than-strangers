import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-purple lg:absolute bottom-0 text-white w-screen h-24 h-28 lg:h-16">
      <div className="w-full lg:w-1/2 font-sans antialiased h-full mx-auto flex flex-col lg:flex-row justify-around py-4 space-y-2">
        <div className="w-full lg:w-2/3 text-sm my-auto text-center mx-auto">
          Developed by Jolo Narvaez | © 2023 All rights reserved.
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mx-auto space-x-4">
          <div className="flex space-x-1">
            <BsGithub className="my-auto" />
            <a
              className="my-auto hover:underline hover:text-gray-400"
              href="https://github.com/jolonarvaez/more-than-strangers"
            >
              Github Repo
            </a>
          </div>
          <div className="flex space-x-1">
            <BsLinkedin className="my-auto" />
            <a
              className="my-auto hover:underline hover:text-gray-400"
              href="https://www.linkedin.com/in/jose-wilfredo-narvaez-8692aa21a/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
