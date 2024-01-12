import React from "react";
import { useTheme } from "next-themes";
import { FcGlobe } from "react-icons/fc";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsSun
          className="w-5 h-10 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsMoon
          className="w-5 h-10 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <>
      <div className="flex  justify-between items-center z-30 p-10 ">
        <h1
          suppressHydrationWarning
          className=" font-dmserif text-3xl text-white dark:text-black"
        >
          jomar.
        </h1>
        <div className="flex items-center flex-end text-white dark:text-black">
          {renderThemeChanger()}
          <a href="./Jomar Cardoza_Resume_11.2023 (2).pdf">
            <FcGlobe className="w-6 h-10 ml-2 cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
