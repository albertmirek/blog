import profilePic from "./profile-picture.jpg";
import Image from "next/image";

import styles from "./styles.module.scss";
interface Props {
  width: number;
  height: number;
}
export const ProfileImage = (props: Props) => {
  return (
    <Image
      className={styles.profileImage}
      src={profilePic}
      alt="profile pic"
      width={props.width}
      height={props.height}
    />
  );
};
