import type { IconType } from "react-icons";

import { ImBlog } from "react-icons/im";
import { FaCode } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
export type NavItem = {
  title: string;
  href: string;
  icon: IconType;
};
const blog: NavItem = {
  title: "blog",
  href: "/blog",
  icon: ImBlog,
};
const project: NavItem = {
  title: "Projects",
  href: "/projects",
  icon: FaCode,
};
const guide: NavItem = {
  title: "Guides",
  href: "https://nerd-docs.vercel.app/",
  icon: RiRoadMapLine,
};
const about: NavItem = {
  title: "About",
  href: "/about",
  icon: FaUser,
};

export const navItems = {
  items: [blog, project, guide, about] as NavItem[],
};
