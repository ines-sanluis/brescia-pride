"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";
import localFont from "next/font/local";

const myFont = localFont({src: "fonts/ST.ttf"});

const CollapseCardFeatures = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="overflow-hidden px-2 md:px-8 py-8 md:py-12" id="chi-siamo">
      <div className="flex flex-col md:block gap-4 mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 md:mb-8">
          <h2 className={`hidden md:block text-4xl leading-[1.2] md:text-5xl text-neutral-700 ${myFont.className} tracking-wider`}>
            La nostra storia
          </h2>
          <h2 className={`md:hidden text-4xl leading-[1.2] md:text-5xl text-neutral-700 ${myFont.className} tracking-wider`}>
            La storia
          </h2>
          <div className="hidden md:flex gap-2">
            <button
              className="rounded-sm h-fit bg-neutral-700 p-3 text-2xl text-neutral-50 transition-colors hover:bg-neutral-600"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="rounded-sm h-fit bg-neutral-700 p-3 text-2xl text-neutral-50 transition-colors hover:bg-neutral-600"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {features.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
        <div className="md:hidden flex self-end gap-2">
            <button
              className="rounded-sm h-fit bg-neutral-700 p-3 text-2xl text-neutral-50 transition-colors hover:bg-neutral-600"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="rounded-sm h-fit bg-neutral-700 p-3 text-2xl text-neutral-50 transition-colors hover:bg-neutral-600"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </button>
          </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  position: number;
  index: number;
  title: string;
  description: string;
  year?: string;
}

const Feature = ({
  position,
  index,
  title,
  year,
  description
}: FeatureProps) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`rounded-sm relative flex max-w-72 md:max-w-lg shrink-0 justify-between overflow-hidden p-4 shadow-lg ${
        index % 2 ? "text-green border-green bg-neutral-50" : " bg-green text-neutral-50"
      } flex-col gap-2`}
    >
      <h3 className="text-3xl font-bold">{year}</h3>
      <h4 className="font-bold">{title}</h4>
      <p className="min-h-[110px] text-xs">{description}</p>
    </motion.div>
  );
};

export default CollapseCardFeatures;

const features = [
  {
    title: "La cultura si fa insieme",
    year: "2023",
    description: "La nostra città celebra il sapere, e per Brescia Pride la cultura si fa insieme. Il Comitato si rinnova, portando con sé valori e lotte che muovono un'onda di iniziative volte ad animare il territorio, in un anno che vede la città protagonista, insieme a Bergamo, del panorama culturale italiano.",
  },
  {
    title: "Le cose cambiano",
    year: "2022",
    description: "È l'anno nel quale lo spirito di Brescia Pride abbraccia più lotte e identità, facendole convergere in un'ottica intersezionale, ambientalista e antispecista, continuando la sua estensione in una rete fitta di collaborazioni ed eventi.",
  },
  {
    title: "Fuori la voce",
    year: "2019",
    description: "Arriva l'ingresso di singolз cittadinз all'interno del Comitato: è l'unione di tuttз, l'invito a tirare fuori la voce per creare spazi di libera espressione in sicurezza, rivendicati con orgoglio.",
  },
  {
    title: "Unire la città",
    year: "2017",
    description: "Grazie alla prima edizione Brescia Pride, si creano iniziative, collaborazioni, reti di collegamenti che arricchiscono il territorio e il progetto: unire la città non è solo il motto ma il movimento generato dall'azione collettiva.",
  },
  {
    title: "La fondazione",
    year: "2016",
    description: "Il Comitato nasce dal desiderio di rendere la nostra città un posto rispettoso delle identità e dei bisogni di tuttз.",
  },
];