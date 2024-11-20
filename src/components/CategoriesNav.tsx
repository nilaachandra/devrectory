"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const ITEMS = [
  { icon: "🌟", label: "All", href: "/" },
  { icon: "🗄️", label: "Database", href: "/tools/database" },
  { icon: "🖥️", label: "Frameworks", href: "/tools/frameworks" },
  { icon: "✍️", label: "Typography", href: "/tools/typography" },
  { icon: "🛠️", label: "Build Tools", href: "/tools/build-tools" },
  { icon: "🎨", label: "Design Systems", href: "/tools/design-systems" },
  { icon: "🌐", label: "Web Development", href: "/tools/web-development" },
];

export default function Shelf() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full mt-4">
      <div className="overflow-x-auto">
        <div className="flex gap-2 flex-nowrap">
          {ITEMS.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                router.push(item.href); // Navigate to the category page
              }}
              className={`rounded-md px-3 py-1 text-sm font-medium shrink-0 ${
                activeIndex === index
                  ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
                  : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              }`}
            >
              <span className="text-xl lg:text-base">{item.icon}</span>{" "}
              <span className="hidden lg:inline-block">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
