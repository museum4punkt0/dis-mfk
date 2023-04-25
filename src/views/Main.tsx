import { useState } from "react";
import { Text } from "components/atoms";
import { Header, Card, Modal } from "components/moleculs";
import { mockData } from "api/mockData";

import "./style.scss";

export default function Main() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const showHideModal = (show: boolean, content?: string): void => {
    setShowModal(show);
    if (content) setModalContent(content);
  };
  return (
    <>
      <Header />
      <div className="mfk-wrapper">
        <div className="mfk-timeline--container">
          {mockData.map((item, idx) => (
            <div
              key={`${item.date}-idx`}
              className={`mfk-timeline--block mfk-timeline--block-${
                idx % 2 === 0 ? "right" : "left"
              }`}
            >
              <Text type="caption" additionalClass="mfk-timeline--date">
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
                type={item.type}
                title={item.title}
                description={item.description}
                onClick={() => {
                  showHideModal(true, item.title);
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <Modal content={modalContent} onClose={() => showHideModal(false)} />
      )}
    </>
  );
}
