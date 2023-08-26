import React from "react";

interface Props {
  title: string;
  location?: string;
  time: string;
  color: string;
  details?: Array<string>;
}

export default function Time({ title, location, time, color, details}: Props) {
  return (
    <>
      <section className="time-container" aria-labelledby={`time-${title}`}>
        <div className="time">
          <div>
            <h3 id={`time-${title}`}>{title}</h3>
            {location ? <p>{location}</p> : null}
          </div>
          <p>{time}</p>
        </div>
        {details?.map((detail, index) => (
          <p key={`time-${title}-detail-${index}`}>{detail}</p>
        ))}
      </section>
      <style jsx>{`
        .time-container {
          padding-bottom: var(--gutter);
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 0;
        }
        .time {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
        }
        .time > p {
          font-family: "ST";
          color: var(--${color});
          margin-top: 4px;
        }
        .time > div > h3 {
          font-family: inherit;
          font-weight: bold;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: -0.7px;
        }
        .time > div > p {
          margin-bottom: var(--gutter);
        }
      `}</style>
    </>
  );
}
