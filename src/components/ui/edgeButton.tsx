import clsx from "clsx";
import React, { ReactNode } from "react";
interface EdgeButtonProps {
  text?: string;
  classText?: string;
  color: "gradient" | "white";
  children?: ReactNode;
  widthSvg?: string;
  id?: number;
  onClick?: any;
  className?: string;
}
function EdgeButton(props: EdgeButtonProps) {
  const { text, classText, color, children, widthSvg, id, onClick, className } =
    props;
  return (
    <div
      className={clsx(["relative hover w-fit", className && className])}
      onClick={onClick ? onClick : () => {}}
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center text-base font-semibold  ${classText}`}
      >
        {text && text}
        {children && children}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={widthSvg ? widthSvg : "164px"}
        height="44"
        viewBox={`0 0 164 44`}
        fill="none"
      >
        <path
          d="M0 9L9 0H164V35L155 44H0V9Z"
          fill={`url(#paint0_linear_55733_1733_${id}_)`}
        />
        <defs>
          <linearGradient
            id={`paint0_linear_55733_1733_${id}_`}
            x1="0"
            y1="0"
            x2="22.0244"
            y2="82.091"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color === "gradient" ? "#FDC60B" : "#fff"} />
            <stop
              offset="1"
              stopColor={color === "gradient" ? "#ED6B3B" : "#fff"}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default EdgeButton;
