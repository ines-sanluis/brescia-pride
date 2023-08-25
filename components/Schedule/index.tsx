import React from "react";
import Time from "../Time";

const schedule = [
  {
    title: "Concentramento",
    location: "Piazza Vittoria",
    time: "h 15",
    details: []
  },
  {
    title: "Interventi",
    time: "h 15:30",
    details: [
      "Discorso introduttivo",
      "Student3 scuole di Brescia",
      "Comitato Brescia Pride"
    ]
  },
  {
    title: "Partenza Corteo",
    time: "h 16",
    location: "Piazza Vittoria",
    details: []
  },
  {
    title: "Arrivo e interventi dal palco",
    location: "Piazza Vittoria",
    time: "h 18",
    details: [
      "Comitato Brescia Pride",
      "Famiglie Arcobaleno+Agedo",
      "Annalisa Sirignano (she/her)",
      "Non Una Di Meno Brescia",
      "Kay Kamakhya (she/her)",
      "Istituzioni"
    ]
  },
  {
    title: "Festa",
    location: "Carmine",
    time: "h 20",
    details: []
  },
  // {
  //   title: "Afterparty",
  //   location: "Da comunicare",
  //   time: "h 00:30",
  //   details: []
  // },
];
export default function Schedule() {
  return (
    <>
      {schedule.map(({ title, location, time, details }) => (
        <Time key={`schedule-${title}`} title={title} location={location} time={time} details={details} color="brown" />
      ))}
    </>
  );
}
