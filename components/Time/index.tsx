import React from "react";

interface Props {
  title: string;
  location?: string;
  time: string;
  color: string;
}

export default function Time({ title, location, time, color }: Props) {
  return (
    <>
      <section className="time" aria-labelledby={`time-${title}`}>
        <div>
          <h3 id={`time-${title}`}>{title}</h3>
          {location ? <p>{location}</p> : null}
        </div>
        <p>{time}</p>
      </section>
      <style jsx>{`
        .time {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
          align-items: end;
          border-bottom: 1px solid var(--${color});
          padding-bottom: var(--gutter);
        }
        .time > p {
          font-family: "ST";
          color: var(--${color});
        }
        .time > div > h3 {
          font-family: inherit;
          font-weight: bold;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}
