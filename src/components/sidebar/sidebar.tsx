"use client";

import { MenuDrawer, MenuSidebar } from "@/interfaces";
import { SidebarDesktop, SidebarLogoWait, SidebarMobile } from "./";
import { useEffect, useState } from "react";
import { menuSidebar } from "@/services/menuSidebar";
import { menuDrawer } from "@/services/menuDrawer";

export function Sidebar() {
  const menuItems: MenuSidebar[] = menuSidebar;
  const menuDrawerItems: MenuDrawer[] = menuDrawer;
  const [isClient, setIsClient] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isClient) return <SidebarLogoWait />;

  return isDesktop ? (
    <SidebarDesktop menuItems={menuItems} />
  ) : (
    <SidebarMobile menuItems={menuItems} menuDrawer={menuDrawerItems} />
  );
}
