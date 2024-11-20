"use client";
import { AnimatedGroup } from "@/components/core/animated-group";
import Tool from "@/components/Tool";
import { toolslist } from "@/staticdata/toolslist";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <AnimatedGroup
        className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4"
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 1.2,
                type: "spring",
                bounce: 0.3,
              },
            },
          },
        }}
      >
        {toolslist.map((item, index) => (
          <Tool
            description={item.description}
            externalUrl={item.externalUrl}
            id={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            key={index}
          />
        ))}
      </AnimatedGroup>
    </div>
  );
}
