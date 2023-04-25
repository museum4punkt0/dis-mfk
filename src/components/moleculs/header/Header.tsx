import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Text, Dropdown } from "components/atoms";
import { langType } from "types";
import { langsData, dropdownLangOptions } from "./helpers";

import "./style.scss";

export const Header = () => {
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem("lang") || "en"
  );

  const { t } = useTranslation();

  const changeLang = (lang: langType): void => {
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
            onClick={() => changeLang(item as langType)}
          >
            <Text type="subtitle">
              {langsData[item as keyof typeof langsData]}
            </Text>
          </div>
        ))}
        <Dropdown
          data={dropdownLangOptions}
          value={currentLang}
          handleChange={(e) => changeLang(e.target.value as langType)}
        />
      </div>
      <div className="mfk-header--content">
        <Text type="title">{t("title")}</Text>
        <Text>{t("description")}</Text>
      </div>
    </div>
  );
};
