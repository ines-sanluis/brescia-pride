"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";

const myFont = localFont({src: "fonts/ST.ttf"});

const ShuffleHero = () => {
  return (
    <section
      id="manifesto"
      className="w-full px-2 md:px-8 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto"
    >
      <div>
        <h1 className={`tracking-wider text-6xl leading-[1.2] text-green md:text-6xl ${myFont.className}`}>
          Brescia Pride
        </h1>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Siamo una realtà LGBTQIAPK+, transfemminista queer, intersezionale, collettiva e orizzontale, laica, antifascista e antirazzista basata sui principi di autodeterminazione e non violenza, volta alla sostenibilità sociale e ambientale.
        </p>
        <button
          onClick={() => window.open("./manifesto.pdf", "_blank")}
          className="bg-green text-neutral-50 font-medium py-2 px-4 rounded transition-all hover:bg-gradient hover:bg-light-green active:scale-95"
        >
          Leggi il manifesto
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "images/1.jpg"
  },
  {
    id: 2,
    src: "images/2.jpg"
  },
  {
    id: 3,
    src: "images/3.jpg"
  },
  {
    id: 4,
    src: "images/4.jpg"
  },
  {
    id: 5,
    src: "images/5.jpg"
  },
  {
    id: 6,
    src: "images/6.jpg",
  },
  {
    id: 7,
    src: "images/7.jpg",
  },
  {
    id: 8,
    src: "images/8.jpg",
  },
  {
    id: 9,
    src: "images/9.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-sm"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[350px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;