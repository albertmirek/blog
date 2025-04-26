import { TrashIcon } from "@/features/articles/components/ArticlesTableListing/parts/Icon/parts/TrashIcon";
import { EditIcon } from "@/features/articles/components/ArticlesTableListing/parts/Icon/parts/EditIcon";
import React from "react";
import { Button } from "@/ui/Button";

interface IconProps {
  icon: "edit" | "delete";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const TableActionIcon = (props: IconProps) => {
  return (
    <Button color={"primary"} isOutline={true} onClick={props.onClick}>
      {props.icon === "delete" ? <TrashIcon /> : <EditIcon />}
    </Button>
  );
};
