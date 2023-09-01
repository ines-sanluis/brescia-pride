import React from "react";

interface Props {
  color: string;
  backgroundColor: string;
  children?: React.ReactNode;
  name?: string;
  desc?: string;
}

export default function Icon({
  color,
  backgroundColor,
  children,
  name,
  desc,
}: Props) {
  return (
    <>
      <div className="icon-container">
        <div 
          className="icon-title"
        >
          {children && <span 
            className="icon"
            aria-label={"hidden"}
            role="img"
          >{children}</span>}
          {name && (
            <p className="name">
              <span>{name}</span>
              {desc ? <span className="icon-desc">{desc}.</span> : null}
            </p>
          )}
        </div>
      </div>
      <style jsx>{`
        .icon-container {
          display: flex;
          flex-direction: column;
          margin-bottom: var(--gutter);
        }
        .icon-title {
          display: flex;
          align-items: ${desc ? "flex-start" : "center"};
          gap: var(--gutter);
        }
        .icon {
          min-height: 30px;
          min-width: 30px;
          color: var(--${color});
          background-color: var(--${backgroundColor});
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .name {
          display: flex;
          flex-direction: column;
        }
        .name > span:first-child {
          font-weight: 600;
          margin-bottom: var(--half-gutter);
        }
      `}</style>
    </>
  );
}
