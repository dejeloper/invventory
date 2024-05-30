"use client";

import { HeaderToggleTheme } from "./";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 bg-card border-b border-slate-200 dark:bg-card dark:border-slate-700 z-30  ">
      <div className="pr-4">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex">
            <Button
              variant={"ghost"}
              className="w-16 h-16 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 md:hidden rounded-none"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </Button>
          </div>
          <div className="flex items-center">
            <HeaderToggleTheme />
          </div>
        </div>
      </div>
    </header>
  );
}
