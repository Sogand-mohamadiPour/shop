"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

const PLACEHOLDER = "/pic/header-icon.png";

type SafeImageProps = ImageProps;

export default function SafeImage({
  src,
  alt,
  ...props
}: SafeImageProps) {
  const initialSrc =
    typeof src === "string" && src.trim() !== ""
      ? src
      : PLACEHOLDER;

  const [imageSrc, setImageSrc] = useState(initialSrc);

  return (
    <Image
      {...props}
      src={imageSrc}
      alt={alt}
      onError={() => {
        if (imageSrc !== PLACEHOLDER) {
          setImageSrc(PLACEHOLDER);
        }
      }}
    />
  );
}