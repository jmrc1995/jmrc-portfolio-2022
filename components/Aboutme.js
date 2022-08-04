import React from "react";

function Aboutme() {
  return (
    <div className=" flex flex-col items-start mx-10 py-10 z-30 text-white dark:text-black">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 place-items-center md:gap-5 lg:gap-0 xl:gap--5">
        <div className="border rounded-full grid grid-cols-1 justify-items-center rounded-full max-w-md md:col-start-1 2xl:col-start-2  lg:mr-5 " >
          <div className=" relative overflow-hidden max-w-md shadow-2xl shadow-orange rounded-full ">
            <img
              src={"/JomarApple.png"}
              className="w-full max-w-md object-fill rounded-full "
            />
          </div>
        </div>

        <div className=" grid grid-col-2 md:content-center pt-10 mt-10 2xl:mr-20 2xl:col-span-2 ">
        
            <h1 className="flex font-dmserif font-bold text-6xl lg:text-8xl  ">About Me</h1>

            <p className="text-sm font-opensans mt-5 font-light leading-relaxed  ">
              Hi, my name is{" "}
              <span className="text-orange font-bold">Jomar Cardoza</span> I am
              a passionate creator that enjoys audio engineering and production.
              With the enviorment and workflow presented to me by the world of
              audio, the transition into programming felt seamless. Both, give
              me the freedom to create, learn, and produce what comes to mind.
            </p>
        
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
