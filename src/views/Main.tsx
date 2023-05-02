import { useState, useRef, useEffect } from "react";
import { Text, Loader } from "components/atoms";
import { Header, Card, Modal } from "components/moleculs";
import { mockData } from "api/mockData";
import { mockDataType, langType } from "types";
import i18n from "i18next";

import "./style.scss";

export default function Main() {
  const refContainer = useRef<HTMLDivElement | null>(null);

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
    } else if (refContainer.current) {
      refContainer.current.scrollIntoView({
        behavior: "smooth",
      });
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
        <div className="mfk-wrapper">
          <div className="mfk-timeline--container">
            {exhiditsData.map((item, idx) => (
              <div
                key={`${item.date}-idx`}
                ref={
                  window.location.search === `?id=${item.id}`
                    ? refContainer
                    : null
                }
                className={`mfk-timeline--block mfk-timeline--block-${
                  idx % 2 === 0 ? "right" : "left"
                }`}
              >
                <Text
                  type="caption"
                  additionalClass={`mfk-timeline--date ${
                    item.type === 1
                      ? "mfk-timeline--date-light"
                      : "mfk-timeline--date-dark"
                  }`}
                >
                  {item.date}
                </Text>
                <div
                  className={`mfk-timeline--marker ${
                    item.type === 1
                      ? "mfk-timeline--marker-light"
                      : "mfk-timeline--marker-dark"
                  }`}
                ></div>
                <Card
                  id={item.id}
                  type={item.type}
                  title={item.title[currentLang as langType]}
                  description={item.description[currentLang as langType]}
                  onClick={() => {
                    showHideModal(true, item.sketchfab);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}

      {showModal && (
        <Modal content={modalContent} onClose={() => showHideModal(false)} />
      )}
    </>
  );
}
