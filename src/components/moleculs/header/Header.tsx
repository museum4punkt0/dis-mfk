import { Text } from "components/atoms";

import "./style.scss";

export const Header = () => {
  return (
    <div className="mfk-header">
      <div>Navigation menu</div>
      <div className="mfk-header--content">
        <Text type="title">MEILENSTEINE DER TECHNIK</Text>
        <Text>
          Zahlreiche physikalische und technische Entdeckungen und Erfindungen
          haben unsere heutige Art der Kommunikation entschieden vorangebracht.
        </Text>
      </div>
    </div>
  );
};
