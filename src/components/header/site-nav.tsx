import { NavItem } from "@/config/site";
import { useActiveNav } from "@/hooks/useActiveNav";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { navItems } from "@/config/site";
const SiteNav = () => {
  return (
    <div className="hidden mr-20  items-center transition-all duration-100 justify-evenly gap-1 sm:flex">
      {navItems.items.map((item, index) => (
        <SiteMenuItem
          key={index}
          title={item.title}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

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
export default SiteNav;
