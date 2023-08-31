import React from "react";
import AccessibilityIcon from "../Icons/AccessibilityIcon";
import HeartIcon from "../Icons/HeartIcon";
import RainbowIcon from "../Icons/PersonIcon";
import WaterIcon from "../Icons/WaterIcon";
import TreeIcon from "../Icons/TreeIcon";
import PersonIcon from "../Icons/PersonIcon";
import PhoneIcon from "../Icons/PhoneIcon";

export default function Services() {
  return (
    <>
      <WaterIcon
        color="brown"
        backgroundColor="yellow"
        name="Punti di acqua"
        desc="Porta con te una borraccia per ridurre l’impatto ambientale"
      />
      <PersonIcon
        color="brown"
        backgroundColor="yellow"
        name="Personale di riferimento per ogni necessità"
        desc="Dalle 15:30 alle 20, ci sarà personale riconoscibile"
      />
      <PhoneIcon
        color="brown"
        backgroundColor="yellow"
        name="Numero di cellulare per le emergenze"
        desc="Verrà comunitato il giorno dell'evento"
      />
      <AccessibilityIcon
        color="brown"
        backgroundColor="yellow"
        name="Servizi igienici accessibili"
        desc="In Bar Torre D'Ercole, Bar Black Sheep, COIN, Schiaccia, McDonald's, Bar Amante, Caffè dei Corte, Caffè Magenta e L'Enfant Terrible"
      />
      <HeartIcon
        color="brown"
        backgroundColor="yellow"
        name="Zone di scarico sensoriale"
        desc="Posizionate fisse in Piazza Tebaldo, Piazza del Foro, Piazza del Vescovato e Piazza Vittoria. Itinerante durante il corteo, identificata da cartelli e delimitazione bianca"
      />
      <TreeIcon
        color="brown"
        backgroundColor="yellow"
        name="Ecopoint"
        desc="Posizionato in Piazza Vittoria e gestito da 5R Zero Sprechi. Troverete porta mozziconi e ci sarà anche un punto di raccolta di telefoni e tablet non più utilizzabili"
      />
    </>
  );
}
