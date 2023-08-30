import React from "react";

const speeches = [
  {
    name: "Student3 scuole di Brescia",
    speech:
      "Una proiezione del futuro con le rivendicazioni di UDS Brescia e dei collettivi degli istituti De Andrè, Arnaldo, Gambara e Gigli.",
  },
  {
    name: "Famiglie Arcobaleno + Agedo",
    speech:
      "Per ricordare che non esiste un solo tipo di famiglia, parlerà dell’importanza della lotta per il riconoscimento giuridico e sociale di ogni tipo di genitorialità e s/famiglia.",
  },
  {
    name: "Annalisa Sirignano",
    pronouns: ["she", "her"],
    speech:
      "Speaker e giornalista orgogliosamente terrona, è parte di Ti leggiamo una femminista e \"Ccà nisciun' è fessa\", rete territoriale che mappa l'accesso all'interruzione volontaria di gravidanza e sensibilizza sulla salute sessuale.",
  },
  {
    name: "Non Una Di Meno Brescia",
    speech:
      "Movimento politico transfemminista, antirazzista, antifascista e anticapitalista. Porterà la sua voce collettiva e orizzontale sulla creazione di percorsi intersezionali di lotta e azioni che intervengano sulle molteplici forme di violenza strutturale ed eterocispatriarcale.",
  },
  {
    name: "Kay Kamakhya",
    pronouns: ["she", "her"],
    speech:
      "Attivista indiana per i diritti umani e la tutela dell'ambiente. Kay, che si identifica come trans feminine, rende il suo lavoro nella moda un mezzo per battersi per la giustizia sociale.  Intervento in inglese con traduzione italiana.",
  },
];

export default function Guests() {
  return (
    <>
      {speeches.map((speech, index) => (
        <div className="speech" key={`speech-${index}`}>
          <h3>
            <span>{speech.name}</span>
            {speech.pronouns && <span className="pronouns">{speech.pronouns.join("/")}</span>}
          </h3>
          <p>{speech.speech}</p>
        </div>
      ))}
      <style jsx>{`
        .speech {
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
