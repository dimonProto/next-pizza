"use client";
import React, { useEffect } from "react";
import { Title } from "./title";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFilterGroup } from "./checkbox-filter-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const SearchParams = useSearchParams();
  const { ingredients, loading, selectedIngredients, onAddId } =
    useFilterIngredients();

    const router = useRouter();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>([]),
  );

  const [price, setPrice] = React.useState<PriceProps>({});

  const partIngredients = ingredients?.map((item) => ({
    text: item.name,
    value: String(item.id),
  }));

  const openPartFilters = 6;

  const updatePrice = (name: keyof PriceProps, value: string) => {
    setPrice({
      ...price,
      [name]: Number(value),
    });
  };

  useEffect(() => {
    const filters = {
      ...price,
      pizzaTypes: [...pizzaTypes],
      sizes: [...sizes],
      ingredients: [...selectedIngredients],
    };
    const query = qs.stringify(filters, { arrayFormat: "comma" })

    router.push(`?${query}`, { scroll: false });
    
  }, [price, pizzaTypes, sizes, selectedIngredients]);

  return (
    <div className={className}>
      <Title text="Фільтрація" size="sm" className="mb-5 font-bold" />

      <CheckboxFilterGroup
        title="Тип тіста"
        name="pizzaTypes"
        className="mt-5"
        onClickCheckbox={togglePizzaTypes}
        selectedIds={pizzaTypes}
        items={[
          { text: "Тонке", value: "1" },
          { text: "Традиційне", value: "2" },
        ]}
      />

      <CheckboxFilterGroup
        title="Розміри"
        name="sizes"
        className="mt-5"
        onClickCheckbox={toggleSizes}
        selectedIds={sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Ціна від і до </p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(price.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", e.target.value)}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={String(price.priceTo)}
            onChange={(e) => updatePrice("priceTo", e.target.value)}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[price.priceFrom || 0, price.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
      </div>

      <CheckboxFilterGroup
        title="Інгредієнти"
        name="ingredients"
        className="mt-5"
        limit={openPartFilters}
        defaultItems={partIngredients.slice(0, openPartFilters)}
        items={partIngredients}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIngredients}
      />
    </div>
  );
};
