import React from "react";
import PageLayout from "../components/PageLayout";
import Accessibility from "../components/Accessibility";

export default function Accessibilita() {

  return (
    <PageLayout
      title="Accessibilità"
      name="Scopri la accessibilità della sfilata"
    >
      <p>Non mancheranno accorgimenti necessari per rendere questo giorno davvero accessibile a chiunque:</p>
      <section className="paragraph" id="accessibilità">
        <Accessibility />
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
      `}</style>
    </PageLayout>
  );
}
