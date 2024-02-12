import Social from "./social";

export const Footer = () => {
  const emails = {
    info: "info@bresciapride.it",
    legal: "comitatobresciapride@pec-legal.it"
  }
  const securityNumber = "98201800178"
  return (
    <>
    <footer className="flex justify-between py-4 text-gray-500">
      <section>
        <p>
          Comitato Brescia Pride ETS
        </p>
        <address>
          Via F.lli Folonari 7, 25126 Brescia (BS)
        </address>
        <section className="footer-details">
        <p>
          Email: <a href={`mailto:${emails.info}`}>{emails.info}</a>
        </p>
        <p>
          PEC: <a href={`mailto:${emails.legal}`}>{emails.legal}</a>
        </p>
        <p>CF. {securityNumber}</p>
      </section>
      </section>
      <section>
        <Social
          instagram={"bresciapride"}
          facebook={"BresciaPride"}
        />
      </section>
    </footer>
    <p className="text-center text-[7px] px-8 py-8 text-gray-500">
      Fatto da <a
        href="https://linkedin.com/in/ines-sanluis"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="underline"
        >
        Inés San Luís
      </a> 💚 </p>
    </>
  );
};

