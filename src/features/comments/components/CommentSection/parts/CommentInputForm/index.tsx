import styles from "./styles.module.scss";
import { FormEvent } from "react";
import { ProfileImage } from "@/ui/ProfileImage";

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
      <ProfileImage />
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
