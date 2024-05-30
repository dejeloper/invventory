"use client";

import { RiGhostLine } from "react-icons/ri";
import { SidebarLinkGroup, SidebarMenu, SidebarMenuIndividual } from "./";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuSidebar } from "@/services/menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  menuItems: MenuSidebar[];
}
export function SidebarMobile({ menuItems }: SidebarProps) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="fixed top-0 left-0 w-16 h-16 z-40 -mb-px rounded-none">
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
        </div>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="flex justify-between mb-4 pr-3 sm:px-2">
          <Link href="/">
            <RiGhostLine className="w-8 h-8 text-white" />
          </Link>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
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
      </SheetContent>
    </Sheet>
  );
}
