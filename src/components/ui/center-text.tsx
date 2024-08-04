export default function CenterText({ children }: { children: string }) {
  return (
    <div className=" flex  text-nowrap items-center gap-3 md:gap-5 justify-center py-4 text-3xl font-bold text-primary">
      <div className="w-full bg-gradient-to-r from-transparent via-[#cba6f7] to-[#cba6f7] h-[1px] flex " />
      <div className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 ">
        {children}{" "}
      </div>
      <div className="w-full bg-gradient-to-l from-transparent via-[#cba6f7] to-[#cba6f7] h-[1px] flex " />
    </div>
  );
}
