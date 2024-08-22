import React, { useState, useRef, useEffect } from "react";
import styles from "./PopupBtn.module.css";
import Image from "next/image";

interface PopupPopoverProps {
  title: string;
  content?: string;
  path?: any;
  image?: any;
  src?: any;
  visible?: any;
}

const PopupPopover: React.FC<PopupPopoverProps> = ({
  title,
  content,
  path,
  image,
  src,
  visible,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={popoverRef}>
      <button
        className="bg-white text-blue font-bold w-7 h-7 rounded-3xl px-1.5 py-0 text-[12px]"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          animation: `pulseBigSmall 3s infinite`,
        }}
      >
        {title}
      </button>
      {visible && !image && (
        <div
          className={`${styles.popoverContent} absolute flex flex-row bg-white border border-gray-300 px-3 py-2 rounded shadow-md w-48 sm:w-40 md:w-36 lg:w-48`}
        >
          <div className="flex items-center mr-2">
            <Image
              src={path}
              height={10}
              width={22}
              alt="icon"
              style={{ marginRight: 2 }}
            />
          </div>
          <p className="text-xs sm:text-sm md:text-base">{content}</p>
        </div>
      )}
      {visible && image && (
        <div
          className={`${styles.popoverContent} absolute flex flex-row -left-20 py-2 rounded shadow-md w-48 sm:w-40 md:w-36 lg:w-48`}
        >
          <div className="flex items-center mr-2">
            <Image
              src={src}
              height={10}
              width={192}
              alt="icon"
              style={{ marginRight: 2 }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupPopover;
