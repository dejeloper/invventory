import { MenuSidebar } from "@/interfaces";
import { LayoutDashboard, Mail, Settings, ShoppingCart } from "lucide-react";

export const menuSidebar: MenuSidebar[] = [
  {
    pathname: "dashboard",
    name: "Tablero",
    icon: LayoutDashboard,
    items: [
      { name: "Inicio", url: "/dashboard/home" },
      { name: "Analytics", url: "/dashboard/analytics" },
      { name: "Fintech", url: "/dashboard/fintech" },
    ],
  },
  {
    pathname: "ecommerce",
    name: "Comercio",
    icon: ShoppingCart,
    items: [
      { name: "Clientes", url: "/ecommerce/customers" },
      { name: "Ordenes", url: "/ecommerce/ordens" },
      { name: "Facturas", url: "/ecommerce/invoices" },
      { name: "Compras", url: "/ecommerce/shop" },
      { name: "Carrito de Compras", url: "/ecommerce/cart" },
      { name: "Pagos", url: "/ecommerce/pay" },
    ],
  },
  {
    pathname: "inbox",
    name: "Inbox",
    icon: Mail,
    url: "/inbox/",
  },
  {
    pathname: "settings",
    name: "Configuraciones",
    icon: Settings,
    items: [
      { name: "Parámetros", url: "/settings/parameters" },
      { name: "Usuarios", url: "/settings/users" },
      { name: "Listas", url: "/settings/list" },
    ],
  },
];
