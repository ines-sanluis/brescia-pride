import React from "react";

interface Props {
  color: string;
  size?: string;
}
export default function ArrowDown({ color, size }: Props) {
  return (
    <>
      <svg className="arrowDown" stroke={`var(--${color})`} fill={`var(--${color})`} strokeWidth="0" version="1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <polygon points="5,30.9 8.1,34 24,18.1 39.9,34 43,30.9 24,12"></polygon>
      </svg>
      <style>{`
        .arrowDown {
          width: ${size || "3rem"};
          height: ${size || "3rem"};
        }
      `}</style>
    </>
  );
}
