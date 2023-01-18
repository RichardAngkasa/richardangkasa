import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { BiCrown } from "react-icons/bi";
import Layout from "./Layout";
// import TodoPaper from "../Todo/TodoPaper";

function Home() {
  const todoLink = () => {
    window.location = "https://todo.richardangkasa.my.id/";
  };
  return (
    <>
      <Layout>
        <div className="mx-auto duration-500 h-full scroll-smooth">
          <div className="w-full py-16 z-20 backdrop-blur-sm bg-center bg-cover bg-fixed bg-[url('https://img.freepik.com/free-vector/3d-abstract-wave-pattern-background-vector_53876-166839.jpg?t=st=1673841119~exp=1673841719~hmac=97fe3f101a32c4efc439339ee3b44627387a118866615bd661f90cfad7bd6f88')]">
            <div className="mx-auto px-4 sm:max-w-[60rem] max-w-full overflow-x-hidden">
              {/* About Me*/}
              <div className="py-24 flex">
                <div className="m-auto flex justify-between w-full items-center">
                  <div className=" flex flex-col gap-5">
                    <div>
                      <h1 className="font-jakarta text-4xl sm:text-5xl font-bold text-white">
                        Richard{" "}
                        <span className="text-orange font-jakarta">
                          Angkasa
                        </span>
                      </h1>
                      <h1 className="font-bold text-xs sm:text-lg mt-4 text-white">
                        Front-End Web Designer
                      </h1>
                    </div>
                  </div>

                  <div className="max-w-48 sm:max-w-72">
                    <img
                      src="https://i.ibb.co/MB89t13/73556227564-resize.png"
                      alt="profileimage"
                      className=" h-40 sm:h-96 object-cover z-20 rounded-2xl "
                    />
                  </div>
                </div>
              </div>
              {/* skill set */}
              <div className="flex w-full py-12 justify-around">
                <IoLogoJavascript className="h-10 w-10 sm:h-14 sm:w-14 fill-white" />
                <FaReact className="h-10 w-10 sm:h-14 sm:w-14 fill-white" />
                <SiTailwindcss className="h-10 w-10 sm:h-14 sm:w-14 fill-white" />
                <FaFigma className="h-10 w-10 sm:h-14 sm:w-14 fill-white" />
              </div>
              {/* Speciality*/}
              <div className="py-24">
                <h1 className="font-jakarta font-light text-lg sm:text-3xl sm:flex sm:justify-start ">
                  Speciality
                </h1>
                <div className="flex items-end sm:mt-1">
                  <div className="h-px w-16 sm:w-20 mr-1 mt-1  bg-orange"></div>
                  <div className="h-px w-5 sm:w-9 mr-1 bg-orange"></div>
                  <div className="h-px w-2 sm:w-7 bg-orange"></div>
                </div>

                <div className="flex flex-col sm:flex sm:flex-row gap-5 mt-8">
                  {/* ui/ux */}
                  <div className="sm:w-1/2">
                    <div className="flex items-center gap-3 w-full">
                      <MdOutlineDesignServices className="w-8 h-8 fill-orange" />
                      <h1 className="font-jakarta font-medium text-xl">
                        UI/UX Design
                      </h1>
                    </div>
                    <h1 className="mt-5 font-outfit font-light text-lg text-left">
                      Turn what you have in mind of a digital product into
                      reality. For any platform you consider.
                    </h1>
                  </div>
                  {/* frontend */}
                  <div className="sm:w-1/2">
                    <div className="flex items-center gap-3">
                      <FaCode className="w-8 h-8 fill-orange" />
                      <h1 className="font-jakarta font-medium text-xl">
                        Front-end Developer
                      </h1>
                    </div>
                    <h1 className="mt-5 font-outfit font-light text-lg text-left">
                      Creating visually captivating websites. Specializing in
                      front-end development, bringing ideas to life on any
                      platform.
                    </h1>
                  </div>
                </div>
              </div>
              {/* Projects*/}
              <div className="py-24 w-full">
                <div className="mx-auto max-w-full">
                  <h1 className="font-jakarta font-light text-lg sm:text-3xl sm:flex sm:justify-start ">
                    Portfolio
                  </h1>

                  <div className="flex items-end sm:mt-1">
                    <div className="h-px w-16 sm:w-20 mr-1 mt-1  bg-orange"></div>
                    <div className="h-px w-5 sm:w-9 mr-1 bg-orange"></div>
                    <div className="h-px w-2 sm:w-7 bg-orange"></div>
                  </div>
                  <div className="flex flex-col sm:flex sm:flex-row sm:justify-evenly items-center gap-8 sm:gap-0 mt-8">
                    <img
                      src="https://i.ibb.co/LJmxm5K/To-do-list.png"
                      className=" object-cover w-full"
                      alt="todo-list"
                    />

                    <img
                      src="https://i.ibb.co/4jrT4jH/Frame-1-1.png"
                      className=" object-cover w-full"
                      alt="calculator"
                    />
                  </div>
                </div>
              </div>
              {/* Personal Blog*/}
              <div className="w-full py-24">
                <div className="mx-auto max-w-full">
                  <h1 className="font-jakarta font-light text-lg sm:text-3xl sm:flex sm:justify-start ">
                    Blogs
                  </h1>
                  <div className="flex items-end sm:mt-1">
                    <div className="h-px w-10 sm:w-12 mr-1 mt-1  bg-orange"></div>
                    <div className="h-px w-5 sm:w-10 mr-1 bg-orange"></div>
                    <div className="h-px w-4 sm:w-6 bg-orange"></div>
                  </div>

                  <div className="flex flex-col sm:flex sm:flex-row sm:justify-evenly items-center gap-8 sm:gap-0 mt-8">
                    <div className="max-w-80 sm:max-w-sm h-full rounded-2xl mx-4 ">
                      <img
                        src="https://drive.google.com/uc?export=view&id=187qz_RB1VljYHoB498YK7KmnxKXM1SdV"
                        className="h-80 object-cover rounded-2xl"
                      />
                      <h1 className="font-jakarta font-bold my-2 text-xl mx-3 ">
                        Button Design — UI component series
                      </h1>
                      <h1 className="font-jakarta font-normal mx-3 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce id magna nec ante scelerisque laoreet. Fusce
                        finibus ...
                      </h1>
                      <div className="flex justify-center h-14  rounded-bl-2xl rounded-br-2xl mt-2">
                        <button className="px-3 flex items-center">
                          Continue Reading
                        </button>
                      </div>
                    </div>
                    <div className="max-w-80 sm:max-w-sm h-full rounded-2xl mx-4">
                      <img
                        src="https://drive.google.com/uc?export=view&id=1U5hD-QZttKxoDufrfn_XloMkiVn-sj1_"
                        className="h-80 w-full object-cover rounded-2xl"
                      />
                      <h1 className="font-jakarta font-bold my-2 text-xl mx-3 ">
                        Button Design — UI component series
                      </h1>
                      <h1 className="font-jakarta font-normal mx-3 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce id magna nec ante scelerisque laoreet. Fusce
                        finibus ...
                      </h1>
                      <div className="flex justify-center h-14  rounded-bl-2xl rounded-br-2xl mt-2">
                        <button className="px-3 flex items-center">
                          Continue Reading
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* footer */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;

// <div className="flex gap-2 sm:gap-5">
// <BsGithub className="h-5 w-[1.25rem] sm:h-[1.875rem] sm:w-[1.875rem] fill-white" />
// <GrLinkedin className="h-[1.25rem] w-[1.25rem] sm:h-[1.875rem] sm:w-[1.875rem] fill-white" />
// </div>
