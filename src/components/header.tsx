import { FC } from "react";

import Navbar from "./navbar";
import { cn } from "@/lib/utils";

const Header: FC = () => {
  return (
    <header>
      <div
        className={cn(
          "bg-background fixed inset-y-0 z-50 h-[56px] w-screen border-b shadow-sm"
        )}
      >
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
