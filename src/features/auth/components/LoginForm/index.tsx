"use client";

import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Routes } from "@/consts/routes";
import { Heading } from "@/ui/Heading";
import styles from "./styles.module.scss";
import { FormInput } from "@/ui/FormInput";
import { Button } from "@/ui/Button";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("User name is required"),
  password: Yup.string().required("Password is required"),
});

export const LoginForm = () => {
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const params = useSearchParams();
  const redirected = params.get("missingToken") === "1";

  return (
    <div>
      <div className={styles.wrapper}>
        <Heading headingLevel={1} headingLevelStyle={3}>
          Login
        </Heading>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setError("");
            try {
              const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username: values.username,
                  password: values.password,
                }),
              });

              if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Login failed");
              }

              if (res.ok) {
                router.push(Routes.DASHBOARD);
              } else {
                setError("Login failed");
              }
            } catch (err) {
              setError(String(err));
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormInput
                name={"username"}
                type={"username"}
                placeholder={"JanNovak"}
                label={"Username"}
                disabled={isSubmitting}
                autoComplete={"username"}
              />
              <FormInput
                name={"password"}
                type={"password"}
                placeholder={"********"}
                label={"Password"}
                disabled={isSubmitting}
                autoComplete={"current-password"}
              />
              <div className={styles.buttonWrapper}>
                <Button
                  type={"submit"}
                  disabled={isSubmitting}
                  color={"primary"}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {error && (
        <p className={styles.expiratedSessionOrError}>*&nbsp;{error}</p>
      )}
      {redirected && (
        <p className={styles.expiratedSessionOrError}>
          * it seems you&#39;re session was terminated or you tried to access
          protected page,&nbsp;please login
        </p>
      )}
    </div>
  );
};
