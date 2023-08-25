import React from 'react'
import HandshakeIcon from '../Icons/HandshakeIcon'
import WarningIcon from '../Icons/WarningIcon'
import SunIcon from '../Icons/SunIcon'
import TreeIcon from '../Icons/TreeIcon'
import Heart from '../Icons/HeartIcon'
import PhoneIcon from '../Icons/PhoneIcon'
import { phoneNumber } from '../../utils/constants'

export default function Care()  {
  return (
    <>
      <HandshakeIcon
        color="brown"
        backgroundColor="yellow"
        name="Rispetta chi hai intorno, i suoi spazi, la sua identità e il suo consenso"
        />
      <WarningIcon
        color="brown"
        backgroundColor="yellow"
        name="Se vedi o subisci qualcosa che non va, non restare indifferente: rivolgiti alle persone di riferimento"
        />
      <SunIcon
        color="brown"
        backgroundColor="yellow"
        name="Porta con te una borraccia, crema solare in abbondanza e qualche snack"
      />
      <TreeIcon
        color="brown"
        backgroundColor="yellow"
        name="Tutela anche l’ambiente: non abbandonare cartacce in giro"
      />
      <Heart
        color="brown"
        backgroundColor="yellow"
        name="Dalle 15:30 alle 20, ci saranno membri del Comitato e referenti riconoscibili per qualsiasi necessità"
      />
      {/* <PhoneIcon
        color="brown"
        backgroundColor="yellow"
        name={`Per le emergenze, contatta il numero ${phoneNumber}`}
      /> */}
    </>
  )
}