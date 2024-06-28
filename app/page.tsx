"use client";

import React from "react";
import localFont from "next/font/local";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { SiFacebook, SiGmail, SiInstagram, SiTiktok } from "react-icons/si";
const myFont = localFont({src: "ui/fonts/ST.ttf"});

export default function RevealBento() {
  return (
    <div className="min-h-screen px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto flex flex-col md:grid md:max-w-6xl md:grid-flow-dense md:grid-cols-4 gap-4"
      >
        <LogoBlock />
        <HeaderBlock />
        <Block className="col-span-1 p-0 hidden md:block">
          <img src="/images/8.jpg" alt="Image 1" className="rounded-lg w-full h-full object-cover" />
        </Block>
        <SocialsBlock />
        <FightBlock />
        <Block className="col-span-1 p-0 hidden md:block">
          <img src="/images/16.jpg" alt="Image 1" className="rounded-lg w-full h-full object-cover" />
        </Block>
        <Block className="col-span-1 p-0 hidden md:block">
          <img src="/images/10.jpg" alt="Image 1" className="rounded-lg w-full h-full object-cover" />
        </Block>
        <DonationBlock />
      </motion.div>
      {/* <Footer /> */}
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const LogoBlock = () => {
  const finalDate = new Date("2024-09-07").getTime();
  const now = new Date().getTime();
  const distance = finalDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  return (
    <Block className="bg-green col-span-4 row-span-1">
    <h1 className="mb-12 text-2xl md:text-4xl font-medium leading-tight text-pink">

    <span className={`font-bold mr-2 ${myFont.className}`}>
       Brescia Pride
      </span>
      Più unite e compatte che mai, ci vogliamo far sentire, per progettare insieme una società a misura di ogni persona. Ci vediamo in piazza il 7 settembre.
    </h1>
  </Block>
  );

}

const HeaderBlock = () => (
  <Block className="bg-orange col-span-3">
    <h1 className="mb-12 text-2xl md:text-4xl font-medium leading-tight text-cream">
      Siamo una realtà intersezionale, transfemminista, antifascista, gentile e autogestita.
    </h1>
    <a
      href="https://bresciapride.com/manifesto.pdf"
      target="_blank"
      className="flex items-center gap-1 text-cream hover:underline"
    >
      Leggi il manifesto<FiArrowRight />
    </a>
  </Block>
);

const FightBlock = () => (
  <Block className="col-span-4 row-span-2 bg-dark-blue">
    <h1 className="text-2xl md:text-4xl font-medium leading-tight text-light-green">
      <span>
      Lottiamo per l{"'"}equità, l{"'"}inclusività, la sostenibilità ambientale, e la promozione e il rispetto dei diritti umani.</span>
    </h1>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="bg-cream hidden md:block"
    >
      <a
        href="https://www.instagram.com/bresciapride"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiInstagram />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="bg-cream hidden md:block"
    >
      <a
        href="https://www.tiktok.com/@bresciapride"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-dark-blue"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="bg-cream hidden md:block"
    >
      <a
        href="mailto:info@bresciapride.it"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-dark-blue"
      >
        <SiFacebook />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="w-100 bg-cream hidden md:block"
    >
      <a
        href="https://www.facebook.com/BresciaPride"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-dark-blue"
      >
        <SiGmail />
      </a>
    </Block>
  </>
);

const DonationBlock = () => (
<Block className="bg-red col-span-2">
    <h1 className="mb-12 text-2xl md:text-4xl font-medium leading-tight text-pink">
      <span>
        Puoi aiutarci con una donazione, anche piccola, per sostenere le nostre attività.
      </span>
    </h1>
    <a
      href="https://www.paypal.com/paypalme/bresciapride"
      target="_blank"
      className="flex items-center gap-1 hover:underline text-pink"
    >
      Offrici un caffè<FiArrowRight />
    </a>
  </Block>
);


const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Fatto con ❤️ da{" "}
        <a href="https://x.com/sanluisdev" className="hover:underline">
          @sanluisdev
        </a>
      </p>
    </footer>
  );
};