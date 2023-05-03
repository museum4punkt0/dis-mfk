import { useState, useEffect } from "react";
import { Loader } from "components/atoms";
import { Header, Modal } from "components/moleculs";
import { Content } from "./component";
import { mockData } from "api/mockData";
import { mockDataType, langType } from "types";
import i18n from "i18next";

import "./style.scss";

export default function Main() {
  const [currentLang, setCurrentLang] = useState(i18n.language as langType);
  const [exhiditsData, setExhiditsData] = useState<mockDataType | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");

  useEffect(() => {
    if (exhiditsData === null) {
      //FIXME: Need to emulate receive data from request
      setTimeout(() => {
        setExhiditsData(mockData);
      }, 1000);
    }
  }, [exhiditsData]);

  const showHideModal = (show: boolean, content?: string): void => {
    setShowModal(show);
    if (content) setModalContent(content);
  };

  return (
    <>
      <Header onChangeLang={setCurrentLang} lang={currentLang as langType} />
      {exhiditsData ? (
        <Content
          data={exhiditsData}
          currentLang={currentLang}
          onClickAction={showHideModal}
        />
      ) : (
        <Loader />
      )}

      {showModal && (
        <Modal content={modalContent} onClose={() => showHideModal(false)} />
      )}
    </>
  );
}
