import React from "react";
import PageLayout from "../components/PageLayout";
import Stage from "../components/Stage";
import Guests from "../components/Guests";
import Schedule from "../components/Schedule";
import Hosts from "../components/Hosts";
import Heart from "../components/Icons/HeartIcon";
import LiveIcon from "../components/Icons/LiveIcon";
import TreeIcon from "../components/Icons/TreeIcon";
import Info from "../components/Icons/InfoIcon";

export default function Interventi() {

  return (
    <PageLayout
      title="Interventi"
      name="Scopri gli interventi"
    >
      <p>Scopri il <strong>palco e gli orari dei interventi</strong> che abbiamo in programma.</p>
      <section className="paragraph" id="piazza">
        <h2>La Piazza</h2>
        <p>Piazza Vittoria sarà il luogo di incontro e di reinvinicazione, dove potrai ascoltare gli interventi dell3 ospiti.</p>
        <Stage />
      </section>
      <section className="paragraph" id="banchetti">
        <h2>I Banchetti</h2>
        <p>In piazza troverai anche un EcoPoint e banchetti di diverse realtà della zona.</p>
        <ul>
          <li>
            <Heart
              color="blue"
              backgroundColor="pink"
              name="Banchetto Comitato Brescia Pride"
              desc="Per informazioni e acquisto di gadget ufficiali per chi vuole e può sostenerci economicamente"
            />
          </li>
          <li>
            <LiveIcon
              color="blue"
              backgroundColor="pink"
              name="Banchetto diretta ÈliveBrescia TV"
              desc="Gli interventi saranno resi accessibili online attraverso la diretta che rimarrà reperibile successivamente"
            />
          </li>
          <li>
            <TreeIcon
              color="blue"
              backgroundColor="pink"
              name="Ecopoint gestito da 5R Zero Sprechi"
              desc="Trova porta mozziconi e un punto di raccolta di telefoni e tablet non più utilizzabili"
            />
          </li>
          <li>
            <Info
              color="blue"
              backgroundColor="pink"
              name="Banchetto informativo"
              desc="Arcigay + Non una di Meno + Centro Aristofane + CFS"
            />
          </li>
          <li>
            <Info
              color="blue"
              backgroundColor="pink"
              name="Banchetto informativo"
              desc="Famiglie Arcobaleno + Agedo + Pianeta Viola"
            />
          </li>
          <li>
            <Info
              color="blue"
              backgroundColor="pink"
              name="Banchetto informativo"
              desc="UNO Collective + UDS"
            />
          </li>
        </ul>
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
