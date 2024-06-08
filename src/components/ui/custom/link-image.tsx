import Link from "next/link";
import {
  ButtonImagenCustoms,
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
      <ButtonImagenCustoms icon={icon} className={className} {...props}>
        {children}
      </ButtonImagenCustoms>
    </Link>
  );
}
