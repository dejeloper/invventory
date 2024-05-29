"use client";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "next-themes";

export function HeaderToggleTheme() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {theme === "dark" ? (
        <button
          className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-500 transition duration-150 rounded-full"
          onClick={changeTheme}
        >
          <RiSunFill className="text-slate-500 dark:text-slate-200" />
        </button>
      ) : (
        <button
          className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-500 transition duration-150 rounded-full"
          onClick={changeTheme}
        >
          <RiMoonFill className="text-slate-500 dark:text-slate-200" />
        </button>
      )}
    </>
  );
}
