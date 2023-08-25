import React from "react";
import SocialLinks from "../SocialLinks";

interface Links {
  instagram?: string;
  facebook?: string;
  web?: string;
}

interface Props {
  title: string;
  type: string;
  description: string;
  links?: Links;
}

export default function Supporter({ title, description, links }: Props) {
  return (
    <>
      <section className="supporter-container">
        <h3>{title}</h3>
        {links && <SocialLinks links={links} />}
        <p>{description}</p>
      </section>
      <style jsx>{`
        .supporter-container{
          display: flex;
          flex-direction: column;
          gap: var(--gutter);
        }
      `}</style>
    </>
  );
}
