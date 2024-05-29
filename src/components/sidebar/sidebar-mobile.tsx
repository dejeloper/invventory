"use client";

import { RiGhostLine } from "react-icons/ri";
import {
  SidebarLinkGroup,
  SidebarLogoWait,
  SidebarMenu,
  SidebarMenuIndividual,
} from "./";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuSidebar, menuSidebar } from "@/services/menu";
import { usePathname } from "next/navigation";
interface SidebarProps {
  menuItems: MenuSidebar[];
}
export function SidebarMobile({ menuItems }: SidebarProps) {
  return <SidebarLogoWait />;
}
