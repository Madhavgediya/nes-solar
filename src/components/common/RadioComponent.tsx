import { useState } from "react";

interface RadioComponentProps {
  options: string[];
  handleChange: (value: string) => void;
  selected: string;
}

const RadioComponent: React.FC<RadioComponentProps> = ({
  options,
  handleChange,
  selected,
}) => {
  const handleSelection = (value: string) => {
    handleChange(value);
  };

  return (
    <div className="space-y-4 items-center flex-col flex justify-center btn-group-toggle btn-group-vertical bv-no-focus-ring">
      {options.map((option) => (
        <div
          key={option}
          className={`flex items-center p-4 border-2 rounded-2xl max-w-[540px] !w-4/5 cursor-pointer ${
            selected === option ? "border-[#002f63]" : "border-gray-300"
          }`}
          onClick={() => handleSelection(option)}
        >
          <input
            type="radio"
            name="type"
            value={option}
            checked={selected === option}
            onChange={() => handleSelection(option)}
            className="h-4 w-4 custom-radio"
          />
          <label className="ml-3 text-xl leading-5 !mb-0">{option}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioComponent;
