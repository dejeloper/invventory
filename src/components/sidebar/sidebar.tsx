"use client";
import { menuSidebar } from "@/services/menu";
import { usePathname } from "next/navigation";
import { RiGhostLine } from "react-icons/ri";
import { SidebarLinkGroup, SidebarMenu, SidebarMenuIndividual } from "./";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar() {
  const pathname = usePathname();
  const sidebarOpen = false;
  const menuItems = menuSidebar;

  return (
    <div className="border-0 lg:border-r lg:border-r-slate-200 lg:dark:border-r-slate-700">
      <aside
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          <RiGhostLine className="w-8 h-8 text-white" />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Módulos
              </span>
            </h3>

            <ul className="mt-3">
              {menuItems.map((item, index) => {
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
                              url={item.url}
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
    </div>
  );
}

// <li
// className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 bg-slate-900`}
// >
// hola
// </li>

// if (item.items === undefined) {

// 	<SidebarLinkGroup key={item.name} activecondition={path.includes(item.pathname)} >
// 		{(handleClick, open) => {
// 			return (
// 				<>hola</>

// 				 )}}
// 						</SidebarLinkGroup>
// return (
//   <li
//     key={index}
//     className="px-3 py-2 rounded-sm mb-0.5 last:mb-0 bg-slate-900"
//   >
//     {item.name}
//   </li>
// );
// }
