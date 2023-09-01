import React from "react";
import Time from "../Time";

export default function Timeline() {
  const history = [
    {
      year: 2016,
      motto: "Fondazione",
      description:
        "Il Comitato nasce dal desiderio di rendere la nostra città un posto rispettoso delle identità e dei bisogni di tuttз.",
      tag: "bresciapride",
    },
    {
      year: 2017,
      motto: "Unire la città",
      description:
        "Grazie alla prima edizione Brescia Pride, si creano iniziative, collaborazioni, reti di collegamenti che arricchiscono il territorio e il progetto: unire la città non è solo il motto ma il movimento generato dall'azione collettiva.",
      tag: "unirelacittà",
    },
    {
      year: 2019,
      motto: "Fuori la voce",
      description:
        "Arriva l'ingresso di singolз cittadinз all'interno del Comitato: è l'unione di tuttз, l'invito a tirare fuori la voce per creare spazi di libera espressione in sicurezza, rivendicati con orgoglio.",
      tag: "fuorilavoce",
    },
    {
      year: 2022,
      motto: "Le cose cambiano",
      description:
        "È l'anno nel quale lo spirito di Brescia Pride abbraccia più lotte e identità, facendole convergere in un'ottica intersezionale, ambientalista e antispecista, continuando la sua estensione in una rete fitta di collaborazioni ed eventi.",
      tag: "lecosecambiano",
    },
    {
      year: 2023,
      motto: "La cultura si fa insieme",
      description:
        "La nostra città celebra il sapere, e per Brescia Pride la cultura si fa insieme. Il Comitato si rinnova, portando con sé valori e lotte che muovono un'onda di iniziative volte ad animare il territorio, in un anno che vede la città protagonista, insieme a Bergamo, del panorama culturale italiano.",
      tag: "laculturasifainsieme",
    },
  ];

  return (
    <>
      <div className="timeline">
        {history.map((year, index) => (
          <div className="timeline-component" key={index}>
            <Time time={year.year.toString()} title={year.motto} color="red"/>
            <p>{year.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .timeline {
          display: flex;
          flex-direction: column;
          gap: var(--gutter2x);
        }
        .timeline-component {
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: var(--gutter);
          width: 100%;
        }
        .timeline-component > h2 {
          display: flex;
          flex-direction: column;
          gap: var(--gutter);
        }
        .timeline-component > h2 > span:first-child {
          color: var(--red);
        }
      `}</style>
    </>
  );
}
