import React from "react";
import PageLayout from "../components/PageLayout";
import Care from "../components/Care";
import Sustainability from "../components/Sustainability";

export default function Accessibilita() {

  return (
    <PageLayout
      title="Cura"
      name="Ti invitiamo a qualche accorgimento"
    >
      <p>Per rendere la giornata ulteriormente sicura per tutt3, ti invitiamo a qualche accorgimento.</p>
      <h2>Accorgimenti</h2>
      <section className="paragraph" id="accessibilità">
        <Care />
      </section>
      <h2>Ambiente</h2>
      <section className="paragraph" id="green">
        <Sustainability />
      </section>
      <style jsx>{`
        .paragraph,
        .paragraph > section,
        .paragraph > section > section {
          display: flex;
          flex-direction: column;
          gap: var(--gutter);
        }
        .paragraph > section {
          margin-bottom: var(--gutter2x);
        }
        h2 {
          color: var(--green);
        }
      `}</style>
    </PageLayout>
  );
}
