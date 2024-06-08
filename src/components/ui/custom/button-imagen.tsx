import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../button";
import { LucideIcon } from "lucide-react";
import { SheetClose } from "../sheet";
import { DrawerClose } from "../drawer";

export interface ButtonImagenCustomsProps extends ButtonProps {
  icon?: LucideIcon;
}

export function ButtonImagenCustoms({
  icon: Icon,
  className,
  children,
  ...props
}: ButtonImagenCustomsProps) {
  return (
    <Button
      variant={"ghost"}
      className={cn("gap-2 justify-start", className)}
      {...props}
    >
      {Icon && <Icon size={20} />}
      <span> {children}</span>
    </Button>
  );
}

export function ButtonImagenCustomsSheetClose(props: ButtonImagenCustomsProps) {
  return (
    <SheetClose asChild>
      <ButtonImagenCustoms {...props} />
    </SheetClose>
  );
}

export function ButtonImagenCustomsDrawerClose(
  props: ButtonImagenCustomsProps
) {
  return (
    <DrawerClose asChild>
      <ButtonImagenCustoms {...props} />
    </DrawerClose>
  );
}
