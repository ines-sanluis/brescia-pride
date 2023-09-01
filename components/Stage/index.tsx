import React from "react";
import Image from "next/image";


export default function Stage() {

  return (
    <>
      <div className="path">
        <Image
          className="pathImg"
          src="/stage.png"
          alt="Per garantire l’accessibilità del percorso di questa edizione abbiamo previsto"
          width={500} // Adjust the width and height as per your requirements
          height={500}
          style={{
            zIndex: 1,
            borderRadius: "var(--border-radius)",
            objectFit: "cover",
            maxWidth: "100%", // Ensure the image doesn't exceed its container
          }}
        />
        <div className="stage-legend">
          <p>
            <span className="circle-pink">Palco</span>
            <span>Per gli interventi.</span>
          </p>
          <p>
            <span className="circle-blue">Zona Blu</span>
            <span>Sottopalco.</span>
            <span>Per chi è in sedia a ruote o chi ha necessità di trovarsi nelle vicinanze del palco per fruire meglio dell'interpretariato LIS.</span>
          </p>
          <p>
            <span className="circle-yellow">Zona Gialla</span>
            <span>Lato palco.</span>
            <span>Per famiglie e passeggini, in cui è possibile distaccarsi dalla massa. Con attività per bambinз a cura di
Famiglie Arcobaleno.</span>
          </p>
          <p>
            <span className="circle-white">Zona Bianca</span>
            <span>Lato destro vicino ai portici e al banchetto.</span>
            <span>Per garantire a chi ne abbia la necessità di poter seguire gli interventi senza rischiare iperstimolazione, sarà presente anche durante il Corteo.</span>
          </p>
        </div>

      </div>
      <style jsx>{`
        .stage-legend {
          display: flex;
          flex-direction: column;
          gap: var(--gutter2x);
        }
        .stage-legend > p {
          display: flex;
          flex-direction: column;
        }
        .stage-legend > p > span:first-child {
          font-weight: 600;
        }
        .stage-legend > p > span:nth-child(2),
        .stage-legend > p > span:nth-child(3) {
          margin-left: calc(1.2rem + var(--gutter));
          margin-bottom: var(--gutter);
        }
        .circle-pink::before,
        .circle-blue::before,
        .circle-yellow::before,
        .circle-white::before
        {
          content: "";
          display: inline-block;
          height: 1rem;
          width: 1rem;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: var(--gutter);
        }
        .circle-pink::before {
          background-color: var(--pink);
          border: 1.5px solid var(--red);
        }
        .circle-blue::before {
          background-color: var(--blue-light);
          border: 1.5px solid var(--blue);
        }
        .circle-yellow::before {
          background-color: var(--yellow);
          border: 1.5px solid var(--brown);
        }
        .circle-white::before {
          background-color: var(--white);
          border: 1.5px solid var(--text-color);
        }
      `}</style>
    </>
  );
}
