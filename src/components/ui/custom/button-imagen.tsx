import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../button";
import { LucideIcon } from "lucide-react";
import { SheetClose } from "../sheet";

interface ButtonImagenCustomsProps extends ButtonProps {
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

export function ButtonImagenCustomsSheet(props: ButtonImagenCustomsProps) {
  return (
    <SheetClose asChild>
      <ButtonImagenCustoms {...props} />
    </SheetClose>
  );
}
