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
        <section>
          <p>
            Esprimiamo la nostra gratitudine ai nostri preziosi sostenitori che
            hanno aderito o concesso il patrocinio al nostro progetto. Il vostro
            sostegno è fondamentale.
          </p>
          <h2>Patrocini</h2>
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
                    {filteredSupporters.length} {type}
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
          <h2>Adesioni</h2>
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
                    {filteredSupporters.length} {type}
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
