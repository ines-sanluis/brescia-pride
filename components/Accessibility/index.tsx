import React from "react";
import AccessibilityIcon from "../Icons/AccessibilityIcon";
import HeartIcon from "../Icons/HeartIcon";
import InterpretingIcon from "../Icons/InterpretingIcon";
import PersonIcon from "../Icons/PersonIcon";
import WaterIcon from "../Icons/WaterIcon";
import StimToyIcon from "../Icons/StimToyIcon";
import BatteryIcon from "../Icons/BatteryIcon";
import MuteIcon from "../Icons/MuteIcon";
import ChairIcon from "../Icons/ChairIcon";
import LiveIcon from "../Icons/LiveIcon";

export default function Accessibility() {
  return (
    <>
    <ul>
        <li><WaterIcon
          color="red"
          backgroundColor="pink"
          name="Punti di acqua"
          desc="Porta con te una borraccia per ridurre l’impatto ambientale"
        />
        </li>
        <li><LiveIcon
          color="red"
          backgroundColor="pink"
          name="Diretta streaming"
          desc="Tutti gli interventi saranno resi accessibili online attraverso la diretta di ÈliveBrescia TV e rimarrà reperibile successivamente"
        />
        </li>
        <li><InterpretingIcon
          color="red"
          backgroundColor="pink"
          name="Interpretariato LIS"
          desc="Consigliamo a chi ne ufruisce di posizionarsi nella Zona Blu sottopalco per una migliore visibilità"
        />
        </li>
        <li><PersonIcon
          color="red"
          backgroundColor="pink"
          name="Personale di riferimento per ogni necessità"
          desc="Dalle 15:30 alle 20, ci sarà personale riconoscibile" 
        />
        </li>
        <li><AccessibilityIcon
          color="red"
          backgroundColor="pink"
          name="Servizi igienici accessibili"
          desc="In Bar Torre D'Ercole, Bar Black Sheep, COIN, Schiaccia, McDonald's, Bar Amante, Caffè dei Corte, Caffè Magenta e L'Enfant Terrible"
        />
        </li>
        <li><HeartIcon
          color="red"
          backgroundColor="pink"
          name="Zone di scarico sensoriale"
          desc="Posizionate fisse in Piazza Tebaldo, Piazza del Foro, Piazza del Vescovato e Piazza Vittoria. Itinerante durante il corteo, identificata da cartelli e delimitazione bianca"
        />
        </li>
        <li><StimToyIcon
          color="red"
          backgroundColor="pink"
          name="Stim Toys"
          desc="Saranno disponibili per persone neurodivergenti o chiunque ne sentisse il bisogno. Non adatti a chi li mette in bocca. Trovali nei carri e in Piazza Tebaldo"
          />
        </li>
        <li><ChairIcon
          color="red"
          backgroundColor="pink"
          name="Punto di riposo"
          desc="In Piazza Tebaldo Brusato troverete accoglienza da Edicola con spazi e sedute a disposizione"
        />
        </li>
        <li>
          <MuteIcon
            color="red"
            backgroundColor="pink"
            name="Tappi per le orecchie"
            desc="Trovali in Piazza Tebaldo fino ad esaurimento scorte"
          />
        </li>
        <li>
          <BatteryIcon
            color="red"
            backgroundColor="pink"
            name="Zuccheri per ricaricare le energie"
            desc="Trovali in Piazza Tebaldo fino ad esaurimento scorte"
          />
        </li>
        </ul>
    </>
  );
}
