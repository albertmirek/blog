import React from "react";
import styles from "./styles.module.scss";

export const H1 = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <h1 className={styles.heading1}>{children}</h1>;
};
