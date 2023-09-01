import React from 'react';
import Icon from '../Icon';
import SocialLinks from '../SocialLinks';

interface Props {
  number: string;
  title: string;
  desc: string;
  instagram: string;
}

export default function Car({ number, title, desc, instagram }: Props) {
  return (
    <>
      <section className="car-container" aria-labelledby={`car-${title}`}>
        <div className="car-title">
          <h3 id={`car-${title}`}>{number} {title}</h3>
          {/* <SocialLinks links={{
            instagram
          }} /> */}
        </div>
        <p>{desc}</p>
      </section>
      <style jsx>{`
      .car-container {
        display: flex;
        flex-direction: column;
        background-color: var(--white);
        border: 2px solid var(--brown);
        border-radius: var(--border-radius);
        gap: 0;
      }
      .car-container > p {
        padding: var(--gutter);
      }
      .car-title {
        display: flex;
        align-items: center;
        gap: var(--gutter);
        background-color: var(--brown);
        padding: var(--gutter);
        color: var(--yellow);
      }
      `}</style>
    </>
  )
}