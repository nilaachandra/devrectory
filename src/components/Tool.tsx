"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface ToolProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  externalUrl: string;
}

const Tool: React.FC<ToolProps> = ({
  id,
  name,
  description,
  imageUrl,
  externalUrl,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/tool/${id}`);
  };

  const handleExternalLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <Card
      onClick={handleClick}
      className="flex w-full p-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-all duration-200 cursor-pointer group"
    >
      <CardContent className="flex p-0 w-full">
        <img
          src={imageUrl}
          height={72}
          width={72}
          alt={`${name} logo`}
          className="rounded-lg"
        />
        <div className="ml-3 flex-1">
          <CardHeader className="p-0">
            <div className="mb-1 flex justify-between items-center">
              <CardTitle className="text-base font-bold">{name}</CardTitle>
              <Link
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleExternalLinkClick}
                className="text-blue-500"
              >
                <ArrowUpRight className="h-[1.2rem] w-[1.2rem] transition-transform duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-12" />
              </Link>
            </div>
          </CardHeader>
          <CardDescription className="text-xs line-clamp-2 text-zinc-600 dark:text-zinc-400">
            {description}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

export default Tool;
