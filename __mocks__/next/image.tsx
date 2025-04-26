import React from "react";

type NextImageProps = {
  src: string | { src: string };
  alt?: string;
  // eslint-disable-next-line
  [key: string]: any;
};

export default function NextImage({ src, alt, ...props }: NextImageProps) {
  const finalSrc = typeof src === "string" ? src : src.src;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={finalSrc} alt={alt} {...props} />;
}
