import React, { useState, useEffect } from "react";
import { title } from "../../utils/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowDown from "../Icons/ArrowDown";
import ArrowUp from "../Icons/ArrowUp";

export default function NavBar() {
  const [showBackground, setShowBackground] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resized, setResized] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentRoute = useRouter().pathname;
  const [showCorteo, setShowCorteo] = useState(false);

  const expandCorteo = () => {
    setShowCorteo(!showCorteo);
  }

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

  const links = {
    HOME: {
      title: "Home",
      href: "/",
    },
    ABOUT_US: {
      title: "Chi siamo",
      href: "/chi-siamo",
    },
    MANIFEST: {
      title: "Manifesto",
      href: "/manifesto",
    },
    SUPPORTERS: {
      title: "Adesioni e Patrocini",
      href: "/adesioni",
    },
    CONTACT: {
      title: "Contatto",
      href: "/contatto",
    },
    CORTEO: {
      title: "Il Corteo",
      href: "/",
      sublinks: [
        { title: "Percorso e Carri", href: "/percorso" },
        { title: "Accessibilità", href: "/accessibilita" },
        { title: "Cura", href: "/cura" },
        { title: "Interventi", href: "/interventi" },
        { title: "Festa in Carmine", href: "/festa" },
      ]
    }
  }

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
        <div className="link-wrapper">
          <Link
            href={links.HOME.href}
            className={
              currentRoute === links.HOME.href ? "link link-active" : "link"
            }
          >
            {links.HOME.title}
          </Link>
        </div>
        <div className="link-container" onClick={expandCorteo}>
          <div className="link-wrapper">
            <span className="link">{links.CORTEO.title}</span>
            {showCorteo ? <ArrowUp color="yellow" size="2rem" /> : <ArrowDown color="text-color" size="2rem"/>}
          </div>
        </div>
        {showCorteo && <div className="sublinks">
        {links.CORTEO.sublinks.map((link) => (
          <div className="sublink-wrapper">
            <Link
              href={link.href}
              className={
                currentRoute === link.href ? "sublink sublink-active" : "sublink"
              }
            >
              {link.title}
            </Link>
          </div>
        ))}
        </div>}
        <div className="link-wrapper">
          <Link
            href={links.MANIFEST.href}
            className={
              currentRoute === links.MANIFEST.href ? "link link-active" : "link"
            }
          >
            {links.MANIFEST.title}
          </Link>
        </div>
        <div className="link-wrapper">
          <Link
            href={links.ABOUT_US.href}
            className={
              currentRoute === links.ABOUT_US.href ? "link link-active" : "link"
            }
          >
            {links.ABOUT_US.title}
          </Link>
        </div>
        <div className="link-wrapper">
          <Link
            href={links.SUPPORTERS.href}
            className={
              currentRoute === links.SUPPORTERS.href ? "link link-active" : "link"
            }
          >
            {links.SUPPORTERS.title}
          </Link>
        </div>
        <div className="link-wrapper">
          <Link
            href={links.CONTACT.href}
            className={
              currentRoute === links.CONTACT.href ? "link link-active" : "link"
            }
          >
            {links.CONTACT.title}
          </Link>
        </div>
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
          transition: opacity 0.2s ease-in-out;
          background: var(--white);
          width: 100%;
        }
        .link-wrapper {
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: var(--gutter2x);
          border-bottom: 1px solid var(--text-color);
        }
        .link-wrapper:hover {
          color: var(--yellow);
          background-color: var(--brown);
        }
        .link-wrapper:hover .link {
          color: var(--yellow);
        }
        .sublinks {
          border-bottom: 1px solid var(--text-color);
        }
        .link-container {
          width: 100%;
        }
        .link {
          font-family: ST;
        }
        .link, .sublink {
          display: block;
          padding: var(--gutter2x);
          width: 100%;
          text-decoration: none;
        }
        .link:hover,
        .sublink:hover {
          transition: transform 0.2s ease-in-out;
        }
        .link-active,
        .sublink-active {
          text-decoration: underline;
        }
        .sublink {
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: -0.7px;
        }
        .sublink:hover {
          color: var(--yellow);
          background-color: var(--brown);
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
