"use client"

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}

const categories = [
  {
    id:1,
    name: "Піци",
  },
  {
     id:2,
    name: "Сніданки",
  },
  {
     id:3,
    name: "Закуски",
  },
  {
     id:4,
    name: "Коктейлі",
  },
  {
     id:5,
    name: "Напої",
  },
];



export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

 
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map(({name, id}, index) => (
        <a 
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
          href={`#${name}`}
          
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
