"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuSidebar } from "@/interfaces";
import { SidebarLinkGroup, SidebarMenu, SidebarMenuIndividual } from "./";
import { RiGhostLine } from "react-icons/ri";

interface SidebarProps {
  menuItems: MenuSidebar[];
}

export function SidebarDesktop({ menuItems }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col absolute z-40 left-0 top-0 md:static h-screen overflow-y-scroll md:overflow-y-auto no-scrollbar w-64 md:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-background p-4 transition-all duration-200 border-r border-r-slate-200 dark:border-r-slate-700 ease-in-out">
      <div className="flex justify-between mb-6 pr-3 sm:px-2">
        <Link href="/">
          <RiGhostLine className="w-8 h-8 text-foreground" />
        </Link>
      </div>
      <div className="space-y-8">
        <div>
          <h3 className="text-xs uppercase text-foreground font-semibold pl-3">
            <span>Menú</span>
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
                          device={"desktop"}
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
