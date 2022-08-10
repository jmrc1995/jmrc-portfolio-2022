import React from "react";

function Aboutme() {
  return (
    <div className=" flex flex-col items-start mx-10 py-10 text-white dark:text-black">
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 place-items-center md:gap-5 lg:gap-0 xl:gap--5">
          <div className="w-full rounded-full grid grid-cols-1 justify-items-center rounded-full max-w-md md:col-start-1 2xl:col-start-2  lg:mr-5 ">
            <div className="border border-orange overflow-hidden max-w-md shadow-2xl shadow-orange rounded-full ">
              <img
                src={"/JomarApple.png"}
                alt="a picture of jomars"
                className="w-full max-w-sm rounded-full "
              />
            </div>
          </div>
        <div className="relative grid grid-col-2 md:content-center pt-10 mt-10 2xl:mr-24 2xl:col-span-2 z-30 ">
          <h1 className="flex font-dmserif font-bold text-6xl lg:text-8xl  ">
            About Me
          </h1>

          <p className="text-sm font-opensans mt-5 font-light leading-relaxed ">
            Welcome, my name is <span className="text-orange font-bold"> Jomar Cardoza</span>. I am a
            recent college graduate from NJCU with a bachelor&apos;s degree in
            computer science. My love for programming stemmed from my passion
            for audio engineering and production. The flexibility and creativity
            that audio engineering brought on from a young age has allowed me to
            expand my knowledge of writing and understanding code outside my
            degree. I want to use my skills in web development to bring people&apos;s
            ideas to reality and create solutions that will make their daily
            lives effortless. I am currently open to work opportunities as I
            think I would be a great asset to any team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
