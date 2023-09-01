import React from "react";
import PageLayout from "../components/PageLayout";

export default function FAQ() {
  return (
    <>
      <PageLayout title="FAQ">
        <section aria-label="Risolve i tuoi dubbi">
          <section>
            <p><strong>Quando è il Corteo?</strong></p>
            <p>Il Corteo è il 2 settembre, alle 15h in Piazza Vittoria e attraversa il centro della città.</p>
            <p>Il motto di quest’anno è “La Cultura si fa Insieme”. Non solo in occasione di Bergamo Brescia Capitale della Cultura 2023, ma anche
perchè come Comunità siamo parte attiva della vita culturale della nostra città, e
come tale vogliamo essere riconosciutə.</p>
          </section>
          <section>
            <p><strong>È un evento accessibile?</strong></p>
            <p>
              Sì, ci impegniamo a rendere l'evento accessibile! Per ulteriori dettagli, consulta la sezione dedicata.
            </p>
          </section>
          <section>
            <p><strong>Quali sono le linee guida di sicurezza?</strong></p>
            <p>Segui le indicazioni del personale e rispetta chi partecipa. Cerca di mantenere un comportamento pacifico e di evitare situazioni rischiose.</p>
            <a href="https://www.bresciapride.it/cura/">Leggi i nostri consigli</a>
          </section>
          <section>
            <p><strong>Ho bisogno di assistenza durante l'evento. Cosa devo fare?</strong></p>
            <p>Se hai bisogno di assistenza medica o hai altre necessità durante l'evento, rivolgiti al personale. Siamo qui per aiutarti!</p>
            <a href="https://www.bresciapride.it/cura/">Scopre i gruppi di riferimento</a>
          </section>
          <section>
            <p><strong>Posso portare amici o familiari con me?</strong></p>
            <p>Assolutamente! Il corteo è aperto a tutt3 coloro che desiderano partecipare e mostrare il loro sostegno.</p>
            <p>Per famiglie e passeggini, abbiamo una zona dedicata in piazza per distaccarsi dalla massa: la zona gialla.</p>
          </section>
          <section>
            <p><strong>Sono ammesse fotocamere e videocamere?</strong></p>
            <p>Le fotocamere e le videocamere sono ben accette per catturare i momenti speciali. </p>
            <p>Tuttavia, prima di fotografare qualcunx, soprattutto se si tratta di primi piani, o di registrare video che includono altre persone, chiedi sempre il loro consenso!</p>
            <a href="https://www.bresciapride.it/cura/">Impara a riconoscere i fotograf3 ufficiali</a>
          </section>
          <section>
            <p><strong>Chi organizza il Pride?</strong></p>
            <p>
            Partecipano all’organizzazione dell’iniziativa diverse persone singole, appartenenti alla
comunità o alleatx, che spontaneamente hanno preso parte al progetto, uniti da
obiettivi comuni.
            </p>
          </section>
          <section>
            <p><strong>Perché a settembre?</strong></p>
            <p>Le principali motivazioni sono 3:</p>
            <ul>
              <li>Il numero di eventi già calendarizati in occasione di Bergamo Brescia Capitale della Cultura 2023.</li>
              <li>Per permetterci di organizzare quanti più eventi possibile in preparazione al Corteo e non solo. Brescia Pride non si ferma a settembre ma abbiamo intenzione di continuare a promuovere iniziative ed eventi sul territorio per tutto l'anno!</li>
              <li>Per permettere al maggior numero di persone possibili di partecipare nonostante il caldo.</li>
            </ul>
          </section>
        </section>
      </PageLayout>
    </>
  );
}
