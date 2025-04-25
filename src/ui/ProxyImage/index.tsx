import { CSSProperties, FC } from "react";
import Image from "next/image";

interface Props {
  width: number;
  height: number;
  imageId: string;
  alt: string;
  style?: CSSProperties;
}

export const ProxyImage: FC<Props> = (props: Props) => {
  return (
    <Image
      src={`/api/images/${props.imageId}`}
      alt={props.alt}
      width={props.width}
      height={props.height}
      style={props.style}
    />
  );
};
