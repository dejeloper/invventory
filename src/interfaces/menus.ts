import { LucideIcon } from "lucide-react";

export interface MenuSidebar {
  pathname: string;
  name: string;
  icon: LucideIcon;
  items?: MenuSidebarItems[];
  url?: string;
}

export interface MenuSidebarItems {
  name: string;
  url: string;
}

export interface MenuUser {
  name: string;
  icon: LucideIcon;
  type: "link" | "button";
  pathname?: string;
  action?: () => void;
}
