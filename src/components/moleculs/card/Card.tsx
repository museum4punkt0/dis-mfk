import { useState } from "react";
import { Text, Avatar } from "components/atoms";
import { CardType } from "./type";

import "./style.scss";

export const Card = (props: CardType) => {
  const { date, title, description, type = 1 } = props;
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
        <Text type="caption" additionalClass="mfk-timeline--date">
          {date}
        </Text>
        <div className="mfk-card-title">
          {type === 1 && <Avatar />}
          <Text type="subtitle">{title}</Text>
        </div>
        {type === 1 ? (
          <Text
            additionalClass={`mfk-card--description ${
              !hideDescription ? "mfk-show--description" : ""
            }`}
          >
            {description}
          </Text>
        ) : (
          //TODO: move to scss
          <div
            style={{
              height: "200px",
              background: `url('https://bit.ly/3hLadSX') no-repeat  center/cover`,
              borderRadius: 34,
              margin: "0 -20px -10px",
            }}
          ></div>
        )}
      </div>
    </div>
  );
};
