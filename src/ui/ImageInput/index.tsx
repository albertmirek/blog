"use client";

import { useRef, useState } from "react";
import { Button } from "@/ui/Button";
import Image from "next/image";

interface ImageInputProps {
  name: string;
  label: string;
  setFieldValue: (field: string, value: string) => void;
  setImage: (file: File) => void;
}
export const ImageInput = (props: ImageInputProps) => {
  const [preview, setPreview] = useState<string>("");
  const ref = useRef<HTMLInputElement | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    props.setImage(file);
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <>
      <label>Feature image</label>
      <input
        id={props.name}
        name={props.name}
        type={"file"}
        hidden
        accept={"images/*"}
        ref={ref}
        onChange={handleOnChange}
      />
      {preview && (
        <Image src={preview} alt={"Preview"} width={112} height={74} />
      )}
      <Button
        color={"secondary"}
        onClick={(e) => {
          e.preventDefault();
          if (ref.current) {
            ref.current.click();
          }
        }}
      >
        Upload an image
      </Button>
    </>
  );
};
