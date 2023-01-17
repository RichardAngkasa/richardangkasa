import React from "react";
import { RiMoonClearLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineArrowUp } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { Link } from "react-router-dom";

function Layout({ children }) {
  // const scrollService = () => {
  //     window.scrollTo(0, 500);
  //   };
  // const scrollWork = () => {
  //     window.scrollTo(0, 500);
  //   };
  const hey = () => {
    alert("hai");
  };
  return (
    <div className="w-full">
      <div className="w-full backdrop-blur-sm top-0 fixed items-center flex justify-between px-3.5 py-2 z-50">
        <div className="flex items-center">
          <button onClick={hey} value="hai">
            <RxHamburgerMenu className="h-6 w-6 mr-5 sm:hidden fill-white" />
          </button>
          <Link to="/" className="font-outfit font-normal text-5xl text-white">
            RA<span className="text-orange">.</span>
          </Link>
        </div>
        <div className="hidden sm:flex font-outfit font-extralight text-2xl gap-x-14 text-white">
          <button>Services</button>
          <button>Work</button>
          <Link to="/blog">
            <button>Blog</button>
          </Link>
        </div>
        <div className="flex gap-6">
          <button>
            <RiMoonClearLine className="w-6 h-6" />
          </button>
          <button className="h-14 w-full border-2 px-5 rounded-2xl border-orange">
            <h1 className="font-outfit font-light text-2xl">Contact</h1>
          </button>
        </div>
      </div>
      {children}
      <button>
        <HiOutlineArrowUp className="h-8 w-8 fill-white rounded-full" />
      </button>
    </div>
  );
}

export default Layout;
