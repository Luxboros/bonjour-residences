import { atom, useAtom } from "jotai";
import { CSSProperties, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { isMobileAtom } from "../App";
import { ReactComponent as Cross } from "../lib/svgs/icons8-close.svg";
import { ReactComponent as Hamburger } from "../lib/svgs/icons8-menu.svg";
import { Logo } from "./Logo";

const isOpenAtom = atom(false);
const links = [
  {
    to: "/rechercher-residences",
    label: "Rechercher résidences",
  },
  {
    to: "/services",
    label: "Services",
  },
  {
    to: "/ressources-utiles",
    label: "Ressources utiles",
  },
  {
    to: "/a-propos",
    label: "À propos",
  },
];

function Menu({ isMobile }: { isMobile: boolean }) {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  return (
    <button
      style={{
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        float: "right", // width: isMobile ? "100%" : "auto",
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <Cross /> : <Hamburger />}
    </button>
  );
}

export const Header = () => {
  const [isMobile] = useAtom(isMobileAtom);
  const [isOpen] = useAtom(isOpenAtom);
  return (
    <>
      <header
        style={{
          position: isMobile ? "fixed" : "static",
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "space-between" : "inherit",
          borderBottom: "1px solid #d6dadc",
          backgroundColor: "#FFFFFF",
          height: isMobile ? 80 : "auto",
          width: "100%",
          zIndex: 100,
        }}
      >
        <Logo />
        {isMobile ? <Menu isMobile /> : <Navigation />}
      </header>
      {isOpen && <Navigation />}
    </>
  );
};

export const HeaderLink = (link: { to: string; label: string }) => {
  const { to, label } = link;
  const { pathname } = useLocation();
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(pathname === to);
  }, [pathname]);
  return (
    <Link
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...{ to }}
      style={{
        color: isHover || isActive ? "#B81D8D" : "#1A1C1B",
        textDecoration: "none",
        fontSize: 20,
        padding: 10,
        letterSpacing: "0.05em",
      }}
    >
      {label}
    </Link>
  );
};

export const Navigation = () => {
  const [isOpen] = useAtom(isOpenAtom);
  const styleForMobile = (bool: boolean): CSSProperties => {
    return bool
      ? {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          position: "fixed",
          top: 70,
          left: 0,
          width: "100%",
          height: "auto",
          backgroundColor: "#FFFFFF",
          zIndex: 100,
        }
      : {};
  };
  return (
    <nav style={{ ...styleForMobile(isOpen) }}>
      {links.map((link, index) => (
        <HeaderLink key={index} {...link} />
      ))}
    </nav>
  );
};