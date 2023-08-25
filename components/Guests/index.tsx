import React from 'react'

const speeches = [
  {
    name: "Student3 scuole di Brescia",
    speech: "Una proiezione del futuro con le rivendicazioni di UDS Brescia e dei collettivi degli istituti De Andrè, Arnaldo, Gambara e Gigli."
  },
  {
    name: "Famiglie Arcobaleno + Agedo",
    speech: "Per ricordare che non esiste un solo tipo di famiglia, parlerà dell’importanza della lotta per il riconoscimento giuridico e sociale di ogni tipo di genitorialità e s/famiglia."
  },
  {
    name: "Annalisa Sirignano",
    speech: "Speaker e giornalista orgogliosamente terrona, è parte di Ti leggiamo una femminista e \"Ccà nisciun' è fessa\", rete territoriale che mappa l'accesso all'interruzione volontaria di gravidanza e sensibilizza sulla salute sessuale.",
  },
  {
    name: "Non Una Di Meno Brescia",
    speech: "Movimento politico transfemminista, antirazzista, antifascista e anticapitalista. Porterà la sua voce collettiva e orizzontale sulla creazione di percorsi intersezionali di lotta e azioni che intervengano sulle molteplici forme di violenza strutturale ed eterocispatriarcale."
  },
  {
    name: "Kay Kamakhya",
    speech: "Attivista indiana per i diritti umani e la tutela dell'ambiente. Kay, che si identifica come trans feminine, rende il suo lavoro nella moda un mezzo per battersi per la giustizia sociale.  Intervento in inglese con traduzione italiana."
  }
]

export default function Guests()  {
  return (
    <>
    {speeches.map((speech, index) => (
      <div key={`speech-${index}`}>
        <h3>{speech.name}</h3>
        <p>{speech.speech}</p>
      </div>
    ))}

    </>
  )
}