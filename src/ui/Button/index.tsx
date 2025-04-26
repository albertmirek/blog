"use client";
import React, { FC } from "react";
import { classNames } from "@/lib/classNames";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  color: "primary" | "secondary" | "danger";
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  useSpan?: boolean;
  isOutline?: boolean;
}
export const Button: FC<Props> = (props: Props) => {
  const getButtonColor = () => {
    switch (props.color) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
      case "danger":
        return styles.danger;
    }
  };

  return props.useSpan ? (
    <span
      aria-disabled={props.disabled}
      className={classNames(
        styles.button,
        getButtonColor(),
        props.isOutline ? styles.outlineButton : "",
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
        getButtonColor(),
        props.isOutline ? styles.outlineButton : "",
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
