import React from 'react'
import HandshakeIcon from '../Icons/HandshakeIcon'
import WarningIcon from '../Icons/WarningIcon'
import SunIcon from '../Icons/SunIcon'
import TreeIcon from '../Icons/TreeIcon'
import Heart from '../Icons/HeartIcon'
import Icon from '../Icon'

export default function Sustainability()  {
  return (
    <>
    <ul>
      <li><Icon
        color="green"
        backgroundColor="purple"
        name="Porta i tuoi rifiuti a casa"
        desc="Se porti il pranzo a saco, ricordati di portare anche i tuoi rifiuti a casa. I cestini sono pochi e non permettono di fare la raccolta differenziata"
      />
      </li>
      <li><Icon
        color="green"
        backgroundColor="purple"
        name="Non gettare mozziconi di sigaretta per terra"
        desc="Il filtro non è biodegradabile e contiene sostanze dannose per l'ambiente. Puoi trovare porta mozziconi all'eco-point e al nostro banchetto in Piazza Vittoria"
        />
        </li>
      <li><Icon
        color="green"
        backgroundColor="purple"
        name="Porta la tua borraccia"
        desc="Idratati in maniera sostenibile nelle fontanelle segnalate"
      />
      </li>
      <li><Icon
        color="green"
        backgroundColor="purple"
        name="Porta telefoni e tablet non più utilizzabili"
        desc="Saranno raccolti da 5R Zero Sprechi all'ecopoint di Piazza Vittoria e destinati al progetto Terre Rare del Jane Goodall Institute per ridure l'accumulo di rifiuto tossici e la domanda di minerali"
      />
      </li>
      <li><Icon
        color="green"
        backgroundColor="purple"
        name="Evita di lanciare coriandoli"
        desc="Basterà la nostra presenza a riempire di colori la città"
      />
      </li>
      <li><Icon
        color="green"
        backgroundColor="purple"
        name="Non utilizzare palloncini di plastica"
        desc="Piuttosto porta con te un cartello con un messaggio che ti sta a cuore"
      />
      </li>
      <li><Icon
        color="green"
        backgroundColor="purple"
        name="Tutela la città che ci accoglie e chi la attraversa"
        desc="Non scarabocchiare i muri, non
        accendere fumogeni o agenti di disturbo per l’ambiente e le persone che ti
        circondano"
      />
      </li>
      </ul>
    </>
  )
}