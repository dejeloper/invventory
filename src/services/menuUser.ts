import { MenuUser } from "@/interfaces";
import { CircleUserRound, LogOut, Settings } from "lucide-react";

export const menuUser: MenuUser[] = [
  { name: "Perfil", icon: CircleUserRound, type: "link", pathname: "/profile" },
  {
    name: "Configuraciones",
    icon: Settings,
    type: "link",
    pathname: "/settings",
  },
  {
    name: "Salir",
    icon: LogOut,
    type: "button",
    action: () => console.log("Salir"),
  },
];
