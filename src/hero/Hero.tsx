import { useAtom } from "jotai";
import React from "react";
import { Link } from "react-router-dom";
import { isMobileAtom } from "../App";
import { ReactComponent as PlayButton } from "../lib/svgs/circle-play-solid.svg";

const links = [
  {
    to: "/l-equipe",
    text: "L'équipe",
  },
  {
    to: "/nos-services",
    text: "Nos services",
  },
];

export const Hero = () => {
  const [isMobile] = useAtom(isMobileAtom);
  return (
    <main
      style={{
        display: isMobile ? "flex" : "block",
        flexDirection: "column",
        marginTop: isMobile ? 100 : "auto",
      }}
    >
      <p
        style={{
          color: isMobile ? "#000000" : "#767776",
          paddingTop: isMobile ? 50 : "auto",
        }}
      >
        À propos
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
        }}
      >
        <div
          style={{
            width: isMobile ? "100%" : "50%",
          }}
        >
          <h1
            style={{
              paddingTop: 0,
              marginTop: isMobile ? 30 : 0,
              position: isMobile ? "static" : "relative",
              top: "-10px",
            }}
          >
            Bienvenue chez
            <br />
            Bonjour Résidences
          </h1>
          <p
            className={"highligted"}
            style={{
              fontFamily: "SuisseEDUIntlLight",
              paddingRight: isMobile ? 0 : 30,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pulvinar, ligula sit amet convallis facilisis, purus nunc aliquet
            dolor, eget gravida dolor nibh eget mauris. Cras leo quam, pulvinar
            non quam id, mollis placerat arcu. Praesent convallis sit amet quam
            et tincidunt. Ut dictum eu turpis eu fermentum.
          </p>
          <div
            style={{
              width: "fit-content",
            }}
          >
            <p
              className={"highlighted"}
              style={{
                fontStyle: "bold",
                fontFamily: "SuisseEDUIntl",
                fontSize: isMobile ? 24 : undefined,
                paddingBottom: isMobile ? 0 : 20,
              }}
            >
              Découvrez également :
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: isMobile ? 50 : undefined,
              }}
            >
              {links.map(({ to, text }, index) => (
                <Link
                  key={index}
                  to={to}
                  style={{
                    backgroundColor: "#F0F0F0",
                    borderRadius: "50px",
                    color: "#000000",
                    textDecoration: "none",
                    padding: "9px 20px",
                    fontSize: "16",
                    letterSpacing: 0,
                  }}
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <HeroVideo />
      </div>
    </main>
  );
};

const HeroVideo = () => {
  const [isMobile] = useAtom(isMobileAtom);
  return (
    <div
      style={{
        width: isMobile ? "100%" : "50%",
      }}
    >
      <img
        src={require("../lib/images/CB-06189.jpg")}
        style={{
          width: "100%",
          borderRadius: "30px",
          objectFit: "contain",
        }}
        alt={"Video"}
      />
      <PlayButton
        style={{
          position: "relative",
          bottom: "100",
          left: "5%",
          cursor: "pointer",
          width: 50,
          height: 50,
        }}
      />
    </div>
  );
};