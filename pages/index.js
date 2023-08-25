import { useState, useEffect } from "react";
import { nextDateAsString } from "../utils/date";
import { motto } from "../utils/constants";
import AppLayout from "../components/AppLayout";
import ArrowDown from "../components/Icons/ArrowDown";
import Path from "../components/Path";
import Section from "../components/Section";
import Stage from "../components/Stage";
import Schedule from "../components/Schedule";
import Accessibility from "../components/Accessibility";
import Care from "../components/Care";
import Cars from "../components/Cars";
import Button from "../components/Button";
import Guests from "../components/Guests";

export default function EntryPoint() {
  // Hide arrow when the user has scrolled down
  const [showArrow, setShowArrow] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setShowArrow(window.innerHeight < 500 !== true);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sections = [
    {
      title: "Programma",
      component: Schedule,
    },
    {
      title: "Il Manifesto",
      desc: [
        "Siamo una realtà LGBTQIAPK+, transfemminista queer, intersezionale, collettiva e orizzontale, laica, antifascista e antirazzista basata sui principi di autodeterminazione e non violenza, volta alla sostenibilità sociale e ambientale.",
        "Il nostro manifesto politico contiene i valori in cui crediamo e le richieste che presentiamo alle nostre istituzioni e alla cittadinanza tutta."
      ],
      component: () => <Button text="Leggi la versione integrale" color="brown" hoverColor="yellow" onClick={() => router.push("/manifest")} width="250px"/>,
    },
    {
      title: "Il Percorso",
      desc: ["Sempre più centrale ed intrecciato alle vie principali della nostra città che sono teatro di cultura e comunità."],
      component: Path,
    },
    {
      title: "Servizi",
      desc: ["Non mancheranno accorgimenti necessari per rendere questo giorno davvero accessibile a chiunque:"],
      component: Accessibility,
    },
    {
      title: "Carri",
      desc: ["Sei realtà ci accompagneranno durante la sfilata dei nostri corpi e delle nostre reivindicazioni lungo le vie della città."],
      component: Cars,
    },
    {
      title: "Piazza",
      desc: ["La piazza sarà il luogo di incontro e di reinvinicazione, dove potrai ascoltare gli interventi dell3 ospiti."],
      component: Stage,
    },
    {
      title: "Ospiti",
      desc: ["Saranno con noi per raccontare le loro esperienze e le loro battaglie."],
      component: Guests,
    },
    {
      title: "Cura",
      desc: ["Per rendere la giornata ulteriormente sicura per tutt3, ti invitiamo a qualche accorgimento."],
      component: Care,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppLayout>
      <div className="titleHeader">
        <h1 className="date">{nextDateAsString}</h1>
        <h2 className="date">P. Vittoria, 15h</h2>
        <div className="arrowIcon">
          <h3>{motto}</h3>
          <ArrowDown color="brown" />
        </div>
      </div>
      <div className="container">
        {sections.map((section, index) => (
          <Section key={index} title={section.title} desc={section.desc}>
            <section.component />
          </Section>
        ))}
      </div>
      <style jsx>{`
        .titleHeader {
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          gap: var(--gutter);
        }
        h1 {
          font-size: 2.5rem;
          color: var(--brown);
        }
        h2 {
          font-size: 2.5rem;
        }
        h1,
        h2,
        h3 {
          text-align: center;
        }
        .arrowIcon {
          display: flex;
          flex-direction: column;
          gap: var(--gutter);
          align-items: center;
          position: absolute;
          bottom: 80px;
          opacity: ${showArrow ? "1" : "0"};
          transition: opacity 0.5s ease-in-out;
          animation: bounce 2s infinite;
        }
        .corteo-text {
          display: flex;
          flex-direction: column;
          gap: var(--gutter);
        }
        .container {
          display: flex;
          flex-direction: column;
          gap: var(--gutter12x);
        }
        .icons {
          display: flex;
          flex-direction: column;
          gap: var(--gutter);
        }
        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-1rem);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </AppLayout>
  );
}
