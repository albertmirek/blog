import { FC } from "react";
import { Header } from "@/components/Header";
import { LoginForm } from "@/features/auth/components/LoginForm";
import styles from "./styles.module.scss";

export const LoginPage: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.loginWrapper}>
        <LoginForm />
      </div>
    </>
  );
};
