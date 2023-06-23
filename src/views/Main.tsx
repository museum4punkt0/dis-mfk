import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

import { Loader, Text } from "components/atoms";
import { Header, Modal } from "components/moleculs";
import { Landing, Content } from "./component";

import { getData } from "api/mockData";
import { mockDataType, langType } from "types";

import "./style.scss";

export default function Main() {
  const { t } = useTranslation();

  const [currentLang, setCurrentLang] = useState(i18n.language as langType);
  const [exhiditsData, setExhiditsData] = useState<mockDataType | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [hideLanding, setHideLanding] = useState<boolean>(
    JSON.parse(localStorage.getItem("mfkVisit") || "false")
  );
  //TODO: Need to add correct data type insted of any
  const [modalContent, setModalContent] = useState<any>({});

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

  //TODO: Need to add correct data type insted of any, same as on line 23
  const showHideModal = (show: boolean, content?: any): void => {
    setShowModal(show);
    if (content) setModalContent(content);
  };

  const onHideLanding = () => {
    //TODO: Uncomment it after getting design
    localStorage.setItem("mfkVisit", "true");
    setHideLanding(true);
  };

  return (
    <div
      className={`${hideLanding ? "" : "mfk-first-visit"}`}
      data-testid="main"
    >
      <Header
        onChangeLang={setCurrentLang}
        lang={currentLang as langType}
        identifier="header"
      />
      <Landing onClickAction={onHideLanding} />
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
        <Modal
          title={modalContent.title}
          content={modalContent.data}
          onClose={() => showHideModal(false)}
        />
      )}
    </div>
  );
}
