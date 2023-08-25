import React from "react";
import PageLayout from "../components/PageLayout";
import { emails, socialLinks } from "../utils/constants";
import SocialLinks from "../components/SocialLinks";

export default function Contact() {
  return (
    <>
      <PageLayout title="Contattaci">
        <section aria-label="Chiacchiera con noi">
          <h2>Chiacchiera con noi</h2>
          <p>Il nostro team è qui per te!</p>
          <ul>
            <li>
              <strong>Info </strong>
              <a href={`mailto:${emails.info}`}>{emails.info}</a>
            </li>
            <li>
              <strong>Amministrazione </strong>
              <a href={`mailto:${emails.admin}`}>{emails.admin}</a>
            </li>
            <li>
              <strong>Stampa </strong>
              <a href={`mailto:${emails.press}`}>{emails.press}</a>
            </li>
          </ul>
        </section>

        <section aria-label="Proponici un evento">
          <h2>Proponici un evento</h2>
          <p>
            Hai quell’idea che proprio non potrebbe mancare nel nostro
            calendario? Inviaci una mail.
          </p>
          <ul>
            <li>
              <strong>Eventi</strong>
              <a href={`mailto:${emails.events}`}>{emails.events}</a>
            </li>
          </ul>
        </section>

        <section aria-label="Seguici sui social">
          <h2>Seguici sui social</h2>
          <p>Rimane aggiornato sui nostri prossimi eventi.</p>
          <SocialLinks links={socialLinks} />
        </section>
      </PageLayout>
      <style jsx>{`
        h2 {
          color: var(--brown);
        }
      `}</style>
    </>
  );
}
