import React from "react";
import { ModeToggle } from "./mode-toggle";
import { ShoppingCartIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full h-20 ">
      <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <ShoppingCartIcon className="h-12 w-10 text-blue-400 font-bold" />
          <div className="flex flex-col gap-0">
            <div>
              <span className="font-medium text-2xl text-blue-400">ON</span>
              <span className="font-medium text-2xl text-orange-300">Line</span>
            </div>
            <span className="text-xs font-medium text-zinc-400 mt-[-5px]">
              Shop
            </span>
          </div>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
