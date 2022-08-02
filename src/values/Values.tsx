import React from "react";

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
  return (
    <div
      style={{
        backgroundColor: "#CCECEC",
        width: "42%",
        padding: "3%",
        borderRadius: "10px",
        margin: "20px auto",
      }}
    >
      <h2
        style={{
          fontFamily: "SuisseEDUIntlMedium",
          paddingTop: 10,
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        {title}
      </h2>
      <p>{description}</p>
    </div>
  );
};

export const Values = () => {
  return (
    <aside style={{ display: "flex" }}>
      <div
        style={{
          flex: 1,
        }}
      >
        <h2
          style={{
            marginTop: 10,
            marginBottom: 0,
          }}
        >
          Les valeurs qui nous tiennent à coeur
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
          tortor interdum, aliquet arcu sit amet, dignissim lectus. Sed
          convallis, augue sed porta accumsan, quam libero efficitur ex, at
          posuere libero mauris ut diam. Sed rutrum posuere dui fermentum
          placerat.
        </p>
      </div>
      <div
        style={{
          flex: 2,
          display: "flex",
          flexFlow: "row wrap",
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