import { FC, HTMLInputAutoCompleteAttribute } from "react";
import styles from "@/features/auth/components/LoginForm/styles.module.scss";
import { ErrorMessage, Field } from "formik";
import { InputType } from "node:zlib";

interface Props {
  name: string;
  placeholder: string;
  type: InputType;
  label: string;
  disabled: boolean;
  autocomplete?: HTMLInputAutoCompleteAttribute;
}
export const FormInput: FC<Props> = (props: Props) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={props.name} className={styles.labelForInput}>
        {props.label}
      </label>
      <Field
        id={props.name}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className={styles.inputField}
        disabled={props.disabled}
        autoComplete={props.autocomplete}
      />
      <ErrorMessage name={props.name}>
        {(msg) => <span className={styles.errorMessage}>{msg}</span>}
      </ErrorMessage>
    </div>
  );
};
