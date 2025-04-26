import Image from "next/image";
import profilePic from "../CommentCard/profile-picture.jpg";
import styles from "./styles.module.scss";
import { FormEvent } from "react";

interface Props {
  onSubmit: (content: string) => void;
}

export const CommentInputForm = (props: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const raw = formData.get("content");

    const content = typeof raw === "string" ? raw.trim() : "";

    if (content && content !== "") {
      props.onSubmit(content);
      form.reset();
    }
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <Image src={profilePic} alt="profile pic" width={44} height={44} />
      <input
        className={styles.textInput}
        id="content"
        name="content"
        type="text"
        placeholder="Join the discussion"
      />
    </form>
  );
};
