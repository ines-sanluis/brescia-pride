import React from "react";
import AccessibilityIcon from "../Icons/AccessibilityIcon";
import HeartIcon from "../Icons/HeartIcon";
import InterpretingIcon from "../Icons/InterpretingIcon";
import RainbowIcon from "../Icons/PersonIcon";
import WaterIcon from "../Icons/WaterIcon";
import TreeIcon from "../Icons/TreeIcon";
import StimToyIcon from "../Icons/StimToyIcon";
import BatteryIcon from "../Icons/BatteryIcon";

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
        <StimToyIcon
          color="brown"
          backgroundColor="yellow"
          name="Stim Toys"
          desc="Saranno disponibili per persone neurodivergenti o chiunque ne sentisse il bisogno. Se ne hai uno che potresti mettere a disposizione, contattaci!"
        />
        <TreeIcon
          color="brown"
          backgroundColor="yellow"
          name="Ecopoint"
          desc="Posizionato in Piazza Vittoria e gestito da 5R Zero Sprecchi. Troverete porta mozziconi e ci sarà anche un punto di raccolta di telefoni e tablet non più utilizzabili."
        />
        <BatteryIcon
          color="brown"
          backgroundColor="yellow"
          name="Punto di riposo"
          desc="In Piazza Tebaldo Brusato troverete accoglienza da Edicola."
        />
    </>
  );
}
