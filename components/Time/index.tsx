import React, { useCallback } from "react";
import { useRouter } from "next/router";

interface Props {
  title: string;
  location?: string;
  time: string;
  color: string;
  details?: Array<string>;
  href?: string;
}

export default function Time({ title, location, time, color, details, href}: Props) {
  const router = useRouter();

  const navigateTo = useCallback(() => {
    if (href) {
      router.push(href);
    }
  }, [href, router]);

  return (
    <>
      <section className="time-container" aria-labelledby={`time-${title}`} onClick={navigateTo}>
        <div className="time">
          <div>
            <h3 id={`time-${title}`}>{title}</h3>
            {location ? <p>{location}</p> : null}
          </div>
          <div className="hour">
            <span>{time}</span>
            {href ? <span>+info</span> : null}
          </div>
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
        .time-container {
          cursor: ${href ? 'pointer;' : 'default;'}
        }
        .time-container:hover {
          transform: ${href ? 'scale(1.02);' : 'none;'}
        }
        .hour {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          color: var(--${color});
          cursor: pointer;
        }
        .hour > span:first-child {
          font-family: "ST";
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
