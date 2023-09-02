import {nextDate } from "./date";

export const title = "Brescia Pride";
export const officialName = "Comitato Brescia Pride ETS";
export const headquarters = "Via F.lli Folonari 7, 25126 Brescia (BS)";
export const motto = "La cultura si fa insieme";
export const socialLinks = {
  instagram: "bresciapride",
  facebook: "BresciaPride",
  tiktok: "bresciapride",
}
export const emails = {
  legal: "comitatobresciapride@pec-legal.it",
  info: "info@bresciapride.it",
  admin: "amministrazione@bresciapride.it",
  press: "ufficiostampa@bresciapride.it",
  events: "eventi@bresciapride.it"
}

export const securityNumber = "98201800178";
export const supportersForm = "https://docs.google.com/forms/d/e/1FAIpQLSc0MurK0q_ZANj39pOaFtC7YHNKfbjRnflcWpV8oNUEf0yjgg/viewform?pli=1";
export const countdownUntilNextPride = () => {
  const today = new Date();
  const difference = nextDate.getTime() - today.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24));
  return `${days} giorni`;
};
export const cars = [
  {
    title: "Werk!",
    tag: "werk.collective",
    desc: "Werk! è molto più di una casa, è una famiglia senza limiti e senza confini, è una famiglia senza tradizione. E se ti scorgi verso il davanzale, scrutando nel salotto, potresti trovare una mano che ti invita a tavola...",
  },
  {
    title: "Republique Fabrique",
    tag: "republiquefabrique",
    desc: "Dal 2015 la loro missione è far cucire tutto il mondo, ma il 2 settembre si presenteranno alla città in una veste tutta nuova! Noi siamo curiosissim3, e voi?",
  },
  {
    title: "Sonida",
    tag: "sonidabrescia",
    desc: "Ospite del corteo Brescia Pride sin dalla prima edizione, locale ormai storico nella città, anche quest’anno il carro del Sonida promete di farvi scatenare... fino a notte fonda!",
  },
  {
    title: "Figli delle stelle e Artemisia",
    tag: "figlidellestellelab",
    desc: "Shortbus, un viaggio e un rifugio per creare connessioni colorate e differenti. Al sapore di glitter e veli che non nascondono ma lasciano in trasparenza la favolosa voglia di essere un3",
  },
  {
    title: "Uccelini Uccellacci",
    tag: "ucceliniuccellacci",
    desc: "Nato della voglia di condividere esperienze di ballo senza limiti e confini di genere, l’obiettivo è quello di far vivere ai fruitori un'esperienza sognante a ritmo di musica.",
  },
  {
    title: "Red Moon",
    tag: "red_moon_goa_psy_trance",
    desc: "Secondo antiche culture la Luna Rossa è presagio di cambiamento e chi si espone alla sua luce rischia di trasformarsi in una strega, un mago o uno spirito libero e nella notte incantesimi e magie moltiplicano il loro potere... Only Good Vibes! Only Good Energy!",
    instagram: "red_moon_goa_psy_trance",
  },
  {
    title: "Appel",
    tag: "gli_appel",
    desc: "Ospit3 fiss3 del Brescia Pride sin dalla prima edizione, i tamburi di Appel vi accoglieranno anche quest’anno in Piazza Vittoria, alla fine del corteo, per un altro momento di musica e ballo prima degli interventi dal palco. Loro promettono di far tremare la terra, che ditte, l3 mettiamo a prova?"
  }
]

const skeleton = (
  w,
  h
) => `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
<!-- Define a linear gradient for the fill -->
<defs>
  <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop stop-color="#E0E0E0" offset="0%" />
    <stop stop-color="#D0D0D0" offset="25%" />
    <stop stop-color="#C0C0C0" offset="50%" />
    <stop stop-color="#D0D0D0" offset="75%" />
    <animate attributeName="x1" from="0%" to="100%" dur="2s" repeatCount="indefinite" />
    <animate attributeName="x2" from="100%" to="200%" dur="2s" repeatCount="indefinite" />
  </linearGradient>
</defs>
<!-- Create a rounded rectangle with the smooth loading animation -->
<rect width="500" height="500" rx="20" ry="20" fill="url(#loadingGradient)" />
</svg>
`;
const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
export const getSkeleton = (w, h) => `data:image/svg+xml;base64,${toBase64(skeleton(w, h))}`;
export const googleMapLink = "https://www.google.com/maps/d/u/3/viewer?mid=1SyQZiHiyTqY5-DQeOM3ewWhC983hUXY&ll=45.53738069693484%2C10.223865291039047&z=15";
export const emergencyNumbers = [
  {
    name: "Gruppo Riduzione Rischi",
    phones: ["+39 335 211 298 (Valter)", "+39 328 269 1398 (Giovanni)"]
  },
  {
    name: "City Angels",
    phones: ["+39 340 929 6718 (Enrico)"]
  }
]