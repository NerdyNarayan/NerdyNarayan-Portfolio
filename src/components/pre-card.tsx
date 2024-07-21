"use client";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
  className?: string;
  pwd?: string;
}

export function PreCard({
  children,
  className,
  icon,
  pwd,
  ...props
}: CalloutProps) {
  const childrenRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = () => {
    const text = childrenRef.current?.textContent || "";
    window.navigator.clipboard.writeText(text);
  };
  return (
    <div className="border rounded-xl  bg-[#1e1e2e] min-h-20 ">
      <div className="flex  rounded-t-xl bg-muted/70 font-mono text-sm  flex-row justify-between items-center gap-2  px-2 ">
        {pwd}
        <Button
          className=" w-fit transition-all duration-75 h-10 p-0 m-0 pt-0"
          variant={"ghost"}
          onClick={copyToClipboard}
        >
          [Copy]
        </Button>
      </div>
      <div ref={childrenRef} className=" ">
        {children}
      </div>
    </div>
  );
}
