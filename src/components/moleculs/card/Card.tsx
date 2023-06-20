import { useState } from "react";
import { Text, Avatar } from "components/atoms";
import { CardType } from "./type";

import "./style.scss";

export const Card = (props: CardType) => {
  const { id, date, title, description, type = 1, onClick, identifier } = props;
  const cardWrapperClass = type === 1 ? "mfk-type-text" : "mfk-type-img";

  const [hideDescription, setHideDescription] = useState<boolean>(true);

  const showHideDescription = (): void => {
    setHideDescription((oldState) => !oldState);
  };

  return (
    <div
      data-testid={identifier}
      className={`mfk-card-wrapper ${cardWrapperClass}`}
      onClick={type === 1 ? showHideDescription : onClick}
    >
      <div className="mfk-card--content">
        <div style={{ flex: 1 }}>
          <Text type="caption">{date}</Text>
          <Text type="subtitle1" additionalClass="mfk-card-title">
            {title}
          </Text>
          {type === 1 ? (
            <Text
              additionalClass={`mfk-card--description ${
                hideDescription ? "mfk-hide--description" : ""
              }`}
            >
              {description}
            </Text>
          ) : (
            <>
              <Text additionalClass={`mfk-card--description`}>
                {description}
              </Text>
              <div
                style={{
                  background: `url(assets/${id}.png) no-repeat  center/cover`,
                }}
                className="mfk-card--description-img"
              ></div>
            </>
          )}
        </div>
        {type === 1 && <Avatar />}
      </div>
    </div>
  );
};
