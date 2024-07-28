"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { NavItem, navItems } from "@/config/site";
import { useActiveNav } from "@/hooks/useActiveNav";
import Link from "next/link";
import { cn } from "@/lib/utils";
const SiteMenuItem = ({ title, href, icon }: NavItem) => {
  const Icon = icon;
  const isActive = useActiveNav(href);
  return (
    <Link href={href} passHref>
      <Button
        variant={"ghost"}
        className={cn(
          isActive && "bg-accent",
          "flex w-full flex-col items-start justify-start gap-3 space-x-4 font-semibold text-primary"
        )}
      >
        <div className="flex items-center justify-center gap-3">
          <Icon />
          {title}
        </div>
      </Button>
    </Link>
  );
};
const SiteMenu = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex items-center md:hidden" variant={"outline"}>
          <RxHamburgerMenu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
          <DrawerDescription>Nerdy Narayan</DrawerDescription>
        </DrawerHeader>
        {navItems.items.map((item) => (
          <SiteMenuItem
            key={item.title}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </DrawerContent>
    </Drawer>
  );
};
export default SiteMenu;
