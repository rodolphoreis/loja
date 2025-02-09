import React from "react";

import { ShoppingCartIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full h-32 ">
      <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between">
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1">
            <ShoppingCartIcon className="h-8 w-8 text-orange-300 font-bold" />

            <span className="font-medium text-2xl text-blue-400">Dev</span>
          </div>

          <span className="text-sm font-medium text-zinc-400 mt-[-5px]">
            Shop Online
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
