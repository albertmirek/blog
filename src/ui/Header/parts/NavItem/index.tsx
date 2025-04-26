"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { classNames } from "@/lib/classNames";
import styles from "./styles.module.scss";

type NavItemProps = {
  href: string;
  name: string;
  className?: string;
};

export const NavItem: FC<NavItemProps> = (props: NavItemProps) => {
  const pathName = usePathname();

  return (
    <Link
      href={props.href}
      className={classNames(
        styles.link,
        props.href === pathName ? styles.active : "",
        props.className ? props.className : "",
      )}
    >
      {props.name}
    </Link>
  );
};
