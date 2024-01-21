import React from "react";

function Aboutme() {
  return (
    <div className=" flex flex-col items-start mx-10 py-10 text-white dark:text-black h-screen">
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
            Welcome, my name is{" "}
            <span className="text-orange font-bold"> Jomar Cardoza</span>. My
            journey into programming was ignited by my deep-rooted fascination
            with audio engineering and production. The boundless flexibility and
            creative avenues that audio engineering introduced to me at a young
            age have beautifully intertwined with my passion for coding, a
            skillset I've honed beyond my academic pursuits. My aspiration is to
            leverage my proficiency in web development to transform people&apos;s
            concepts into tangible realities. I aspire to craft solutions that
            streamline their everyday lives, making them more effortless and
            efficient. Presently, I am actively seeking opportunities to
            contribute my expertise to dynamic teams, believing that I can be a
            valuable asset wherever I lend my talents.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
