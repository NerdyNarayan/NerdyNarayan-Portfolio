import * as React from "react";
import Image from "next/image";
import * as runtime from "react/jsx-runtime";

import { cn } from "@/lib/utils";
import { MdxCard } from "./mdx-card";
import { Button } from "./ui/button";
import { PreCard } from "./pre-card";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  h1: ({ className, ...props }: { className: string }) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight   ",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: { className: string }) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: { className: string }) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: { className: string }) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: { className: string }) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: { className: string }) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: { className: string }) => (
    <a
      className={cn(
        "font-medium text-primary/80 hover:underline hover:text-primary/90  underline-offset-4",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: { className: string }) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: { className: string }) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: { className: string }) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: { className: string }) => (
    <li className={cn("my-3", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: { className: string }) => (
    <blockquote
      className={cn(
        "[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border   w-full", className)} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("even:bg-muted m-0 border-t p-0", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: { className: string }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: { className: string }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    children,
    title,
    ...props
  }: {
    className: string;
    children: React.ReactNode;
    title: string;
  }) => (
    <pre className={cn(className, "rounded-lg pl-2  bg-[#1e1e2e] ")}>
      {children}
    </pre>
  ),
  code: ({
    className,

    ...props
  }: {
    children: React.ReactNode;
    className: string;
    file: string;
  }) => (
    <code
      className={cn(
        "relative min-h-9   items-center overflow-y-auto   px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    ></code>
  ),
  Image,
  Card: MdxCard,
  PreCard,
};

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export function MDXContent({ code, components }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <div className="mdx">
      <Component components={{ ...components }} />;
    </div>
  );
}

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
