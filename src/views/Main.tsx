import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Loader, Text } from "components/atoms";
import { Header, Modal } from "components/moleculs";
import { Content } from "./component";
import { getData } from "api/mockData";
import { mockDataType, langType } from "types";
import i18n from "i18next";

import "./style.scss";

export default function Main() {
  const { t } = useTranslation();

  const [currentLang, setCurrentLang] = useState(i18n.language as langType);
  const [exhiditsData, setExhiditsData] = useState<mockDataType | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");

  useEffect(() => {
    if (exhiditsData === null) {
      const setData = async () => {
        try {
          const result = await getData();
          setExhiditsData(result);
        } catch (e: any) {
          console.log(e.message);
        }
      };
      setData();
    }
  }, [exhiditsData]);

  const showHideModal = (show: boolean, content?: string): void => {
    setShowModal(show);
    if (content) setModalContent(content);
  };

  return (
    <div data-testid="main">
      <Header
        onChangeLang={setCurrentLang}
        lang={currentLang as langType}
        identifier="header"
      />
      <div className="mfk-timeline--header">
        <Text type="title">{t("title")}</Text>
        <Text type="subtitle2">{t("description")}</Text>
      </div>
      {exhiditsData ? (
        <Content
          data={exhiditsData}
          currentLang={currentLang}
          onClickAction={showHideModal}
          identifier="content"
        />
      ) : (
        <Loader identifier="loader" />
      )}

      {showModal && (
        <Modal content={modalContent} onClose={() => showHideModal(false)} />
      )}
    </div>
  );
}
