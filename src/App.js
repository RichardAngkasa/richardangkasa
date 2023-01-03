import "./App.css";
import { RiMoonClearLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { BiCrown } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
{
  /* min-h-[calc(100vh-5%)] */
}
function App() {
  return (
    <>
      <div className=" m-auto duration-500">
        <div className="w-screen backdrop-blur-sm top-0 sticky items-center flex justify-between px-3.5 z-50">
          <div className="flex items-center">
            <RxHamburgerMenu className="h-6 w-6 mr-[18px] tablet:hidden" />
            <h1 className="font-outfit font-normal text-[42px] ">
              RA<span className="text-green">.</span>
            </h1>
          </div>
          <div className="hidden tablet:flex font-outfit font-light text-[24px] gap-x-14">
            <button>Services</button>
            <button>Work</button>
            <button>Blog</button>
          </div>
          <div className="flex gap-6">
            <button>
              <RiMoonClearLine className="w-6 h-6" />
            </button>
            <button className="h-14 w-full border-2 px-5 rounded-2xl border-[#DBDBDB]">
              <h1 className="font-outfit font-light text-[24px]">Contact</h1>
            </button>
          </div>
        </div>
        <div className="w-fit mx-auto  ">
          <div className="flex flex-col mx-auto">
            <div className="aboutMe max-w-[90rem] py-[6.625rem]  flex">
              <div className="m-auto flex justify-evenly w-screen max-w-[90rem] items-center">
                <div className=" flex flex-col ml-4 gap-4">
                  <div>
                    <h1 className="font-jakarta text-[32px] tablet:text-[42px] font-bold text-black">
                      Richard{" "}
                      <span className="text-green font-jakarta">Angkasa.</span>
                    </h1>
                    <h1 className="font-bold text-[12px] whitespace-nowrap  tablet:text-[18px] ">
                      React Developer | UI/UX Designer
                    </h1>
                  </div>
                  <div className="flex items-end">
                    <div className="flex gap-2 tablet:gap-5">
                      <IoLogoJavascript className="h-[1.25rem] w-[1.25rem] tablet:h-[1.875rem] tablet:w-[1.875rem] fill-black" />
                      <FaReact className="h-[1.25rem] w-[1.25rem] tablet:h-[1.875rem] tablet:w-[1.875rem] fill-black" />
                      <SiTailwindcss className="h-[1.25rem] w-[1.25rem] tablet:h-[1.875rem] tablet:w-[1.875rem] fill-black" />
                      <FaFigma className="h-[1.25rem] w-[1.25rem] tablet:h-[1.875rem] tablet:w-[1.875rem] fill-black" />
                    </div>
                    <div className="mx-2 tablet:mx-[1.25rem] ">
                      <div className="h-[8px] w-[8px] rounded-full bg-black"></div>
                    </div>
                    <div className="flex gap-2 tablet:gap-5">
                      <BsGithub className="h-[1.25rem] w-[1.25rem] tablet:h-[1.875rem] tablet:w-[1.875rem] fill-black" />
                      <GrLinkedin className="h-[1.25rem] w-[1.25rem] tablet:h-[1.875rem] tablet:w-[1.875rem] fill-black" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="max-w-[12rem] tablet:max-w-[19.375rem] mr-4 ">
                    <img
                      src="https://drive.google.com/uc?export=view&id=14D7AeKgBkXm0mVmarPnqbK9ksABFKaOU"
                      alt="drive image"
                      className=" h-[10rem] tablet:h-[24.375rem] object-cover  rounded-2xl z-20 "
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col max-w-[90rem] py-[6.625rem]">
              <h1 className="font-jakarta font-bold text-[32px] flex justify-center">
                Services
              </h1>
              <div className="w-screen max-w-[90rem] flex justify-center">
                <div className="flex flex-col  items-center gap-8 tablet:gap-0 tablet:flex tablet:flex-row tablet:justify-evenly w-screen tablet:max-w-[60rem] mt-[2.25rem]">
                  <div className="max-w-[20rem] tablet:max-w-[20rem] h-[21.875rem] bg-slate-100 rounded-2xl flex flex-col items-center mx-4 px-3">
                    <div className="w-16 h-16 bg-slate-300 rounded-3xl flex items-center justify-center mt-[3.125rem]">
                      <BiCrown className="w-[1.875rem] h-[1.875rem]" />
                    </div>
                    <h1 className="font-jakarta font-medium text-[20px] mt-[1.875rem]">
                      UI/UX Design
                    </h1>
                    <h1 className="mt-[1.25rem] font-outfit font-normal text-[17px] text-center">
                      Turn what you have in mind of a digital product into
                      reality. For any platform you consider.
                    </h1>
                  </div>
                  <div className="max-w-[20rem] tablet:max-w-[20rem] h-[21.875rem] bg-slate-100 rounded-2xl flex flex-col items-center mx-4 px-3">
                    <div className="w-16 h-16 bg-slate-300 rounded-3xl flex items-center justify-center mt-[3.125rem]">
                      <BiCrown className="w-[1.875rem] h-[1.875rem]" />
                    </div>
                    <h1 className="font-jakarta font-medium text-[20px] mt-[1.875rem]">
                      UI/UX Design
                    </h1>
                    <h1 className="mt-[1.25rem] font-outfit font-normal text-[17px] text-center">
                      Turn what you have in mind of a digital product into
                      reality. For any platform you consider.
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-[6.625rem] max-w-[90rem] flex">
              <div className="flex flex-col m-auto">
                <h1 className="font-jakarta font-bold text-[32px] flex justify-center">
                  Projects
                </h1>
                <div className="flex laptop:justify-evenly w-screen max-w-[90rem] mt-[2.25rem] overflow-y-auto overflow-y-hidden">
                  <div className="w-screen bg-slate-400 min-w-[15rem] tablet:max-w-[18.125rem] h-[20rem] mx-4 cursor-pointer hover:scale-105 ease-in-out duration-200 rounded-2xl">
                    {" "}
                    <img
                      src="https://drive.google.com/uc?export=view&id=12LXOn46S_vVNYB0ppPUYxdUwLywwb_Be"
                      className="h-[12.5rem] object-cover rounded-2xl"
                    />{" "}
                  </div>
                  <div className=" w-screen bg-slate-400  min-w-[15rem] tablet:max-w-[18.125rem]  h-[20rem] mx-4 cursor-pointer hover:scale-105 ease-in-out duration-200 rounded-2xl">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1VfBsvuZ0U4M--PG69jUotlUzQaeO0yE4"
                      className="h-[12.5rem] object-cover rounded-2xl"
                    />
                  </div>
                  <div className="w-screen bg-slate-400  min-w-[15rem] tablet:max-w-[18.125rem]  h-[20rem] mx-4 cursor-pointer hover:scale-105 ease-in-out duration-200 rounded-2xl">
                    {" "}
                    <img
                      src="https://drive.google.com/uc?export=view&id=18vmUQusZFn95lWH9ecXy0z1dXlPFkDph"
                      className="h-[12.5rem] object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col py-[6.625rem]">
              <h1 className="font-jakarta font-bold text-[32px] flex justify-center">
                Personal Blog
              </h1>

              <div className="w-screen max-w-[90rem] flex justify-center">
                {" "}
                <div className=" flex flex-col items-center gap-8 tablet:gap-0  tablet:flex-row tablet:justify-evenly w-screen tablet:max-w-[60rem] mt-[2.25rem]">
                  <div className="max-w-[20rem] tablet:max-w-[18.125rem]   h-full bg-slate-300 rounded-2xl mx-4 ">
                    <img
                      src="https://drive.google.com/uc?export=view&id=187qz_RB1VljYHoB498YK7KmnxKXM1SdV"
                      className="h-[12.5rem] object-cover rounded-2xl"
                    />
                    <h1 className="font-jakarta font-bold my-2 text-[20px] mx-3 ">
                      Button Design — UI component series
                    </h1>
                    <h1 className="font-jakarta font-normal mx-3 text-[16px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce id magna nec ante scelerisque laoreet. Fusce finibus
                      ...
                    </h1>
                    <div className="flex justify-center h-14 bg-slate-50 rounded-bl-2xl rounded-br-2xl mt-2">
                      <button className="px-3 flex items-center">
                        Continue Reading
                      </button>
                    </div>
                  </div>
                  <div className="max-w-[20rem] tablet:max-w-[18.125rem]  h-full bg-slate-300 rounded-2xl mx-4">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1U5hD-QZttKxoDufrfn_XloMkiVn-sj1_"
                      className="h-[12.5rem] w-full object-cover rounded-2xl"
                    />
                    <h1 className="font-jakarta font-bold my-2 text-[20px] mx-3 ">
                      Button Design — UI component series
                    </h1>
                    <h1 className="font-jakarta font-normal mx-3 text-[16px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce id magna nec ante scelerisque laoreet. Fusce finibus
                      ...
                    </h1>
                    <div className="flex justify-center h-14 bg-slate-50 rounded-bl-2xl rounded-br-2xl mt-2">
                      <button className="px-3 flex items-center">
                        Continue Reading
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-[3.125rem] flex justify-evenly w-screen  max-w-[90rem] ">
              <BsGithub className="h-[1.875rem] w-[1.875rem] fill-black" />
              <GrLinkedin className="h-[1.875rem] w-[1.875rem] fill-black" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
