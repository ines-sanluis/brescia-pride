import React from "react";
import PageLayout from "../components/PageLayout";
import Stage from "../components/Stage";
import Guests from "../components/Guests";
import Schedule from "../components/Schedule";
import Hosts from "../components/Hosts";

export default function Interventi() {

  return (
    <PageLayout
      title="Interventi"
      name="Scopri gli interventi"
    >
      <p>Scopri il <strong>palco e gli orari dei interventi</strong> che abbiamo in programma.</p>
      <section className="paragraph" id="piazza">
        <h2>Il Palco</h2>
        <p>Piazza Vittoria sarà il luogo di incontro e di reinvinicazione, dove potrai ascoltare gli interventi dell3 ospiti.</p>
        <Stage />
      </section>
      <section className="paragraph" id="orari">
        <h2>Orari</h2>
        <Schedule onlySpeeches color="blue"/>
      </section>
      <section className="paragraph" id="guests">
        <h2>Ospiti</h2>
        <p style={{
          marginBottom: "var(--gutter)"
        }}>
          Saranno con noi per raccontare le loro esperienze e le loro battaglie.
        </p>
        <Guests />
      </section>
      <section className="paragraph" id="presentator">
        <h2>Presentator3</h2>
        <p style={{
          marginBottom: "var(--gutter)"
        }}>
          Per raccontare una storia serve sempre qualcunə che la introduca nel modo giusto.
        </p>
        <Hosts />
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
          color: var(--blue);
        }
      `}</style>
    </PageLayout>
  );
}
