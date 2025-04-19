import { FC } from "react";
import Link from "next/link";
import { Routes } from "@/consts/routes";
import { LogoIcon } from "@/components/Header/parts/Logo/LogoIcon";

export const Logo: FC = () => {
  return (
    <Link href={Routes.DASHBOARD}>
      <LogoIcon />
    </Link>
  );
};
