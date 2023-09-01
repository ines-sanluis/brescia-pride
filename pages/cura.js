import React from "react";
import PageLayout from "../components/PageLayout";
import Care from "../components/Care";
import Sustainability from "../components/Sustainability";
import RainbowIcon from "../components/Icons/RainbowIcon";
import CameraIcon from "../components/Icons/CameraIcon";
import HeartIcon from "../components/Icons/HeartIcon";
import InfoIcon from "../components/Icons/InfoIcon";

export default function Accessibilita() {

  return (
    <PageLayout
      title="Cura"
      name="Ti invitiamo a qualche accorgimento"
    >
      <p>
        Scopri i <strong>gruppi di riferimentio e i consigli</strong> per rendere la giornata più bella, più sicura e più accogliente.
      </p>
      <section>
      <h2>Gruppi di riferimento</h2>
      <p>Per qualunque neccessità, eccoti i gruppi di riferimento:</p>
      <ul>
        <li>
          <RainbowIcon
            color="green"
            backgroundColor="purple"
            name="Comitato Brescia Pride"
            desc="Identificabile con badge di riconoscimento. Siamo a tua disposizione per qualunque cosa: informazioni, segnalazioni, richieste o assistenza"
          />
        </li>
        <li>
          <CameraIcon
            color="green"
            backgroundColor="purple"
            name="Fotograf3 ufficiali"
            desc="Identificabili con badge di riconoscimento. Istruitз al rispetto
            del consenso e degli spazi di ogni partecipante. Se non vuoi una fotografia (o la
            desideri, ma non vuoi che venga pubblicata), segnalalo al momento dello scatto"
          />
        </li>
        <li>
          <HeartIcon
            color="green"
            backgroundColor="purple"
            name="Gruppo Cura"
            desc="Identificabile con badge di riconoscimento + fascia colorata al
            braccio. Se hai bisogno di decomprimere o di trovare una delle zone
            dedicate, hai una segnalazione da fare o c’è qualcosa che non va, rivolgiti a loro"
          />
        </li>
        <li>
          <HeartIcon
            color="green"
            backgroundColor="purple"
            name="Gruppo Riduzione Rischi"
            desc="Identificabile con badge di riconoscimento + fascia colorata al
            braccio. Gestiscono l’ordine del Corteo, monitorano i tempi di
            percorrenza del tragitto e sono a tua disposizione per qualsiasi segnalazione"
          />
        </li>
        <li>
          <InfoIcon
            color="green"
            backgroundColor="purple"
            name="STAFF Informazione"
            desc="Identificabile con badge di riconoscimento attaccato
            addosso. Rivolgiti a loro per il percorso, per ricevere indicazioni sulle Zone dedicate o
            per chiedere info riguardo alla giornata"
          />
        </li>
      </ul>
      </section>
      <section className="paragraph" id="accessibilità">
        <h2>Accorgimenti</h2>
        <p>Per rendere la giornata ulteriormente sicura per tutt3, ti invitiamo a qualche accorgimento.</p>
        <Care />
      </section>
      <section className="paragraph" id="green">
        <h2>Ambiente</h2>
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
