import React from 'react';
import Icon from '../Icon';

interface Props {
  number: string;
  title: string;
  desc: string;
}

export default function Car({ number, title, desc }: Props) {
  return (
    <>
      <section className="car-container" aria-labelledby={`car-${title}`}>
        <div className="car-title">
          <Icon
            color="brown"
            backgroundColor="yellow"
          >
            <span className="car-icon-text">
              {number}
            </span>
          </Icon>
          <h3 id={`car-${title}`}>{title}</h3>
        </div>
        <p>{desc}</p>
      </section>
      <style jsx>{`
      .car-container {
        display: flex;
        flex-direction: column;
        gap: var(--gutter);
      }
      .car-title {
        display: flex;
        align-items: center;
        gap: var(--gutter);
      }
      .car-icon-text {
        font-weight: bold;
        font-family: "ST";
      }
      `}</style>
    </>
  )
}