import React from "react";

interface InputFieldProps {
  type?: string;
  value?: string;
  placeholder?: string;
  name?: string;
  validate?: (value: string) => boolean;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  maxLength?: number;
  suffix?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  value = "",
  placeholder = "",
  name = "",
  validate,
  errorMessage = "Invalid input",
  onChange,
  className,
  maxLength,
  suffix,
}) => {
  const [isValid, setIsValid] = React.useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (onChange) {
      onChange(e);
    }
    if (validate) {
      setIsValid(validate(value));
    }
  };

  const handleBlur = () => {
    if (validate) {
      setIsValid(validate(value));
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full border ${
            isValid ? "border-gray-300" : "border-red-500"
          } 
                      p-2 rounded focus:outline-none focus:ring-2 
                       ${isValid ? "" : "bg-red-100"}  ${className}`}
          placeholder={placeholder}
          name={name}
          maxLength={maxLength}
        />
        {!isValid && (
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500">
            !
          </span>
        )}
        {suffix && (
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
            {suffix}
          </span>
        )}
      </div>
      {!isValid && <p className="mt-2 text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
