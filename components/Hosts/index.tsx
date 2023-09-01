import React from "react";

const hosts = [
  {
    name: "Cruella",
    bio: "La più graffiante ed ammaliante Drag di Brescia, della House of Carramba di WERK! Collective, nostra amata diva che ci incnata sempre con i suoi look e sguardi taglienti!",
    links: {
      instagram: "carramba_che_cruella"
    }
  },
  {
    name: "Chloe Dall'Olio",
    bio: "Regista, performer e modella queer e grassa, fondatrice e host della serie di interviste Instagram \"The Body Talks\" e parte del collettivo femminista di sperimentazione sonora Zaira Oram.",
    links: {
      instagram: "chloedallolio",
    }
  },
  {
    name: "Medusa",
    bio: "Nasce nella ballroom italiana nel 2015, viaggiando per partecipare e contribuire alla cultura in una prospettiva Gender Non Conforming, transfemminista e terrona. Nella Kiki House of Juicy Couture ricopre il ruole di Godparent.",
    links: {
      instagram: "medusa_lapesciua",
    }
  },
  {
    name: "Hadija Francesca Sanneh",
    bio: "Fondatrice del collettivo antirazzista UNO ed organizzatrice di Afobrix, è una creativa Italo-senegalese che lavora nell'interazione tra arte e politica con una prospettiva intersezionale ed ecotransfemminista.",
    links: {
      instagram: "sanneh.hf",
    }
  }
];

export default function Hosts() {
  return (
    <>
      {hosts.map((host, index) => (
        <div className="host" key={`host-${index}`}>
          <h3>
            <span>{host.name}</span>
          </h3>
          <p>{host.bio}</p>
        </div>
      ))}
      <style jsx>{`
        .host {
          display: flex;
          flex-direction: column;
          background-color: var(--white);
          border: 2px solid var(--blue);
          border-radius: var(--border-radius);
        }
        h3 {
          padding: var(--gutter);
          background-color: var(--blue);
          color: var(--pink);
        }
        p {
          padding: var(--gutter);
        }
        .pronouns {
          margin-left: 10px;
          font-family: inherit;
          font-size: 0.8em;
        }
      `}</style>
    </>
  );
}
