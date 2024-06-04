"use client";

import { useState } from "react";

interface SidebarLinkGroupProps {
  children: (handleClick: () => void, open: boolean) => React.ReactNode;
  activecondition: boolean;
}

export function SidebarLinkGroup({
  children,
  activecondition,
}: SidebarLinkGroupProps) {
  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        activecondition && "bg-slate-100 dark:bg-slate-800"
      }`}
    >
      {children(handleClick, open)}
    </li>
  );
}
