import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { SheetClose } from "../ui/sheet";
import { Button } from "../ui/button";

interface SidebarLinkGroupProps {
  pathname: string;
  name: string;
  url: string;
  icon?: LucideIcon;
  open?: boolean;
  numberNotification?: number;
  colorNotification?: string;
}

export function SidebarMenuIndividualSheet({
  pathname: currentPath,
  name,
  url,
  icon: Icon,
  numberNotification = 0,
  colorNotification = "bg-indigo-500",
}: SidebarLinkGroupProps) {
  return (
    <Link
      href={url}
      passHref
      className={`block text-slate-200 truncate transition duration-150 ${
        currentPath.includes(url) ? "hover:text-slate-200" : "hover:text-white"
      }`}
    >
      <SheetClose asChild>
        <Button
          variant={"ghost"}
          className="flex justify-start h-auto m-0 p-0 w-full hover:bg-transparent"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {Icon && <Icon size={20} />}
              <span className="text-sm font-medium ml-3 duration-200">
                {name}
              </span>
            </div>
            <div className="flex flex-shrink-0 ml-2">
              {numberNotification != null &&
                numberNotification != undefined &&
                numberNotification > 0 && (
                  <span
                    className={`inline-flex items-center justify-center h-5 text-xs font-medium text-white ${colorNotification} px-2 rounded`}
                  >
                    {numberNotification}
                  </span>
                )}
            </div>
          </div>
        </Button>
      </SheetClose>
    </Link>
  );
}
