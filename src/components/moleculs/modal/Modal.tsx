import { MouseEventHandler, useEffect, useState } from "react";
import { Image3D, Text } from "components/atoms";

import { FaArrowLeft } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import "./style.scss";

type Props = {
  /**
   * Modal content
   */
  content: string;
  /**
   * Modal close action
   */
  onClose: MouseEventHandler;
};

export const Modal = (props: Props) => {
  const { content, onClose } = props;
  //Need to change any for different dataType
  const [jsonData, setJsonData] = useState<any | null>(null);

  const [showSettings, setShowSettings] = useState<boolean>(false);

  const openSettings = () => {
    setShowSettings((oldState) => !oldState);
  };

  useEffect(() => {
    if (jsonData === null) {
      setJsonData(require(`assets/glb/${content}`));
    }
  }, [content, jsonData]);
  return (
    <div className="mfk-modal">
      <div className="mfk-modal--header">
        <div className="mfk-modal--back" onClick={onClose}>
          <FaArrowLeft />
          <Text type="subtitle">Back to timeline</Text>
        </div>
      </div>
      <div
        className={`mfk-modal--content ${
          showSettings ? "mfk-settings-open" : ""
        }`}
      >
        <div className="mfk-modal--title">{jsonData && jsonData.title}</div>
        <div className="mfk-modal--settings">
          <div className="mfk-modal--settings-item" onClick={openSettings}>
            {showSettings ? <FaArrowLeft /> : <AiFillSetting />}
          </div>
        </div>
        {jsonData && <Image3D fileName={content} />}
      </div>
    </div>
  );
};
