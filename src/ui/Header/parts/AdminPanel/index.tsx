import { FC } from "react";
import { NavItem } from "@/ui/Header/parts/NavItem";
import { Routes } from "@/consts/routes";
import styles from "./styles.module.scss";

export const AdminPanel: FC = () => {
  return (
    <div className={styles.wrapper}>
      <NavItem href={Routes.MY_ARTICLES} name={"My Articles"} />
      <NavItem
        href={Routes.CREATE_ARTICLE}
        name={"Create Article"}
        className={styles.createArticleItem}
      />
    </div>
  );
};
