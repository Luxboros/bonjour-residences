import { useAtom } from "jotai";
import React from "react";
import { Link } from "react-router-dom";
import { isMobileAtom } from "../App";
import { ReactComponent as Arrow } from "../lib/svgs/arrow-right-long-thin.svg";

export const QuoteBox = () => {
  const [isMobile] = useAtom(isMobileAtom);
  return (
    <div
      id={"quotebox"}
      style={{
        position: "relative",
        display: isMobile ? "flex" : undefined,
        flexDirection: isMobile ? "column" : undefined,
        textAlign: isMobile ? "center" : undefined,
        marginBottom: 200,
      }}
    >
      <img
        src={require("../lib/images/Portraits-14.jpg")}
        alt={`Portrait de Philippe Girard`}
        style={{
          borderRadius: 99999,
          position: "absolute",
          height: isMobile ? "auto" : "80%",
          width: isMobile ? "50%" : undefined,
          bottom: isMobile ? undefined : 0,
          left: isMobile ? "25%" : undefined,
          margin: isMobile ? "0 auto" : undefined,
          objectFit: isMobile ? "contain" : "cover",
        }}
      />
      <div
        style={{
          backgroundColor: "#99D9DA",
          borderRadius: isMobile ? 10 : 1000,
          paddingRight: isMobile ? undefined : 25,
          paddingLeft: isMobile ? undefined : 75,
          paddingTop: isMobile ? "25%" : undefined,
          paddingBottom: isMobile ? "10%" : undefined,
          width: isMobile ? "100%" : "70%",
          margin: isMobile ? undefined : "0 8.33% 0 16.66%",
          marginTop: isMobile ? "30%" : undefined,
        }}
      >
        <p
          style={{
            fontSize: 25,
            fontFamily: "SuisseEDUIntlMedium",
            letterSpacing: 0,
            paddingTop: isMobile ? undefined : 50,
            paddingLeft: isMobile ? undefined : 75,
          }}
        >
          PHILIPPE GIRARD{" "}
          {isMobile ? (
            <br />
          ) : (
            <span
              style={{
                fontSize: 16,
              }}
            >
              |
            </span>
          )}{" "}
          <span style={{ fontFamily: "SuisseEDUIntl" }}>Cofondateur</span>
        </p>

        <h2
          style={{
            paddingLeft: isMobile ? undefined : 75,
            paddingBottom: isMobile ? undefined : 50,
            padding: isMobile ? "0 50px" : undefined,
          }}
        >
          Saviez-vous que 40% de nos clients trouvent leur résidence en moins de{" "}
          <span
            style={{
              fontWeight: isMobile ? "bold" : undefined,
            }}
          >
            4 heures
          </span>
        </h2>

        <Link
          to={"/l-equipe"}
          style={{
            position: isMobile ? "static" : "absolute",
            letterSpacing: isMobile ? 0 : undefined,
            right: 0,
            bottom: 75,
            color: "#000000",
            fontSize: isMobile ? 24 : 30,
            paddingRight: 0,
            marginRight: 0,
          }}
        >
          Découvrez notre équipe
          {!isMobile && (
            <Arrow
              style={{
                height: 50,
                position: "relative",
                top: 15,
              }}
            />
          )}
        </Link>
      </div>
    </div>
  );
};