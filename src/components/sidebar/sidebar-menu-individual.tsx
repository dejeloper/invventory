"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  pathname,
  name,
  url,
  icon: Icon,
  open = false,
  numberNotification = 0,
  colorNotification = "bg-indigo-500",
}: SidebarLinkGroupProps) {
  const currentPath = usePathname();

  return (
    <Link
      href={url}
      passHref
      className={`block text-slate-200 truncate transition duration-150 ${
        currentPath.includes(url) ? "hover:text-slate-200" : "hover:text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {Icon && <Icon size={20} />}
          <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
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
