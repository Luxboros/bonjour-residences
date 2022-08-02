import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as BonjourResidencesLogo } from "../lib/svgs/LOGOS-BONJOUR-RESIDENCES-2021-03.svg";

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

export const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #d6dadc",
      }}
    >
      <Logo />
      <Navigation />
    </header>
  );
};

export const Logo = () => {
  return (
    <BonjourResidencesLogo
      style={{
        maxWidth: 200,
        width: "10%",
        padding: "15 30",
        minWidth: 100,
        maxHeight: 60,
        height: 60,
        marginRight: 100,
      }}
    />
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
  return (
    <nav>
      {links.map((link, index) => (
        <HeaderLink key={index} {...link} />
      ))}
    </nav>
  );
};