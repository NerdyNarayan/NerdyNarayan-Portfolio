import type { ReactNode } from "react";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

function BentoGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        className,
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-5",
      )}
    >
      {children}
    </div>
  );
}
function BentoCard({
  name,
  className,
  background,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <div
      key={name}
      className={cn(
        className,
        "group relative col-span-3 flex flex-col justify-between overflow-hidden roudned-2xl",
        "transform-gpu dark:bg-card dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div>{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover: -translate-y-10" />
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <Button
          asChild
          className="pointer-events-auto"
          size="sm"
          variant={"ghost"}
        >
          <Link href={href}>
            {cta}
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
export { BentoGrid, BentoCard };
