import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { PackagePlus } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Link href={"/"} className="flex items-center bg-zinc-100 dark:bg-zinc-900 pr-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200 cursor-pointer">
        <Image src={"/devrectory.png"} height={50} width={50} alt="" />
        <p className="text-lg font-bold dark:text-white text-black">
          Devrectory
        </p>
      </Link>
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
