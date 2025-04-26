"use client";

import { useState } from "react";
import { OrderIconSvg } from "@/features/articles/components/ArticlesTableListing/parts/OrderIcon/parts";
import { PropertyType } from "@/features/articles/lib/sortArticlesByProperty";

interface Props {
  type: PropertyType;
  onClick: (type: PropertyType, order: "asc" | "desc") => void;
}
export const OrderIcon = (props: Props) => {
  const [isAsc, setIsAsc] = useState<boolean>(false);
  return (
    <span
      role="button"
      onClick={() => {
        setIsAsc(!isAsc);
        props.onClick(props.type, isAsc ? "asc" : "desc");
      }}
    >
      <OrderIconSvg />
    </span>
  );
};
