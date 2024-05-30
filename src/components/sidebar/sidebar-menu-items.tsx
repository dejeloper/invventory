import Link from "next/link";
import { Sheet, SheetClose } from "../ui/sheet";
import { Button } from "../ui/button";

interface SidebarMenuItemsProps {
  name: string;
  url: string;
  isActive?: boolean;
}

export function SidebarMenuItems({
  name,
  url,
  isActive = false,
}: SidebarMenuItemsProps) {
  return (
    <li className="mb-1 last:mb-0">
      <Link
        href={url}
        passHref
        className={
          "block transition duration-150 truncate " +
          (isActive ? "text-indigo-500" : "text-slate-400 hover:text-slate-200")
        }
      >
        <Sheet>
          <SheetClose asChild>
            <Button
              variant={"ghost"}
              className="flex justify-start h-auto m-0 p-0 w-full hover:bg-transparent"
            >
              <span className="text-sm font-medium duration-200">{name}</span>
            </Button>
          </SheetClose>
        </Sheet>
      </Link>
    </li>
  );
}
