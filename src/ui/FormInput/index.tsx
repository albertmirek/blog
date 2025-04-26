import { FC, InputHTMLAttributes } from "react";
import { useField } from "formik";
import styles from "./styles.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const FormInput: FC<Props> = ({ name, label, ...props }) => {
  const [field, meta] = useField({ name, ...props });

  const inputClassName = [
    styles.inputField,
    meta.touched && meta.error ? styles.errorInput : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.labelForInput}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input id={name} {...field} {...props} className={inputClassName} />
        {meta.touched && meta.error && (
          <span className={styles.errorMessage}>{meta.error}</span>
        )}
      </div>
    </div>
  );
};
