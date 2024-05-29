"use client";

import { MenuSidebar } from "@/services/menu";
import { RiGhostLine } from "react-icons/ri";
import { SidebarLinkGroup, SidebarMenu, SidebarMenuIndividual } from "./";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarProps {
  menuItems: MenuSidebar[];
}

export function SidebarDesktop({ menuItems }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`flex flex-col absolute z-40 left-0 top-0 lg:static h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 border-r border-r-slate-200 dark:border-r-slate-700 ease-in-out`}
    >
      <div className="flex justify-between mb-10 pr-3 sm:px-2">
        <Link href="/">
          <RiGhostLine className="w-8 h-8 text-white" />
        </Link>
      </div>
      <div className="space-y-8">
        <div>
          <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
              Módulos
            </span>
          </h3>

          <ul className="mt-3">
            {menuItems.map((item) => {
              const path =
                pathname === "/" ? "dashboard/home" : pathname.toLowerCase();

              if (item.items === undefined) {
                return (
                  <SidebarLinkGroup
                    key={item.name}
                    activecondition={path.includes(item.pathname)}
                  >
                    {(handleClick, open) => {
                      return (
                        <>
                          <SidebarMenuIndividual
                            key={item.name}
                            pathname={item.pathname}
                            name={item.name}
                            url={item.url!}
                            icon={item.icon}
                            numberNotification={2}
                            open={open}
                          />
                        </>
                      );
                    }}
                  </SidebarLinkGroup>
                );
              } else {
                return (
                  <SidebarLinkGroup
                    key={item.name}
                    activecondition={path.includes(item.pathname)}
                  >
                    {(handleClick, open) => {
                      return (
                        <SidebarMenu
                          menuItems={item}
                          handleClick={handleClick}
                          open={open}
                        />
                      );
                    }}
                  </SidebarLinkGroup>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
