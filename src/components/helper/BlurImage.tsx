'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

export default function BlurImage({ alt, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={alt}
      className={`${props.className || ''} ${isLoading ? 'imageLoading' : ''}`}
      onLoad={() => setIsLoading(false)}
    />
  );
}
