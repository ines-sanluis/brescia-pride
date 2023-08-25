import Button from "../components/Button";
import PageLayout from "../components/PageLayout";
import Supporter from "../components/Supporter";
import { supportersForm, emails } from "../utils/constants";
import { supporters, TYPES } from "../utils/supporters";

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
        <p>
          Esprimiamo la nostra gratitudine ai nostri preziosi sostenitori che
          hanno aderito o concesso il patrocinio al nostro progetto. Il vostro
          sostegno è fondamentale.
        </p>
        <p>
          L'unione fa la forza, e sei ancora in tempo! Se sei un'istituzione o
          un comune, contattaci. In alternativa, puoi compilare il modulo.
        </p>
        <div className="buttons">
          <Button
            onClick={sendEmail}
            text="Scrivici"
            color="green"
            hoverColor="purple"
          />
          <Button
            onClick={openForm}
            text="Compila il modulo"
            color="green"
            hoverColor="purple"
          />
        </div>
        {Object.values(TYPES).map((type) => {
          let filteredSupporters = supporters.filter(
            (supporter) => supporter.type === type
          );
          if (filteredSupporters.length > 0) {
            return (
              <section
                key={`section-${type}`}
                area-aria-labelledby={`type${type}`}
              >
                <h2 key={`type${type}`} id={`type${type}`}>
                  {type}
                </h2>
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
      </PageLayout>
      <style jsx>{`
        h2 {
          color: var(--green);
        }
        .buttons {
          display: flex;
          gap: var(--gutter);
        }
      `}</style>
    </>
  );
}
