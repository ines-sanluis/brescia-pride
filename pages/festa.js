import React from "react";
import PageLayout from "../components/PageLayout";

export default function Interventi() {

  return (
    <PageLayout
      title="Festa"
      name="Scopri l'afterparty"
    >
      <p>
        La Associazione Carminiamo in collaborazione con Brescia Pride ha organizzato una festa dopo il corteo nel quartiere più colorato della città.
      </p>
      <h2>Carmine</h2>
      <p>
      12 punti di musica dislocati in tutto il Carmine dalle 20:30 fino alle 23:30.
      </p>
      <div className="container">
      <section className="paragraph">
        <div className="stage-title">
          <h3>Palco 1</h3>
          <address>Via Fratelli Bandiera</address>
        </div>
        <p className="artist">Carro Werk! + Favolos3 Special Guests</p>
        <p>con Carmen Town, Crivello e Casa del Popolo</p>
      </section>
      <section className="paragraph">
        <div className="stage-title">
          <h3>Palco 2</h3>
          <address>Via Porta Pile</address>
        </div>
        <p className="artist">Diggei Chang DJSet</p>
        <p>con Lumi</p>
      </section>
      <section className="paragraph">
        <div className="stage-title">
          <h3>Palco 3</h3>
          <address>Via Fratelli Bandiera</address>
        </div>
        <p className="artist">Carro Red Moon - SC E IR DJSet</p>
        <p>con Osteria Croce Bianca</p>
      </section>
      <section className="paragraph">
        <div className="stage-title">
          <h3>Palco 4</h3>
          <address>Via Porta Pile</address>
        </div>
        <p className="artist">Carro Figli delle Stelle + Artemisia - Fgiaca DJ</p>
        <p>con Sottoscala, Gughi e Paco Bar</p>
      </section>
      <section className="paragraph">
        <div className="stage-title">
          <h3>Palco 5</h3>
          <address>Via San Faustino</address>
        </div>
        <p className="artist">Marco Cusmai DJSet</p>
        <p>con La Torre Cucina Gourmet</p>
      </section>
      <section className="paragraph">
        <div className="stage-title">
          <h3>Palco 6</h3>
          <address>Via delle Battaglie</address>
        </div>
        <p className="artist">MBJ DJSet</p>
        <p>con Enotema, Ghiottone, Myxto e Bar d'Altri</p>
      </section>
      <section className="paragraph">
        <div className="stage-title">
          <h3>Palco 7</h3>
          <address>Via delle Battaglie</address>
        </div>
        <p className="artist">Susannasinuona DJSet</p>
        <p>con Belafonte Cocktails</p>
      </section>
      <section className="paragraph">
        <div className="stage-title">
          <h3>Palco 8</h3>
          <address>Contrada del Carmine</address>
        </div>
        <p className="artist">Peak Nick DJSet</p>
        <p>con Box, Incipit e Santa Rita Tatuaggi</p>
      </section>
      <section className="paragraph">
        <div className="stage-title">
          <h3>Palco 9</h3>
          <address>Contrada del Carmine</address>
        </div>
        <p className="artist">Carro UccelliniUccellacci DJSet, Collin Salle / NixXx / Nini</p>
        <p>con Mesceria Selvatica</p>
      </section>
      <section className="paragraph">
        <div className="stage-title">
          <h3>Palco 10</h3>
          <address>Via San Faustino</address>
        </div>
        <p className="artist">La Trifola Live</p>
        <p>con Piovono Bombette</p>
      </section>
      <section className="paragraph">
        <div className="stage-title">
          <h3>Palco 11</h3>
          <address>Via delle Battaglie ang. Nino Bixio</address>
        </div>
        <p className="artist">Francesco Andreoli DJSet & Albivano Voice</p>
        <p>con Elda e Galleria dell'Ombra</p>
      </section>
      <section className="paragraph">
        <div className="stage-title">
          <h3>Palco 12</h3>
          <address>Via Odorici ang. Contrada del Carmine</address>
        </div>
        <p className="artist">Pulsa La Pussy Music Selector DJSet</p>
        <p>con Artemis</p>
      </section>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          gap: var(--gutter);
        }
        .paragraph {
          display: flex;
          flex-direction: column;
          gap: var(--half-gutter);
          padding: var(--gutter2x);
          border-radius: var(--border-radius);
          background-color: var(--white);
          border: 2px solid var(--red);
          box-shadow: var(--shadow);
        }
        .stage-title {
          display: flex;
          flex-direction: column;
          margin-bottom: var(--gutter);
          gap: var(--half-gutter);
        }
        address {
          font-style: normal;
        }
        .artist {
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: -0.7px;
        }
        h2 {
          color: var(--red);
        }
      `}</style>
    </PageLayout>
  );
}
