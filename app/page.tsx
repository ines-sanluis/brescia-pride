"use client";

import React from "react";
import localFont from "next/font/local";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
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
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-4 gap-4"
      >
        <HeaderBlock />
        <Block className="col-span-1 p-0">
          <img src="/images/8.jpg" alt="Image 1" className="rounded-lg w-full h-full object-cover" />
        </Block>
        <SocialsBlock />
        <FightBlock />
        <Block className="col-span-1 p-0">
          <img src="/images/16.jpg" alt="Image 1" className="rounded-lg w-full h-full object-cover" />
        </Block>
        <Block className="col-span-1 p-0">
          <img src="/images/10.jpg" alt="Image 1" className="rounded-lg w-full h-full object-cover" />
        </Block>
        <DonationBlock />
      </motion.div>
      <Footer />
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

const HeaderBlock = () => (
  <Block className="bg-orange col-span-3">
    <h1 className="mb-12 text-4xl font-medium leading-tight text-cream">
      <span className={`font-bold mr-2 ${myFont.className}`}>
       Ciao!
      </span>
      Siamo una realtà intersezionale, transfemminista, antifascista, gentile e autogestita.
    </h1>
    {/* <a
      href="#"
      className="flex items-center gap-1 text-cream hover:underline"
    >
      Leggi il manifesto<FiArrowRight />
    </a> */}
  </Block>
);

const FightBlock = () => (
  <Block className="col-span-4 row-span-2 bg-dark-blue">
    <h1 className="text-4xl font-medium leading-tight text-light-green">
    <span className={`font-bold mr-2 ${myFont.className}`}>
       Lottiamo
      </span>
      <span>
      Per l'equità, l'inclusività, la sostenibilità ambientale, e la promozione e il rispetto dei diritti umani.</span>
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
      className="bg-cream"
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
      className="bg-cream"
    >
      <a
        href="#"
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
      className="bg-cream"
    >
      <a
        href="https://www.facebook.com/BresciaPride"
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
      className="w-100 bg-cream"
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
    <h1 className="mb-12 text-4xl font-medium leading-tight text-pink">
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