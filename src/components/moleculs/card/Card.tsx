import { useState } from "react";
import { Text, Avatar } from "components/atoms";
import { CardType } from "./type";

import emptyImage from "assets/empty.jpeg";
import "./style.scss";

export const Card = (props: CardType) => {
  const { title, description, type = 1 } = props;
  const cardWrapperClass = type === 1 ? "mfk-type-text" : "mfk-type-img";

  const [hideDescription, setHideDescription] = useState<boolean>(true);

  const showHideDescription = (): void => {
    setHideDescription((oldState) => !oldState);
  };

  return (
    <div
      className={`mfk-card-wrapper ${cardWrapperClass}`}
      onClick={
        type === 1
          ? showHideDescription
          : () => {
              alert(title);
            }
      }
    >
      <div className="mfk-timeline--content">
        <div className="mfk-card-title">
          {type === 1 && <Avatar />}
          <Text type="subtitle">{title}</Text>
        </div>
        {type === 1 ? (
          <Text
            additionalClass={`mfk-card--description ${
              hideDescription ? "mfk-hide--description" : ""
            }`}
          >
            {description}
          </Text>
        ) : (
          //TODO: move to scss
          <>
            <Text additionalClass={`mfk-card--description`}>{description}</Text>
            <div
              style={{
                background: `url(${emptyImage}) no-repeat  center/cover`,
              }}
              className="mfk-card--description-img"
            ></div>
          </>
        )}
      </div>
    </div>
  );
};
