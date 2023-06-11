import { useTranslation } from "react-i18next";
import { Text } from "components/atoms";
import { BiChevronsDown } from "react-icons/bi";

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
        <Text type="title">{t("landing.title")}</Text>
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
