"use client";
import type { ReactNode } from "react";

import { ArrowRightIcon } from "@radix-ui/react-icons";

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
        "grid w-full auto-rows-[20rem] grid-cols-3 gap-4",
        className,
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
  name?: string;
  className: string;
  background: ReactNode;
  Icon?: any;
  description: string;
  href: string;
  cta?: string;
}) {
  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className,
      )}
    >
      <div className="mt-4">{background}</div>
      {cta ? (
        <div>
          <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <h3 className="text-xl font-bold text-neutral-700 dark:text-neutral-300">
              {name}
            </h3>
            <p className="max-w-lg text-neutral-400">{description}</p>
          </div>

          <div
            className={cn(
              "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
          >
            <Button
              asChild
              className="pointer-events-auto"
              size="sm"
              variant="ghost"
            >
              <a href={href}>
                {cta}
                <ArrowRightIcon className="ml-2 size-4" />
              </a>
            </Button>
          </div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
        </div>
      ) : (
        <></>
      )}{" "}
    </div>
  );
}

export { BentoCard, BentoGrid };
