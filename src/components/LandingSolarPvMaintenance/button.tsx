import React, { useState } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

const SolarPVButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  isActive = false,
}) => {
  const handleClick = () => onClick();

  const getButtonClasses = () => {
    const baseClasses = [styles.button];

    // Apply active states
    if (isActive) {
      baseClasses.push(styles.active);
    }

    return baseClasses.join(" ");
  };

  return (
    <button className={getButtonClasses()} onClick={handleClick}>
      {label}
    </button>
  );
};

export default SolarPVButton;
