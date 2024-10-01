// components/Preloader.tsx
import React from "react";
import Image from "next/image";

const Preloader: React.FC = () => {
  return (
    <div className={"loaderContainer"}>
      <div className={"logo"}>
        <Image
          // src="/assets/nes-solar.webp"
          src="/assets/NES_Solar_white_logo.svg"
          className="w-36"
          alt="solar logo"
          width={100}
          height={100}
        />
      </div>
      <div className="loader-line"></div>
    </div>
  );
};

export default Preloader;
