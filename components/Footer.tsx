import React from "react";
import {
  headquarters,
  officialName,
  emails,
  securityNumber,
} from "../utils/constants";
import SocialLinks from "./SocialLinks";
import { socialLinks } from "../utils/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <address>
        <p>
          <strong>{officialName}</strong>
        </p>
        <p>{headquarters}</p>
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
      <SocialLinks links={socialLinks} />
      <div className="credits">
        <p>
          Fatto da  <a
            href="https://linkedin.com/in/ines-sanluis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            >
            Inés San Luís
          </a>
        </p>
        <p>
          <a
            href="https://github.com/ines-sanluis/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </p>
      </div>
      <style jsx>{`
        footer {
          background-color: var(--white);
          border-top: 1px solid var(--text-color);
        }
        .footer-details {
          display: flex;
          flex-direction: column;
          gap: 0;
          font-style: italic;
          margin-top: var(--gutter);
          margin-bottom: var(--gutter2x);
        }
        .credits {
          margin-top: var(--gutter10x);
          font-size: 0.8rem;
          text-color: var(--gray);
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: var(--half-gutter);
        }
      `}</style>
    </footer>
  );
}
