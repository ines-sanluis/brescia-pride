import React from "react";
import AccessibilityIcon from "../Icons/AccessibilityIcon";
import HeartIcon from "../Icons/HeartIcon";
import InterpretingIcon from "../Icons/InterpretingIcon";
import RainbowIcon from "../Icons/RainbowIcon";
import WaterIcon from "../Icons/WaterIcon";

export default function Accessibility() {
  return (
    <>
        <WaterIcon
          color="brown"
          backgroundColor="yellow"
          name="Punti di acqua"
        />
        <InterpretingIcon
          color="brown"
          backgroundColor="yellow"
          name="Interpretariato LIS e diretta per tutta la durata degli interventi"
        />
        <RainbowIcon
          color="brown"
          backgroundColor="yellow"
          name="Personale di riferimento per ogni necessità"
        />
        <AccessibilityIcon
          color="brown"
          backgroundColor="yellow"
          name="Servizi igienici accessibili"
        />
        <HeartIcon
          color="brown"
          backgroundColor="yellow"
          name="Zone di scarico sensoriale"
          desc="Posizionate fisse in Piazza Tebaldo, Piazza del Foro, Piazza del Vescovato e Piazza Vittoria. Itinerante durante il corteo, identificata da cartelli e delimitazione bianca."
        />
    </>
  );
}
