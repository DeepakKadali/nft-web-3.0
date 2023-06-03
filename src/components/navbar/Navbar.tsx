import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { SelectedComponent } from "../../common/types";
import Link from "./Link";

type Props = {
  selectedComponent: SelectedComponent;
  setSelectedComponent: (value: SelectedComponent) => void;
};

const Navbar = ({selectedComponent, setSelectedComponent}:Props) => {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },[theme])

  const handleThemeClick = () => {
    setTheme(theme === "dark" ? "ligth": "dark");
  }
  
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between gap-16">
        <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-bluebg via-purple-500 to-black dark:to-white ">
          SPACE
        </h1>
        {/* <div className="text-2xl font-bold dark:text-white font-teko">HOME</div>
        <div className="text-2xl font-bold dark:text-white font-teko">BLOG</div>
        <div className="text-2xl font-bold dark:text-white font-teko">
          MARKETPLACE
        </div>
        <div className="text-2xl font-bold dark:text-white font-teko">
          ROADMAP
        </div> */}
        <Link
          component="HOME"
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />

        <Link
          component="BLOG"
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />
        <Link
          component="MARKETPLACE"
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />
        <Link
          component="ROADMAP"
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />
      </div>

      <div className="flex items-center justify-between gap-16">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6  dark:text-white opacity-50 dark:opacity-95"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
          <div className="cursor-pointer">
            {theme === "ligth" ? (
              <div onClick={() => handleThemeClick()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  id="switch"
                  className="dark:text-white fill-current text-bl"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <g fill="#757575">
                    <path d="M17 19H7c-3.86 0-7-3.14-7-7s3.14-7 7-7h10c3.86 0 7 3.14 7 7s-3.14 7-7 7zM7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5h10c2.757 0 5-2.243 5-5s-2.243-5-5-5H7z"></path>
                    <circle cx="17" cy="12" r="3"></circle>
                  </g>
                </svg>
              </div>
            ) : (
              <div onClick={() => handleThemeClick()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  id="switch"
                  className="dark:text-white fill-current text-black"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <g fill="#757575">
                    <path d="M17 19H7c-3.86 0-7-3.14-7-7s3.14-7 7-7h10c3.86 0 7 3.14 7 7s-3.14 7-7 7zM7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5h10c2.757 0 5-2.243 5-5s-2.243-5-5-5H7z"></path>
                    <circle cx="7" cy="12" r="3"></circle>
                  </g>
                </svg>
              </div>
            )}
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7  dark:text-white text-extrabold opacity-95 dark:opacity-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </div>

        <Button className="py-4 bg-pink-300 dark:bg-bluebg rounded-full justify-center items-center">
          CONNECT WALLET
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
