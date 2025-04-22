import { FC } from "react";
import { classNames } from "@/lib/classNames";
import styles from "./styles.module.scss";

interface Props {
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
  color: "primary" | "secondary";
}
export const Button: FC<Props> = (props: Props) => {
  return (
    <button
      type="submit"
      disabled={props.disabled}
      className={classNames(
        styles.button,
        props.color === "primary" ? styles.primary : styles.secondary,
      )}
    >
      {props.children}
    </button>
  );
};
