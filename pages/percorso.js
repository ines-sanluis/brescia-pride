import React from "react";
import PageLayout from "../components/PageLayout";
import Path from "../components/Path";
import Cars from "../components/Cars";
import Services from "../components/Services";
import MuteIcon from "../components/Icons/MuteIcon";
import BatteryIcon from "../components/Icons/BatteryIcon";
import StimToyIcon from "../components/Icons/StimToyIcon";
import PhoneIcon from "../components/Icons/PhoneIcon";
import WaterIcon from "../components/Icons/WaterIcon";
import ChairIcon from "../components/Icons/ChairIcon";
import Image from "next/image";

export default function Percorso() {

  return (
    <PageLayout
      title="Corteo"
      name="Scopri il percorso della sfilata"
    >
      <p>Scopre il <strong>percorso, i servizi, il punto di riposo e i carri</strong> che ci accompagneranno durante la sfilata dei nostri corpi e delle nostre reivindicazioni lungo le vie della città.</p>
      <section className="paragraph" id="percorso">
        <h2>Il Percorso</h2>
        <p>
          Sempre più centrale ed intrecciato alle vie principali della nostra città che sono teatro di cultura e comunità.
        </p>
        <p>
          Con partenza alle 16h da Piazza Vittoria verso Via Spalto San Marco.
        </p>
        <Path />
        <p>
        Attraversa IV Novembre, Gramsci, Vittorio Emanuele II, Spalto San Marco,
Crispi, Tosio, Cereto, Cattaneo, P.zza Tebaldo Brusato, Vicolo Settentrionale, Via Dei
Musei, Via Solone Reccagni, Piazza Martiri di Belfiore, Via Mazzini, Corso Zanardelli,
Via X Giornate, IV Novembre.
        </p>
      </section>
      <section className="paragraph" id="servizi">
        <h2>Servizi</h2>
        <p>Non mancheranno accorgimenti necessari per rendere questo giorno davvero accessibile a chiunque:</p>
        <Services />
      </section>
      <section className="paragraph" id="riposo">
        <h2>Punto di riposo</h2>
        <section>
        <p className="pWithLink">
          <span>In Piazza Tebaldo Brusato troverete accoglienza da Edicola e dallə amicə di</span>
            <a href="https://www.facebook.com/associazione.amicidellapiazza" target="_blank" rel="noopener noreferrer">
              @line_culture_eu
            </a>
          <span>.</span>
        </p>
        </section>
        <section>
          <h3>Il progetto</h3>
          <p>Edicola è un padiglione temporaneo progettato dallo studio Associates Architecture che reinterpreta il ruolo delle edicole cittadine in chiave contemporanea: distribuisce cultura, ma attraverso un’altra azione con la produzione di eventi culturali inclusivi.</p>
        </section>
        <section>
          <h3>Risorse a disposizione</h3>
          <p>Saranno disponibili diverse risorse base per vivere al meglio questa giornata:</p>
          <ul>
            <li>
              <MuteIcon
                color="brown"
                backgroundColor="yellow"
                name="Tappi per le orecchie"
                desc="Fino ad esaurimento scorte"
              />
            </li>
            <li>
              <BatteryIcon
                color="brown"
                backgroundColor="yellow"
                name="Zuccheri per ricaricare le energie"
                desc="Fino ad esaurimento scorte"
              />
            </li>
            <li>
              <StimToyIcon
                color="brown"
                backgroundColor="yellow"
                name="Stim / Fidget Toys (giochi antistress)"
                desc="Condivisi per chi ne avesse bisogno"
              />
            </li>
            <li>
              <WaterIcon
                color="brown"
                backgroundColor="yellow"
                name="Acqua"
                desc="Riempe la tua borraccia nella torretta A2A di acqua a distribuzione gratuita"
              />
            </li>
            <li>
              <PhoneIcon
                color="brown"
                backgroundColor="yellow"
                name="Oggetti smarriti"
                desc="Sarà possibile reclamare o consegnare oggetti smarriti"
              />
            </li>
            <li>
              <ChairIcon
                color="brown"
                backgroundColor="yellow"
                name="Sedute e spazi di riposo"
                desc="Per chi ha bisogno di una piccola pausa della marcia"
              />
            </li>
          </ul>
        </section>
        <section>
          <h3>Scopre la Casa delle Bambole</h3>
          <p>
            Ad Edicola quel giorno, si potrà scoprire la storia di "Casa delle Bambole", una comunità queer che negli anni Settanta ha cambiato il volto del quartiere Carmine ed è stata fotografata da uno dei suoi protagonisti:
            Armando Borno (sarà anche lui presente!). Poster, cartoline, libri e un grande progetto in arrivo.
          </p>
        </section>
      </section>
      <section className="paragraph" id="carri">
        <h2>I Carri</h2>
        <p>Sei realtà ci accompagneranno durante la sfilata dei nostri corpi e delle nostre reivindicazioni lungo le vie della città.</p>
        <Cars />
      </section>
      <style jsx>{`
        .paragraph,
        .paragraph > section,
        .paragraph > section > section {
          display: flex;
          flex-direction: column;
          gap: var(--gutter);
        }
        .paragraph h2 {
          color: var(--brown);
        }
        .paragraph > section {
          margin-bottom: var(--gutter2x);
        }
        .separator {
          height: 1px;
          border-bottom: 1px solid var(--blue);
        }
        .pWithLink > span:first-child {
          margin-right: var(--half-gutter);
        }
        .edicola-container {
          display: flex;
          gap: var(--gutter3x);
          align-items: center;
        }
        .edicola-container > div {
          display: flex;
          flex-direction: column;
          gap: var(--gutter);
        }
        @media screen and (max-width: 600px) {
          .edicola-container {
            flex-direction: column;
            gap: var(--gutter);
          }
          .edicola-container > div {
            gap: var(--gutter2x);
          }
        }
      `}</style>
    </PageLayout>
  );
}
