import React from "react";
import Layout from "./Layout";

function Blog() {
  return (
    <Layout>
      <div>
        {/* Personal Blog*/}

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  id magna nec ante scelerisque laoreet. Fusce finibus ...
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  id magna nec ante scelerisque laoreet. Fusce finibus ...
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
      </div>
    </Layout>
  );
}

export default Blog;
