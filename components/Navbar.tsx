"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(pathname);
  const handleclick = (href: string) => {
    setToggle(href);
  };
  return (
    <div className="flex justify-center">
      <div className=" w-fit bg-slate-800 rounded-full">
        <div className="hidden lg:visible absolute text-white font-bold">
          Logo
        </div>
        <div className="text-black w-fit flex justify-center">
          <Link
            href="/guider"
            onClick={() => handleclick("/guider")}
            className={cn(
              "border hover:bg-white hover:text-black hover:rounded-full cursor-pointer text-lg text-white px-4 py-1 rounded-full",
              toggle === "/guider" && "bg-white text-black"
            )}
          >
            Guider
          </Link>
          <Link
            href="/resume"
            onClick={() => handleclick("/resume")}
            className={cn(
              "border hover:bg-white hover:text-black hover:rounded-full cursor-pointer text-lg text-white px-4 py-1 rounded-full",
              toggle === "/resume" && "bg-white text-black"
            )}
          >
            Builder
          </Link>
          <Link
            href="/analyze"
            onClick={() => handleclick("/analyze")}
            className={cn(
              "border hover:bg-white hover:text-black hover:rounded-full cursor-pointer text-lg text-white px-4 py-1 rounded-full",
              toggle === "/analyze" && "bg-white text-black"
            )}
          >
            Analyze
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
