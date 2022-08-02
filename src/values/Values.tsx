import { useAtom } from "jotai";
import React from "react";
import { isMobileAtom } from "../App";

const cardValues = [
  {
    title: "Toujours dans l'intérêt de nos ainés",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu tortor interdum, aliquet arcu sit amet, dignissim lectus. Sed convallis, augue sed porta accumsan, ",
  },
  {
    title: "Une approche humaine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu tortor interdum, aliquet arcu sit amet, dignissim lectus. Sed convallis, augue sed porta accumsan, quam libero efficitur ex.",
  },
  {
    title: "Conseils et lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu tortor interdum, aliquet arcu sit amet, dignissim lectus. Sed convallis, augue sed porta accumsan, quam libero efficitur ex, at posuere libero mauris ut diam. ",
  },
  {
    title: "Un service gratuit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu tortor interdum, aliquet arcu sit amet, dignissim lectus. Sed convallis, augue sed porta accumsan, quam libero efficitur ex, at posuere libero mauris ut diam. ",
  },
];

const Card = ({
  title,
  description,
}: {
  description: string;
  title: string;
}) => {
  const [isMobile] = useAtom(isMobileAtom);
  return (
    <div
      style={{
        backgroundColor: "#CCECEC",
        width: isMobile ? "calc(100% - 60px )" : "42%",
        padding: isMobile ? 30 : "3%",
        borderRadius: "10px",
        margin: "20px auto",
      }}
    >
      <h2
        style={{
          fontFamily: "SuisseEDUIntlMedium",
          fontWeight: isMobile ? "bold" : "normal",
          fontSize: isMobile ? 30 : undefined,
          paddingTop: 10,
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: isMobile ? 20 : undefined,
        }}
      >
        {description}
      </p>
    </div>
  );
};

export const Values = () => {
  const [isMobile] = useAtom(isMobileAtom);
  return (
    <aside
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <div
        style={{
          flex: 1,
        }}
      >
        <h2
          style={{
            marginTop: 10,
            marginBottom: 0,
            fontWeight: isMobile ? "bold" : "normal",
          }}
        >
          Les valeurs qui nous tiennent à coeur
        </h2>
        <p
          style={{
            fontSize: isMobile ? 20 : undefined,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
          tortor interdum, aliquet arcu sit amet, dignissim lectus. Sed
          convallis, augue sed porta accumsan, quam libero efficitur ex, at
          posuere libero mauris ut diam. Sed rutrum posuere dui fermentum
          placerat.
        </p>
      </div>
      <div
        style={{
          flex: isMobile ? 1 : 2,
          display: "flex",
          flexFlow: isMobile ? "column nowrap" : "row wrap",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        {cardValues.map((cardValue, index) => (
          <Card {...cardValue} key={index} />
        ))}
      </div>
    </aside>
  );
};