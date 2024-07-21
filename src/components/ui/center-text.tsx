export default function CenterText({ children }: { children: string }) {
  return (
    <div className=" flex  text-nowrap items-center gap-3 md:gap-5 justify-center py-4 text-3xl font-bold text-primary">
      <div className="w-full bg-[#cba6f7] h-[1px] flex "></div>
      {children} <div className="w-full bg-[#cba6f7] h-[1px] flex "></div>
    </div>
  );
}
