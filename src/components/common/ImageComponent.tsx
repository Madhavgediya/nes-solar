// ImageComponent.tsx

import React from 'react';
import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  title: string;
}

const ImageComponent: React.FC<ImageProps> = ({ src, alt, title }) => {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      width={100} height={100}
    />
  );
};

export default ImageComponent;
