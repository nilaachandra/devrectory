"use client"
import React from "react";
import { Button } from "./ui/button";
import { PackagePlus, Star } from "lucide-react";

const Hero = () => {
  // const dfdf = () => {};
  return (
    <section className="mt-12">
      <div className="lg:text-xl xl:text-xl text-sm text-zinc-500 dark:text-white">
        <h1>A toolkit directory for web designers & developers.</h1>
        <h1>Carefully Curated & Maintained for the community.</h1>
      </div>
      <div className="flex mt-3 gap-2">
        <Button className="">
          <PackagePlus className="h-[1.2rem] w-[1.2rem]" />{" "}
          <span className="">Submit Resource</span>
        </Button>
        <Button
          variant="outline"
          className="border border-zinc-500 dark:border-white"
        >
          <Star className="h-[1.2rem] w-[1.2rem]" />
          <span className="">Star Repo</span>
        </Button>
      </div>
      {/* <SearchBar onSearch={dfdf} /> */}
    </section>
  );
};

export default Hero;
