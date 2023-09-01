import React from 'react'
import HandshakeIcon from '../Icons/HandshakeIcon'
import WarningIcon from '../Icons/WarningIcon'
import SunIcon from '../Icons/SunIcon'
import TreeIcon from '../Icons/TreeIcon'
import Heart from '../Icons/HeartIcon'
import PhoneIcon from '../Icons/PhoneIcon'

export default function Care()  {
  return (
    <>
    <ul>
      <li>
      <HandshakeIcon
        color="green"
        backgroundColor="purple"
        name="Rispetta chi hai intorno"
        desc="I suoi spazi, la sua identità e il suo consenso. Chiedi prima di toccare o di fotografare qualcunx"
        />
        </li>
        <li>
      <WarningIcon
        color="green"
        backgroundColor="purple"
        name="Rivolgiti alle persone di riferimento"
        desc="Se ti trovi in difficoltà o vedi/subisci qualcosa che non va, non restare indifferente: rivolgiti alle persone di riferimento"
        />
        </li>
      <li><SunIcon
        color="green"
        backgroundColor="purple"
        name="Pratica l’auto-cura"
        desc="Porta con te una borraccia, crema solare in abbondanza e qualche snack"
      /></li>
      <li><TreeIcon
        color="green"
        backgroundColor="purple"
        name="Tutela l’ambiente"
        desc="Consulta la sezione dedicata qui sotto e trova l'ecopoint in Piazza Vittoria"
      />
      </li>
      <li><Heart
        color="green"
        backgroundColor="purple"
        name="Impara a riconoscere lo staff"
        desc="Dalle 15:30 alle 20, ci saranno membri del Comitato e referenti riconoscibili per qualsiasi necessità"
      />
      </li>
      <li>
        <PhoneIcon
          color="green"
          backgroundColor="purple"
          name="Salva il numero di emergenza"
          desc="Verrà comunicato il giorno stesso"
        />
      </li>
      </ul>
    </>
  )
}