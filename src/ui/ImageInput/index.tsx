"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/ui/Button";
import Image from "next/image";
import { ProxyImage } from "@/ui/ProxyImage";
import styles from "./styles.module.scss";

interface ImageInputProps {
  name: string;
  label: string;
  existingImageId?: string;
  setImage: (file: File | undefined) => void;
  disabled: boolean;
}
export const ImageInput = (props: ImageInputProps) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>();
  const [initialImageId, setInitialImageId] = useState(props.existingImageId);
  const ref = useRef<HTMLInputElement | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    props.setImage(file);
    const imageUrl = URL.createObjectURL(file);
    setInitialImageId(undefined);
    setImagePreviewUrl(imageUrl);
  };

  const handleDeleteCurrentImageDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    props.setImage(undefined);
    setImagePreviewUrl(undefined);
    setInitialImageId(undefined);
  };

  const handleUploadImageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <div className={styles.wrapper}>
      <label>Featured image</label>
      <input
        id={props.name}
        name={props.name}
        type={"file"}
        hidden
        accept={"images/*"}
        ref={ref}
        onChange={handleOnChange}
        disabled={props.disabled}
      />
      {initialImageId && initialImageId !== "" ? (
        <ProxyImage
          width={112}
          height={74}
          imageId={initialImageId}
          alt={"Article image preview"}
        />
      ) : (
        imagePreviewUrl && (
          <Image
            src={imagePreviewUrl}
            alt={"Article image preview"}
            width={112}
            height={74}
          />
        )
      )}
      {imagePreviewUrl || initialImageId ? (
        <div className={styles.buttonsWrapper}>
          <Button
            color={"primary"}
            onClick={handleUploadImageClick}
            disabled={props.disabled}
            isOutline={true}
          >
            Upload new
          </Button>
          <div className={styles.divider} />
          <Button
            color={"danger"}
            onClick={handleDeleteCurrentImageDelete}
            disabled={props.disabled}
            isOutline={true}
          >
            Delete
          </Button>
        </div>
      ) : (
        <Button
          color={"secondary"}
          onClick={handleUploadImageClick}
          disabled={props.disabled}
        >
          Upload an image
        </Button>
      )}
    </div>
  );
};
