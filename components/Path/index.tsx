import React from "react";
import Image from "next/image";
import Button from "../Button";
import { googleMapLink } from "../../utils/constants";

export default function Path() {

  return (
    <>
      <div className="path">
        <Image
          className="pathImg"
          src="/corteo.png"
          alt="Partenza e Arrivo in Piazza Vittoria, Via Musei, Piazza Tebaldo, Via Spalto S. Marco"
          width={500}
          height={500}
          style={{
            zIndex: 1,
            borderRadius: "var(--border-radius)",
            objectFit: "cover",
            maxWidth: "100%", // Ensure the image doesn't exceed its container
          }}
        />
        <div>
          <p>3,2 km</p>
          <p>2 ore</p>
        </div>
      </div>
      <Button
        text="Apri su Google Maps"
        onClick={() => window.open(googleMapLink, "_blank")}
        color="brown"
        hoverColor="yellow"
        width="200px"
      />
      <style jsx>{`
        .path {
          align-self: center;
          position: relative;
        }
        .path > div {
          position: absolute;
          bottom: 0;
          right: 0;
          color: var(--brown);
        }
        .path > div > p {
          font-family: "ST";
          font-weight: bold;
          margin: var(--gutter);
        }
      `}</style>
    </>
  );
}
