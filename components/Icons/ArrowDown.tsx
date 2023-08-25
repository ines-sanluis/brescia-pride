import React from "react";

interface Props {
  color: string;
}
export default function ArrowDown({ color }: Props) {
  return (
    <>
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 8"
        className="arrowDown"
      >
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
        />
      </svg>
      <style>{`
        .arrowDown {
          width: 3rem;
          height: 3rem;
          color: var(--${color});
        }
      `}</style>
    </>
  );
}
