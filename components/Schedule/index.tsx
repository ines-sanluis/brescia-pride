import React from "react";
import Time from "../Time";

const schedule = [
  {
    title: "Concentramento",
    location: "Piazza Vittoria",
    time: "h 15",
  },
  {
    title: "Interventi",
    time: "h 15:30",
  },
  {
    title: "Partenza Corteo",
    time: "h 16",
  },
  {
    title: "Arrivo e interventi palco",
    location: "Piazza Vittoria",
    time: "h 18",
  },
  {
    title: "Festa",
    location: "Carmine",
    time: "h 20",
  },
  {
    title: "Afterparty",
    location: "Da comunicare",
    time: "h 00:30",
  },
];
export default function Schedule() {
  return (
    <>
      {schedule.map(({ title, location, time }) => (
        <Time key={`schedule-${title}`} title={title} location={location} time={time} color="brown" />
      ))}
    </>
  );
}
