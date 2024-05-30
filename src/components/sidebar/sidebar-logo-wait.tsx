"use client";
import { RiGhostLine } from "react-icons/ri";

export function SidebarLogoWait() {
  return (
    <div className="md:flex justify-start md:w-[255px] hidden">
      <div className="w-full h-16 py-4 px-6  border-b border-slate-200 dark:border-slate-700 dark:bg-card bg-card">
        <RiGhostLine className="w-8 h-8 text-slate-800 dark:text-slate-200 dark:bg-card bg-card" />
      </div>
    </div>
  );
}
