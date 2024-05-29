"use client";

import { MenuSidebar, menuSidebar } from "@/services/menu";
import { SidebarDesktop, SidebarLogoWait, SidebarMobile } from "./";
import { useEffect, useState } from "react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar() {
  const menuItems: MenuSidebar[] = menuSidebar;
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
    <SidebarMobile menuItems={menuItems} />
  );
}
