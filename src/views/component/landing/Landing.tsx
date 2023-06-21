import { useTranslation } from "react-i18next";
import { Text } from "components/atoms";
import { BiChevronsDown } from "react-icons/bi";

import logo from "assets/logo.svg";
import "animate.css";
import "./style.scss";

type Props = {
  /**
   * Action to hide landing content
   */
  onClickAction: () => void;
};

export const Landing = (props: Props) => {
  const { onClickAction } = props;

  const { t } = useTranslation();

  return (
    <div className="mfk-landing">
      <div className="mfk-landing--content">
        <div className="mfk-landing--logo">
          <img src={process.env.REACT_APP_API_PATH + logo} alt="landing-logo" />
        </div>
        <Text type="title" additionalClass="mfk-landing--title">
          {t("landing.title")}
        </Text>
        <div className="mfk-landing--description">
          <Text type="subtitle1">{t("landing.content")}</Text>
        </div>
      </div>
      <div className="mfk-landing--btn" onClick={onClickAction}>
        <BiChevronsDown />
      </div>
    </div>
  );
};
