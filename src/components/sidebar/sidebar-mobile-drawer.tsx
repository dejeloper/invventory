import { MenuUser } from "@/interfaces";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ButtonImagenCustomsDrawerClose } from "@/components/ui/custom/button-imagen";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { LinkImageCustom } from "@/components/ui/custom/link-image";
import { MoreHorizontal } from "lucide-react";

interface SidebarProps {
  menuUser: MenuUser[];
}

export function SidebarMobileDrawer({ menuUser }: SidebarProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant={"ghost"}
          className="w-full justify-start text-slate-800 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400"
        >
          <div className="flex justify-between items-center w-full">
            <div className=" flex gap-2">
              <Avatar className="h-5 w-5">
                <AvatarImage
                  src="https://www.dejeloper.com/images/me_01.jpg"
                  alt="avatar Perfil"
                />
                <AvatarFallback>JG</AvatarFallback>
              </Avatar>
              <span>Jhonatan Guerrero</span>
            </div>
            <MoreHorizontal size={20} />
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mb-2 p-2">
        <div className="flex flex-col space-y-2 mt-2">
          {menuUser.map((item, index) => {
            if (item.type === "link") {
              return (
                <LinkImageCustom
                  key={index}
                  href={item.pathname!}
                  size={"sm"}
                  icon={item.icon}
                  className="w-full text-slate-800 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400"
                >
                  {item.name}
                </LinkImageCustom>
              );
            } else {
              return (
                <ButtonImagenCustomsDrawerClose
                  key={index}
                  size={"sm"}
                  icon={item.icon}
                  className="w-full text-slate-800 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400"
                  onClick={item.action!}
                >
                  {item.name}
                </ButtonImagenCustomsDrawerClose>
              );
            }
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
