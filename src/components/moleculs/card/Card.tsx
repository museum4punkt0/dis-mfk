import { Text } from "components/atoms";

import "./style.scss";

type Props = {
  /**
   * Type
   */
  type: 1 | 2 | number;
  /**
   * Date value
   */
  date: string;
  /**
   * Title value
   */
  title: string;
  /**
   * Description value
   */
  description: string;
};

export const Card = (props: Props) => {
  const { date, title, description, type = 1 } = props;
  const cardWrapperClass = type === 1 ? "mfk-type-text" : "mfk-type-img";
  return (
    <div className={`mfk-card-wrapper ${cardWrapperClass}`}>
      <div className="mfk-timeline--content">
        <Text type="caption" additionalClass="mfk-timeline--date">
          {date}
        </Text>
        <Text type="subtitle">{title}</Text>
        <Text>{description}</Text>
      </div>
    </div>
  );
};
