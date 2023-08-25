import React from 'react';

interface Props {
  text: string;
  onClick: () => void;
  color: string;
  hoverColor?: string;
  width?: string;
}

function Button({
  text,
  onClick,
  color,
  hoverColor,
  width
}: Props) {
  return (
    <>
      <button
        onClick={onClick}
        style={{ width: "fit-content" }}
        className="custom-button"
      >
        {text}
      </button>
      <style jsx>{`
        .custom-button {
          background-color: transparent;
          font-size: 1rem;
          font-weight: bold;
          padding: var(--gutter) var(--gutter2x);
          border-radius: var(--gutter2x);
          border: 1.5px solid var(--${color});
          color: var(--${color});
          cursor: pointer;
          margin-bottom: var(--gutter2x);
          outline: none; // Remove the default focus outline
        }
        .custom-button:hover, .custom-button:focus {
          background-color: var(--${hoverColor || color});
          transform: scale(1.1);
          transition: transform 0.2s ease-in-out;
        }
      `}</style>
    </>
  );
}

export default Button;
