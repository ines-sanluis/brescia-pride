import React from "react";

interface Props {
  title: string;
  desc: Array<string>;
  children: React.ReactNode;
  color?: string;
}

export default function Section({ title, desc, children, color }: Props) {
  return (
    <>
      <section aria-labelledby={`section-title-${title}`}>
        <h2 id={`section-title-${title}`}>{title}</h2>
        {desc?.map((paragraph, index) => (
          <p key={`section-p-${title}-${index}`}>
          {paragraph}
          </p>
        ))}
        {children}
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          gap: var(--gutter2x);
        }
        section > h2 {
          color: var(--${color || "brown"});
        }
      `}</style>
    </>
  );
}
