"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MenuSidebar } from "@/interfaces";
import { SidebarMenuItems, SidebarMenuItemsSheet } from "./";

interface SidebarMenuProps {
  menuItems: MenuSidebar;
  handleClick: () => void;
  open: boolean;
  device?: string;
}

export function SidebarMenu({
  menuItems,
  handleClick,
  open,
  device,
}: SidebarMenuProps) {
  const { name, icon: Icon, items } = menuItems;
  const pathname = usePathname();

  const useSidebar = () => {
    const [sidebarExpanded, setSidebarExpanded] = useState(true);

    useEffect(() => {
      const storedSidebarExpanded =
        typeof window !== "undefined" &&
        localStorage.getItem("sidebar-expanded") === null
          ? "true"
          : localStorage.getItem("sidebar-expanded");
      setSidebarExpanded(
        storedSidebarExpanded === null ? true : storedSidebarExpanded === "true"
      );
    }, []);

    return [sidebarExpanded];
  };

  const [sidebarExpanded] = useSidebar();
  const [storedSidebarExpanded, setStoredSidebarExpanded] =
    useState(sidebarExpanded);

  return (
    <>
      <a
        href="#0"
        className={`block text-foreground truncate transition duration-150 ${
          pathname.includes(menuItems.pathname)
            ? "dark:hover:text-slate-200 hover:text-slate-700"
            : "hover:text-foreground"
        }`}
        onClick={(e) => {
          if (sidebarExpanded === null) {
            localStorage.setItem("sidebar-expanded", "true");
          }
          e.preventDefault();
          sidebarExpanded ? handleClick() : setStoredSidebarExpanded(true);
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {Icon && <Icon size={20} />}
            <span className="text-sm font-medium ml-3 duration-200">
              {name}
            </span>
          </div>
          <div className="flex shrink-0 ml-2">
            <svg
              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                open ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 12 12"
            >
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </div>
        </div>
      </a>
      <div className="block">
        <ul className={`pl-9 mt-1 ${(!open && "hidden") || "block"}`}>
          {items &&
            items.map((item) => {
              const menuIsActive = pathname.includes(item.url);

              if (device === "mobile") {
                return (
                  <SidebarMenuItemsSheet
                    key={item.name}
                    name={item.name}
                    url={item.url}
                    isActive={menuIsActive}
                  />
                );
              } else {
                return (
                  <SidebarMenuItems
                    key={item.name}
                    name={item.name}
                    url={item.url}
                    isActive={menuIsActive}
                  />
                );
              }
            })}
        </ul>
      </div>
    </>
  );
}
