import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SidebarLinkGroupProps {
  pathname: string;
  name: string;
  url: string;
  icon?: LucideIcon;
  open?: boolean;
  numberNotification?: number;
  colorNotification?: string;
}
export function SidebarMenuIndividual({
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
      className={`block text-foreground truncate transition duration-150 ${
        currentPath.includes(url) ? "hover:text-slate-200" : "hover:text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {Icon && <Icon size={20} />}
          <span className="text-sm font-medium ml-3 duration-200 dark:text-slate-200 text-slate-800">
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
    </Link>
  );
}
