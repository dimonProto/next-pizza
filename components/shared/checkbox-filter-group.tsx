"use client";

import React, { useState } from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFilterGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Пошук...",
  onChange,
  defaultValue,
  className,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [serchValue, setSerchValue] = useState("");

  const list = showAll ? items.filter((item) => item.text.toLocaleLowerCase().includes(serchValue.toLocaleLowerCase())) : defaultItems?.slice(0, limit);

 const onChangeSerchInput = (value: string) => {
    setSerchValue(value);
  }

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
            value={serchValue}
            onChange={(e) => onChangeSerchInput(e.target.value)}
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => {
              console.log(ids);
            }}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className=" text-primary mt-3"
          >
            {showAll ? "Сховати" : "+ Показати всі"}
          </button>
        </div>
      )}
    </div>
  );
};
