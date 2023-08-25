import Button from "../components/Button";
import PageLayout from "../components/PageLayout";
import Supporter from "../components/Supporter";
import { supportersForm, emails } from "../utils/constants";
import { SPONSORS_TYPES, sponsors } from "../utils/sponsors";
import { supporters, SUPPORTERS_TYPES } from "../utils/supporters";

export default function Supporters() {
  const sendEmail = () => {
    window.open(`mailto:${emails.legal}`, "_blank");
  };

  const openForm = () => {
    window.open(supportersForm, "_blank");
  };

  return (
    <>
      <PageLayout title="Sostenitori">
        <p>L'unione fa la forza e sei ancora in tempo!</p>
        <section>
          <h2>Patrocini</h2>
          <p>
            Se sei un Comune o un’istituzione, inviaci una mail e prendi parte
            al cambiamento.
          </p>
          <p>
            Il cambiamento parte dalle persone e dalle istituzioni: sostenere il
            Comitato vuol dire lottare per una società più equa, inclusiva e
            rispettosa. Per questo contiamo sul vostro patrocinio per l’edizione
            2023 di Brescia Pride!
          </p>
          <Button
            onClick={sendEmail}
            text="Scrivici"
            color="green"
            hoverColor="purple"
          />
        </section>
        <section>
          <h2>Adesioni</h2>
          <p>
            Sei un’istituzione, un collettivo, un’associazione o una realtà e
            vuoi dimostrare il tuo impegno per Brescia Pride? Ti aspettiamo!
          </p>
          <Button
            onClick={openForm}
            text="Compila il modulo"
            color="green"
            hoverColor="purple"
          />
        </section>
        <section>
          <p>
            Esprimiamo la nostra gratitudine ai nostri preziosi sostenitori che
            hanno aderito o concesso il patrocinio al nostro progetto. Il vostro
            sostegno è fondamentale.
          </p>
          {Object.values(SPONSORS_TYPES).map((type) => {
            let filteredSupporters = sponsors.filter(
              (supporter) => supporter.type === type
            );
            if (filteredSupporters.length > 0) {
              return (
                <section
                  key={`section-${type}`}
                  area-aria-labelledby={`type${type}`}
                >
                  <h3 key={`type${type}`} id={`type${type}`}>
                    <span>{filteredSupporters.length} {type}</span>
                    <span>{filteredSupporters.length > 1 ? "Patrocinano" : "Patrocina"}</span>
                  </h3>
                  {filteredSupporters.map((supporter, index) => (
                    <Supporter
                      key={`${type}-${index}`}
                      title={supporter.title}
                      description={supporter.description}
                      links={supporter.links}
                    />
                  ))}
                </section>
              );
            }
          })}
          {Object.values(SUPPORTERS_TYPES).map((type) => {
            let filteredSupporters = supporters.filter(
              (supporter) => supporter.type === type
            );
            if (filteredSupporters.length > 0) {
              return (
                <section
                  key={`section-${type}`}
                  area-aria-labelledby={`type${type}`}
                >
                  <h3 key={`type${type}`} id={`type${type}`}>
                    <span>{filteredSupporters.length} {type}</span>
                    <span>{filteredSupporters.length > 1 ? "Aderiscono" : "Aderisce"}</span>
                  </h3>
                  {filteredSupporters.map((supporter, index) => (
                    <Supporter
                      key={`${type}-${index}`}
                      title={supporter.title}
                      description={supporter.description}
                      links={supporter.links}
                    />
                  ))}
                </section>
              );
            }
          })}
        </section>
      </PageLayout>
      <style jsx>{`
        h2 {
          color: var(--green);
        }
        h3 {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid var(--green);
        }
        h3 > span:first-child {
          color: var(--green);
        }
        h3 > span:last-child {
          color: var(--green);
          font-family: inherit;
        }
        .buttons {
          display: flex;
          gap: var(--gutter);
        }
      `}</style>
    </>
  );
}
