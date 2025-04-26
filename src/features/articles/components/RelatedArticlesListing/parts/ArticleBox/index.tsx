import styles from "./styles.module.scss";
import { Heading } from "@/ui/Heading";

interface Props {
  title: string;
  perex: string;
}
export const ArticleBox = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <Heading headingLevelStyle={6} headingLevel={6}>
        {props.title}
      </Heading>
      <p className={styles.perex}>{props.perex}</p>
    </div>
  );
};
