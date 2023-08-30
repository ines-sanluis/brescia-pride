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

  const navLinks = [
    { title: "Il Corteo", href: "/", sublinks: [
      { title: "Percorso e Carri", href: "/percorso" },
      { title: "Accessibilità", href: "/accessibilita" },
      { title: "Cura", href: "/cura" },
      { title: "Interventi", href: "/interventi" },
      { title: "Festa in Carmine", href: "/festa" },
    ] },
    { title: "Chi siamo", href: "/about-us" },
    { title: "Manifesto", href: "/manifest" },
    { title: "Adesioni e Patrocini", href: "/supporters" },
    { title: "Contatto", href: "/contact" },
  ]
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
        {navLinks.map((link, index) => (
            <div key={index} className="link-container">
              <Link
                href={link.href}
                className={
                  currentRoute === link.href ? "link link-active" : "link"
                }
              >
                {link.title}
              </Link>
              {link.sublinks && isMenuOpen && (
                <ul className="sublinks">
                  {link.sublinks.map((sublink, subIndex) => (
                    <li key={subIndex}>
                      <Link 
                        href={sublink.href}
                        className={
                          currentRoute === sublink.href ? "sublink sublink-active" : "sublink"
                        }
                      >
                        {sublink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
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
        .link-container {
          width: 100%;
        }
        .link, .sublink {
          display: block;
          padding: var(--gutter2x);
          width: 100%;
          border-bottom: 1px solid var(--brown);
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
          padding-left: var(--gutter6x);
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
