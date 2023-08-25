import React from "react";
import { 
  headquarters,
  officialName,
  emails,
  securityNumber
} from "../utils/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <address>
        <p><strong>{officialName}</strong></p>
        <p>{headquarters}</p>
      </address>
      <section className="footer-details">
        <p>Email: <a href={`mailto:${emails.info}`}>{emails.info}</a></p>
        <p>PEC: <a href={`mailto:${emails.legal}`}>{emails.legal}</a></p>
        <p>CF. {securityNumber}</p>
      </section>
      <style jsx>{`
        .footer-details {
          display: flex;
          flex-direction: column;
          gap: 0;
          font-style: italic;
          margin-top: var(--gutter);
          margin-bottom: var(--gutter3x);
        }
      `}</style>
    </footer>
  );
}
