import React from "react";

interface Props {
  color: string;
  size?: string;
}
export default function ArrowDown({ color, size }: Props) {
  return (
    <>
      <svg className="arrowDown"  stroke={`var(--${color})`} fill={`var(--${color})`} strokeWidth="0" version="1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><polygon points="43,17.1 39.9,14 24,29.9 8.1,14 5,17.1 24,36"></polygon></svg>
      <style>{`
        .arrowDown {
          width: ${size || "3rem"};
          height: ${size || "3rem"};
        }
      `}</style>
    </>
  );
}
