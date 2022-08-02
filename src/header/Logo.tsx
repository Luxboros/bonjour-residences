import { ReactComponent as BonjourResidencesLogo } from "../lib/svgs/LOGOS-BONJOUR-RESIDENCES-2021-03.svg";

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