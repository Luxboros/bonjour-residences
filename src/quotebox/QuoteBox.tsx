import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../lib/svgs/arrow-right-long-thin.svg";

export const QuoteBox = () => {
  return (
    <div
      id={"quotebox"}
      style={{
        position: "relative",
        marginBottom: 200,
      }}
    >
      <img
        src={require("../lib/images/Portraits-14.jpg")}
        alt={`Portrait de Philippe Girard`}
        style={{
          borderRadius: 99999,
          position: "absolute",
          height: "80%",
          bottom: 0,
        }}
      />
      <div
        style={{
          backgroundColor: "#99D9DA",
          borderRadius: 1000,
          paddingRight: 25,
          paddingLeft: 75,
          width: "70%",
          margin: "0 8.33% 0 16.66%",
        }}
      >
        <p
          style={{
            fontSize: 25,
            fontFamily: "SuisseEDUIntlMedium",
            letterSpacing: 0,
            paddingTop: 50,
            paddingLeft: 75,
          }}
        >
          PHILIPPE GIRARD{" "}
          <span
            style={{
              fontSize: 16,
            }}
          >
            |
          </span>{" "}
          <span style={{ fontFamily: "SuisseEDUIntl" }}>Cofondateur</span>
        </p>

        <h2
          style={{
            paddingLeft: 75,
            paddingBottom: 50,
          }}
        >
          Saviez-vous que 40% de nos clients trouvent leur résidence en moins de
          4 heures
        </h2>

        <Link
          to={"/l-equipe"}
          style={{
            position: "absolute",
            right: 0,
            bottom: 75,
            color: "#000000",
            fontSize: 30,
            paddingRight: 0,
            marginRight: 0,
          }}
        >
          Découvrez notre équipe
          <Arrow
            style={{
              height: 50,
              position: "relative",
              top: 15,
            }}
          />
        </Link>
      </div>
    </div>
  );
};