import { useAtom } from "jotai";
import React, { useState } from "react";
import { isMobileAtom } from "../App";
import img5 from "../lib/images/20191115_193621.jpg";
import img3 from "../lib/images/CB-08812.jpg";
import img2 from "../lib/images/CB-09487.jpg";
import img4 from "../lib/images/Cheerful-creative-team-working-in-542481.jpg";
import img1 from "../lib/images/creativebox-fff-09233.jpg";
import img6 from "../lib/images/creativebox-fff-09233.jpg";
import { ReactComponent as CameraThin } from "../lib/svgs/camera-thin.svg";

interface ImageProps {
  src: string;
  alt: string;
}

const images: ImageProps[][] = [
  [
    {
      src: img1,
      alt: "Quatre personnes trinquant leurs canettes sur une plage",
    },
    {
      src: img2,
      alt: "Un groupe de personnes posant pour une photo dans un bureau",
    },
    {
      src: img3,
      alt: "Impression de l'arrière-train d'un lutin en peluche avec l'imprimante et ledit lutin placé dessus",
    },
  ],
  [
    {
      src: img4,
      alt: "Un groupe de personnes travaillant ensemble",
    },
    {
      src: img5,
      alt: "Deux personnes tenant un trophée",
    },
    {
      src: img6,
      alt: "Un pdf de la police principale du site",
    },
  ],
];
const Image = ({ src, alt }: ImageProps) => {
  const [isHover, setIsHover] = useState(false);
  const isMobile = useAtom(isMobileAtom);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        borderRadius: 10,
        width: isMobile ? "100%" : "30%",
        height: isMobile ? `calc(${window.screen.width}-60px)` : undefined,
        margin: "10px auto",
        position: "relative",
      }}
    >
      {isHover && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            width: isMobile ? "100%" : "90%",
            height: "99%",
            backgroundColor: "#35404EDD",
            borderRadius: 10,
            inset: 0,
            color: "white",
            justifyContent: "flex-end",
          }}
        >
          <CameraThin
            style={{
              width: 50,
              height: 50,
              marginLeft: 25,
            }}
          />
          <p
            style={{
              fontSize: 30,
              margin: "40px 25px 25px 25px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      )}
      <img
        style={{
          borderRadius: 10,
          width: isMobile ? "100%" : "90%",
          height: "100%",
        }}
        src={src}
        alt={alt}
      />
    </div>
  );
};
export const Gallery = () => {
  const [isMobile] = useAtom(isMobileAtom);
  return (
    <div
      style={{
        backgroundColor: "#F0F0F0",
        width: "100%",
        paddingBottom: 100,
      }}
    >
      <aside>
        <h2
          style={{
            paddingTop: isMobile ? undefined : 50,

            textAlign: "center",
          }}
        >
          Bonjour Résidences en images
        </h2>
        {images.map((row, i) => {
          if (isMobile && !!i) return undefined;
          return (
            <div
              key={i}
              style={
                isMobile
                  ? {
                      width: "100%",
                    }
                  : {
                      ...shouldBeToTheLeft(i),

                      display: "flex",
                      width: "75%",
                    }
              }
            >
              {row.map((image, j) => (
                <Image key={j} src={image.src} alt={image.alt} />
              ))}
            </div>
          );
        })}
      </aside>
    </div>
  );
};

function shouldBeToTheLeft(
  indexOfRow: number
): React.CSSProperties | undefined {
  if (indexOfRow % 2 === 0) {
    return {
      alignItems: "flex-end",
      justifyContent: "flex-start",
    };
  } else {
    return {
      float: "right",
      alignItems: "flex-start",
      justifyContent: "flex-end",
    };
  }
}