"use client";
import type { NavItem } from "@/config/site";

import Link from "next/link";
import React from "react";

import { useActiveNav } from "@/hooks/useActiveNav";
import { cn } from "@/lib/utils";
import { navItems } from "@/config/site";

import { Button } from "../ui/button";
const SiteNav = () => {
  return (
    <div className="hidden mr-20  items-center transition-all duration-100 justify-evenly gap-1 sm:flex">
      {navItems.items.map((item, index) => (
        <SiteMenuItem
          key={index}
          href={item.href}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </div>
  );
};

const SiteMenuItem = ({ title, href, icon }: NavItem) => {
  const Icon = icon;
  const isActive = useActiveNav(href);

  return (
    <Link passHref href={href}>
      <Button
        className={cn(
          isActive && "bg-accent",
          "flex w-full flex-col  justify-center gap-3 text-lg hover:bg-purple-400/40 items-center space-x-4 font-semibold text-primary",
        )}
        variant={"ghost"}
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
