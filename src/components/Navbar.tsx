import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { PackagePlus } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center dark:bg-white pr-2 rounded-lg ">
        <Image src={"/devrectory.png"} height={50} width={50} alt="" />
        <p className="text-lg font-bold text-black">Devrectory</p>
      </div>
      <div className="flex gap-2">
        <Button>
          <PackagePlus className="h-[1.2rem] w-[1.2rem]" />{" "}
          <span className="hidden lg:inline-block md:inline-block">Submit</span>
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
