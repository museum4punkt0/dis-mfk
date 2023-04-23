import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Text } from "components/atoms";
import { langType } from "types";

import "./style.scss";
import { useState } from "react";

export const Header = () => {
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem("lang") || "en"
  );
  //TODO: { [key in langType]: string }
  const langsData: any = {
    en: "English",
    de: "Deutsch",
  };

  const { t } = useTranslation();
  //TODO: Need to pu type langType
  const changeLang = (lang: string): void => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setCurrentLang(lang);
  };

  return (
    <div className="mfk-header">
      <div className="mfk-header--menu">
        {Object.keys(langsData).map((item, idx) => (
          <div
            key={`${item}_${idx}`}
            className={`mfk-header--menu-item ${
              currentLang === item ? "mfk-menu--active" : ""
            }`}
            onClick={() => changeLang(item)}
          >
            <Text type="subtitle">{langsData[item]}</Text>
          </div>
        ))}
      </div>
      <div className="mfk-header--content">
        <Text type="title">{t("title")}</Text>
        <Text>{t("description")}</Text>
      </div>
    </div>
  );
};
