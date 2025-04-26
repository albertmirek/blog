import styles from "./styles.module.scss";
import { Logo } from "@/ui/Header/parts/Logo";
import { FC } from "react";
import { Routes } from "@/consts/routes";
import { NavItem } from "@/ui/Header/parts/NavItem";
import { AdminPanel } from "@/ui/Header/parts/AdminPanel";
import { cookies } from "next/headers";

export const Header: FC = async () => {
  const token = (await cookies()).get("accessToken")?.value;

  return (
    <header>
      <nav className={styles.container}>
        <div className={styles.left}>
          <Logo />
          <div className={styles.navigationItemsWrapper}>
            <NavItem href={Routes.DASHBOARD} name={"Recent articles"} />
            <NavItem href={Routes.ABOUT} name={"About"} />
          </div>
        </div>
        <div className={styles.right}>
          {token && token !== "" ? (
            <AdminPanel />
          ) : (
            <NavItem
              href={Routes.LOGIN}
              name={"Log in"}
              className={styles.loginItem}
            />
          )}
        </div>
      </nav>
    </header>
  );
};
