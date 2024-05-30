"use client";
import { RiGhostLine } from "react-icons/ri";

export function SidebarLogoWait() {
  return (
    <div className="md:flex justify-start md:w-[255px] hidden">
      <div className="w-full h-16 py-4 px-6 text-white bg-slate-800 border-b border-slate-200 dark:bg-slate-800 dark:border-slate-700">
        <RiGhostLine className="w-8 h-8" />
      </div>
    </div>
  );
}
