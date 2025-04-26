import { FC } from "react";
import { NavItem } from "@/ui/Header/parts/NavItem";
import { Routes } from "@/consts/routes";
import styles from "./styles.module.scss";
import { ProfileImage } from "@/ui/ProfileImage";
import { DropDownIcon } from "@/ui/Header/parts/AdminPanel/parts/DropDownIcon";

export const AdminPanel: FC = () => {
  return (
    <div className={styles.wrapper}>
      <NavItem href={Routes.MY_ARTICLES} name={"My Articles"} />
      <NavItem
        href={Routes.CREATE_ARTICLE}
        name={"Create Article"}
        className={styles.createArticleItem}
      />
      <div className={styles.dropDownWrapper}>
        <DropDownIcon />
        <ProfileImage width={32} height={32} />
      </div>
    </div>
  );
};
