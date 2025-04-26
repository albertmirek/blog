import { FC, Suspense } from "react";
import { Header } from "../../../../ui/Header";
import { LoginForm } from "@/features/auth/components/LoginForm";
import styles from "./styles.module.scss";
import { Loading } from "@/ui/Loading";

export const LoginPage: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.loginWrapper}>
        <Suspense fallback={<Loading />}>
          <LoginForm />
        </Suspense>
      </div>
    </>
  );
};
