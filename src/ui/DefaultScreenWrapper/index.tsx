import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}
export const DefaultScreenWrapper = (props: Props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};
