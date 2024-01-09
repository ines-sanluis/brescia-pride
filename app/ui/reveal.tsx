"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";

const myFont = localFont({src: "fonts/ST.ttf"});

const RevealCards = () => {
  return (
    <div className="py-8 md:py-12 flex flex-col gap-8" id="cosa-facciamo">
      <h2 className={`px-2 md:px-8 text-4xl leading-[1.2] md:text-5xl text-neutral-700 ${myFont.className} tracking-wider`}>
        Le nostre attività
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-8">
        <Card
          title="Eventi"
          description="Organizziamo e supportiamo eventi informativi, formativi e aggregativi queer."
          imgSrc="./images/10.jpg"
        />
        <Card
          title="Corteo"
          description="Coordiniamo e realizziamo la manifestazione annuale “Brescia Pride”."
          imgSrc="./images/16.jpg"
        />
        <Card
          title="Spazi sicuri"
          description="Promuoviamo spazi sicuri safer, contribuendo a diffondere la cultura sociale
          dell’inclusività, del rispetto e della gentilezza."
          imgSrc="./images/13.jpg"
        />
      </div>
    </div>
  );
};

const Card = ({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div whileTap="hover" whileHover="hover" className="w-full h-[250px] relative select-none">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-green rounded-t-sm">
        <h3 className="text-xl mb-2 font-semibold text-neutral-50">{title}</h3>
        <p className="text-xs font-light text-neutral-50">{description}</p>
      </div>
      <motion.div
        variants={{
          hover: {
            top: "50%",
            borderStartEndRadius: "0",
            borderStartStartRadius: "0",
          },
        }}
        className="absolute inset-0 bg-slate-200 z-10 rounded-sm cursor-pointer"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </motion.div>
  );
};

export default RevealCards;