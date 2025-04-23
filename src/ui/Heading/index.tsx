import React from "react";
import styles from "./styles.module.scss";

interface Props {
  headingLevelStyle: 1 | 3 | 4;
  headingLevel: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  elementToRight?: React.ReactElement;
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
      case 3:
        return styles.heading3;
      case 4:
        return styles.heading4;
    }
  };

  const renderHeading = () => {
    switch (props.headingLevel) {
      case 1:
        return <h1 className={getHeadingLevelClass()}>{props.children}</h1>;
      case 2:
        return <h2 className={getHeadingLevelClass()}>{props.children}</h2>;
      case 3:
        return <h3 className={getHeadingLevelClass()}>{props.children}</h3>;
      case 4:
        return <h4 className={getHeadingLevelClass()}>{props.children}</h4>;
    }
  };

  if (props.elementToRight) {
    return (
      <div className={styles.headingWrapper}>
        {renderHeading()}
        {props.elementToRight}
      </div>
    );
  } else {
    return renderHeading();
  }
};
