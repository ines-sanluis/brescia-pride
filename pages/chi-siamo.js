import PageLayout from "../components/PageLayout";
import Timeline from "../components/Timeline";
import Section from "../components/Section";
import Heart from "../components/Icons/HeartIcon";
import Tshirt from "../components/Icons/TshirtIcon";
import People from "../components/Icons/PeopleIcon";
import Instagram from "../components/Icons/InstagramIcon";
import Button from "../components/Button";
import { socialLinks } from "../utils/constants";

export default function About() {
  const openStatute = () => {
    window.open("/statuto.pdf", "_blank");
  };

  return (
    <>
      <PageLayout title="Chi siamo">
        <Section color="red" title="Lo statuto">
          <p>
            Siamo una realtà LGBTQIAPK+, transfemminista queer, intersezionale,
            collettiva e orizzontale, laica, antifascista e antirazzista basata
            sui principi di autodeterminazione e non violenza, volta alla
            sostenibilità sociale e ambientale.
          </p>
          <Button
            text="Leggi lo statuto"
            color="red"
            hoverColor="pink"
            onClick={openStatute}
            width="200px"
          />
        </Section>
        <Section color="red" title="La nostra storia">
          <Timeline />
        </Section>
        <Section
          color="red"
          title="Come supportarci"
          desc={[
            "Brescia Pride è un progetto autofinanziato che attinge alle risorse e al supporto della città per portare avanti iniziative di valorizzazione del territorio e sensibilizzazione sui temi civili.",
          ]}
        >
          <Heart
            color="pink"
            backgroundColor="red"
            name="Fai una donazione libera sul nostro sito Kofi"
            desc={
              <a
                href="https://ko-fi.com/bresciapride"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donaci un caffè, un aperitivo o quello che vuoi su Kofi.
              </a>
            }
          />
          <People
            color="pink"
            backgroundColor="red"
            name="Partecipa ai nostri eventi"
          />
          <Instagram
            color="pink"
            backgroundColor="red"
            name="Resta in contatto seguendoci sui social"
            desc={
              <a
                href="https://www.instagram.com/bresciapride/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ci trovi su Instagram come @{socialLinks.instagram}
              </a>
            }
          />
          <Tshirt
            color="pink"
            backgroundColor="red"
            name="Vieni a trovarci nel nostro banchetto e acquista i nostri gadget"
          />
        </Section>
      </PageLayout>
    </>
  );
}
