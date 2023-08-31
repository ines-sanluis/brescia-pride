import React from "react";
import Time from "../Time";

const schedule = [
  {
    title: "Concentramento",
    location: "Piazza Vittoria",
    time: "h 15",
    details: [],
    onlySpeeches: false,
  },
  {
    title: "Interventi pre-corteo",
    location: "Piazza Vittoria",
    time: "h 15:30",
    details: [
      "Il Comitato vi dà il benvenuto",
      "Student3 scuole di Brescia",
      "Discorso sulla cura"
    ],
    onlySpeeches: true,
    href: "/interventi"
  },
  {
    title: "Partenza del Corteo",
    time: "h 16",
    location: "Piazza Vittoria",
    details: [],
    onlySpeeches: false,
    href: "/percorso"
  },
  {
    title: "Rientro del Corteo",
    location: "Piazza Vittoria",
    time: "h 18",
    onlySpeeches: false,
  },
  {
    title: "Interventi dal palco",
    location: "Piazza Vittoria",
    time: "h 18:30",
    details: [
      "Comitato Brescia Pride",
      "Famiglie Arcobaleno+Agedo",
      "Annalisa Sirignano (she/her)",
      "Non Una Di Meno Brescia",
      "Kay Kamakhya (she/her)",
      "Istituzioni"
    ],
    onlySpeeches: true,
    href: "/interventi"
  },
  {
    title: "Termine interventi",
    location: "Piazza Vittoria",
    time: "h 20",
    onlySpeeches: true
  },
  {
    title: "Festa",
    location: "Carmine",
    time: "h 20:30 - h23:30",
    details: [],
    onlySpeeches: false,
    href: "/festa"
  }
];

interface Props {
  onlySpeeches?: boolean;
  color?: string;
}
export default function Schedule({ onlySpeeches, color }: Props) {
  const speechesToShow = onlySpeeches ? schedule.filter(({ onlySpeeches }) => onlySpeeches) : schedule;
  return (
    <>
      {speechesToShow.map(({ title, location, time, details, href }) => (
        <Time key={`schedule-${title}`} title={title} location={location} time={time} details={details} color={color || "brown"} href={onlySpeeches ? undefined : href}/>
      ))}
    </>
  );
}
