import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Inicio",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Servicios",
    newTab: false,
    path: "/#features",
  },

  {
    id: 2.1,
    title: "Quienes Somos",
    newTab: false,
    path: "/docs",
  },
  /*{
    id: 2.2,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },*/
  {
    id: 4,
    title: "Contacto",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
