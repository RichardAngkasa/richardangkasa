import React, { useState } from "react";
import { RiMoonClearLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineArrowUp } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { Link } from "react-router-dom";

function Layout({ children }) {
  // const scrollService = () => {
  //     window.scrollTo(0, 500);
  //   }
  // const scrollWork = () => {
  //     window.scrollTo(0, 500);
  //   };
  const [side, setSide] = useState(false);
  const hey = () => {
    if (side === true) {
      setSide(false);
    } else {
      setSide(true);
    }
  };
  const [backToTop, setBackToTop] = useState(false);
  window.onscroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setBackToTop(true);
    } else {
      setBackToTop(false);
    }
  };
  const goUp = () => {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    window.scrollTo(0, 0);
  };
  return (
    <>
      {side ? (
        <div className="bg-gradient-to-b from-black fixed z-40  ">
          <div
            onClick={hey}
            className="justify-end flex pr-4 pt-4 absolute w-screen "
          >
            <AiOutlineClose className="h-8 w-8 fill-white absolute z-50" />
          </div>
          <div className="w-screen flex flex-col justify-center text-center gap-5 py-10 font-light text-xl">
            <button>Services</button>
            <button>Work</button>
            <Link to="/blog">
              <button>Blog</button>
            </Link>
          </div>
        </div>
      ) : null}
      <div className="w-full">
        <div className="w-full backdrop-blur-sm top-0 fixed items-center flex justify-between px-3.5 py-2 z-10">
          <div className="flex items-center">
            <button onClick={hey} value="hai">
              <RxHamburgerMenu className="h-6 w-6 mr-5 sm:hidden fill-white" />
            </button>
            <Link
              to="/"
              className="font-outfit font-normal text-5xl text-white"
              onClick={goUp}
            >
              RA<span className="text-orange">.</span>
            </Link>
          </div>

          <div className="hidden sm:flex font-outfit font-extralight text-2xl gap-x-14 text-white">
            <button>Speciality</button>
            <button>Portfolio</button>
            <Link to="/blog">
              <button>Blogs</button>
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
        {backToTop ? (
          <div className="flex justify-end w-full fixed bottom-0 ease-linear duration-500 focus:outline-none">
            <button onClick={goUp}>
              <HiOutlineArrowUp className="h-10 w-10 stroke-black bg-slate-50 rounded-full p-2 mb-20 mr-8" />
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Layout;
