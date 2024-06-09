import Link from "next/link";
import {
  ButtonImagenCustomsDrawerClose,
  type ButtonImagenCustomsProps,
} from "./button-imagen";

interface LinkImageCustomProps extends ButtonImagenCustomsProps {
  href: string;
}

export function LinkImageCustom({
  icon,
  className,
  children,
  href,
  ...props
}: LinkImageCustomProps) {
  return (
    <Link href={href}>
      <ButtonImagenCustomsDrawerClose
        icon={icon}
        className={className}
        {...props}
      >
        {children}
      </ButtonImagenCustomsDrawerClose>
    </Link>
  );
}
