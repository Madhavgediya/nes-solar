import React from "react";
import "./button.module.css";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
interface TypographyProps {
  text: string;
  icon?: any;
  path?: string;
  style?: any;
}

const Typography: React.FC<TypographyProps> = ({ text, icon, path, style }) => {
  return (
    <div className="mb-3 flex items-center" style={style}>
      <span className="mr-3 text-[#203f69]">
        {icon ? (
          icon
        ) : path ? (
          <Image
            src={path}
            height={26}
            width={26}
            alt="icon"
            style={{ height: "40px", width: "45px" }}
          />
        ) : (
          <CheckIcon sx={{ fontSize: "2rem" }} />
        )}
      </span>
      <span className="!text-base !2xl:text-xl !font-semibold !tracking-normal">
        {text}
      </span>
    </div>
  );
};

export default Typography;
