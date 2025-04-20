import React from "react";
import styles from "./styles.module.scss";

interface Props {
  headingLevelStyle: 1 | 4;
  headingLevel: 1 | 2 | 3;
  children: React.ReactNode;
}

export const Heading = (props: Props) => {
  const getHeadingLevelClass = () => {
    switch (props.headingLevelStyle) {
      case 1:
        return styles.heading1;
      /*case 2:
        return styles.heading2;
      case 3:
        return styles.heading3;*/
      case 4:
        return styles.heading4;
    }
  };

  switch (props.headingLevel) {
    case 1:
      return <h1 className={getHeadingLevelClass()}>{props.children}</h1>;
    case 2:
      return <h2 className={getHeadingLevelClass()}>{props.children}</h2>;
    case 3:
      return <h3 className={getHeadingLevelClass()}>{props.children}</h3>;
  }
};
