import { useAtom } from "jotai";
import React from "react";
import { Link } from "react-router-dom";
import { isMobileAtom } from "../App";

export const Footer = () => {
  const [isMobile] = useAtom(isMobileAtom);
  return (
    <div
      style={{
        backgroundImage: `url(${require("../lib/images/Casual-seniors-441520.jpg")})`,
        backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "auto",
      }}
    >
      <footer
        style={{
          marginTop: isMobile ? undefined : 150,
          marginBottom: isMobile ? undefined : 200,
        }}
      >
        <p
          style={{
            fontFamily: "SuisseEDUIntlMedium",
            color: "#FFFFFF",
          }}
        >
          Ressources pratiques
        </p>
        <p>Quels sont les coûts en résidence privée</p>
        <p>Les types d'hébergement</p>
        <p>Avantages de déménager</p>
        <p>Something</p>
        <p>Something else</p>
        <p>Something else again</p>
        <Link
          to={"/ressources-utiles"}
          style={{
            fontSize: 18,
            letterSpacing: 0,
            color: "#FFFFFF",
            padding: "10px 15px",
            borderRadius: 10,
            border: "1px solid #FFFFFF",
          }}
        >
          Ressources utiles
        </Link>
      </footer>
    </div>
  );
};