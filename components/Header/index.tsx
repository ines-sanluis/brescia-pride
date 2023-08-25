import React, { useState, useEffect } from "react";
import { title } from "../../utils/constants";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const [showBackground, setShowBackground] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resized, setResized] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentRoute = useRouter().pathname;

  useEffect(() => {
    setShowBackground(scrolled || resized);
  }, [scrolled, resized]);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const handleResize = () => {
    setResized(window.innerHeight < 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <div>
          <h1>{title}</h1>
          <div className="hamburguer-container">
            <div
              className={`hamburger ${isMenuOpen ? "open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <nav>
          <Link
            href="/"
            className={currentRoute === "/" ? "link link-active" : "link"}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={
              currentRoute === "/about-us" ? "link link-active" : "link"
            }
          >
            Chi siamo
          </Link>
          <Link
            href="/manifest"
            className={
              currentRoute === "/manifest" ? "link link-active" : "link"
            }
          >
            Manifesto
          </Link>
          <Link
            href="/supporters"
            className={
              currentRoute === "/supporters" ? "link link-active" : "link"
            }
          >
            Adesioni e Patrocini
          </Link>
          <Link
            href="/contact"
            className={
              currentRoute === "/contact" ? "link link-active" : "link"
            }
          >
            Contatto
          </Link>
        </nav>
      </header>
      {/* Move your CSS to an external stylesheet for better separation */}
      <style jsx global>{`
        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        header > div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background-color: ${showBackground || isMenuOpen
            ? "var(--white)"
            : "transparent"};
          border-bottom: ${showBackground || isMenuOpen
            ? "1px solid var(--text-color)"
            : "none"};
          transition: all 0.2s ease-in-out;
        }
        header > div > h1 {
          padding: var(--gutter2x);
        }
        nav {
          display: ${isMenuOpen ? "flex" : "none"};
          pointer-events: ${isMenuOpen ? "all" : "none"};
          flex-direction: column;
          font-family: ST;
          transition: opacity 0.2s ease-in-out;
          background: var(--white);
          width: 100%;
        }
        .link {
          padding: var(--gutter2x);
          width: 100%;
          border-bottom: 1px solid var(--brown);
          text-decoration: none;
        }
        .link:hover {
          transition: transform 0.2s ease-in-out;
        }
        .link:nth-child(1):hover,
        .link:nth-child(5):hover {
          background-color: var(--brown);
          color: var(--yellow);
        }
        .link:nth-child(2):hover {
          background-color: var(--red);
          color: var(--pink);
        }
        .link:nth-child(3):hover {
          background-color: var(--blue);
          color: var(--pink);
        }
        .link:nth-child(4):hover {
          background-color: var(--green);
          color: var(--purple);
        }
        .link-active {
          text-decoration: underline;
        }
        .link-active:nth-child(1),
        .link-active:nth-child(5) {
          color: var(--brown);
        }
        .link-active:nth-child(2) {
          color: var(--red);
        }
        .link-active:nth-child(3) {
          color: var(--blue);
        }
        .link-active:nth-child(4) {
          color: var(--green);
        }
        .hamburguer-container {
          padding: var(--gutter);
        }
        .hamburger {
          display: flex;
          flex-direction: column;
          gap: var(--half-gutter);
          cursor: pointer;
        }
        .bar {
          width: var(--gutter6x);
          height: var(--half-gutter);
          background-color: #333;
          margin: var(--half-gutter) 0;
          transition: transform 0.2s ease-in-out;
          transform-origin: center;
        }

        .open .bar:first-child {
          transform: translateY(16px) rotate(45deg);
        }

        .open .bar:nth-child(2) {
          transform: scaleX(0);
        }

        .open .bar:last-child {
          transform: translateY(-15px) rotate(-45deg);
        }
      `}</style>
    </>
  );
}
