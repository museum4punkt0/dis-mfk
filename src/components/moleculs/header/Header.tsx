import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Text, Dropdown } from "components/atoms";
import { langType, ComponentProps } from "types";
import { langsData, dropdownLangOptions } from "./helpers";

import "./style.scss";

type Props = {
  /**
   * Action for changing language
   */
  onChangeLang: (lang: langType) => void;
  /**
   * Selected language
   */
  lang: langType;
} & ComponentProps;

export const Header = (props: Props) => {
  const { lang, onChangeLang, identifier } = props;

  const { t } = useTranslation();

  const changeLang = (lang: langType): void => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    onChangeLang(lang);
  };

  return (
    <div className="mfk-header" data-testid={identifier}>
      <Text type="subtitle">{t("logo")}</Text>
      <div className="mfk-header--menu">
        {Object.keys(langsData).map((item, idx) => (
          <div
            key={`${item}_${idx}`}
            className={`mfk-header--menu-item ${
              lang === item ? "mfk-menu--active" : ""
            }`}
            onClick={() => changeLang(item as langType)}
          >
            <Text type="subtitle">
              {langsData[item as keyof typeof langsData]}
            </Text>
          </div>
        ))}
        <Dropdown
          data={dropdownLangOptions}
          value={lang}
          handleChange={(e) => changeLang(e.target.value as langType)}
        />
      </div>
    </div>
  );
};
