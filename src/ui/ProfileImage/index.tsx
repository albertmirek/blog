import profilePic from "./profile-picture.jpg";
import Image from "next/image";

import styles from "./styles.module.scss";

export const ProfileImage = () => {
  return (
    <Image
      className={styles.profileImage}
      src={profilePic}
      alt="profile pic"
      width={44}
      height={44}
    />
  );
};
