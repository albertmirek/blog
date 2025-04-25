"use client";
import React, { FC } from "react";
import { classNames } from "@/lib/classNames";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  color: "primary" | "secondary";
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  useSpan?: boolean;
}
export const Button: FC<Props> = (props: Props) => {
  return props.useSpan ? (
    <span
      role={"button"}
      aria-disabled={props.disabled}
      className={classNames(
        styles.button,
        props.color === "primary" ? styles.primary : styles.secondary,
      )}
      onClick={props.onClick}
    >
      {props.children}
    </span>
  ) : (
    <button
      type={props.type || "button"}
      disabled={props.disabled}
      className={classNames(
        styles.button,
        props.color === "primary" ? styles.primary : styles.secondary,
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
