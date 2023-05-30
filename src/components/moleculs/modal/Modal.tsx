import { MouseEventHandler, useEffect, useState } from "react";
import { Image3D, Text } from "components/atoms";

import { FaArrowLeft } from "react-icons/fa";
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

  useEffect(() => {
    if (jsonData === null) {
      setJsonData(require(`assets/glb/${content}`));
    }
  }, [content, jsonData]);
  console.log(jsonData);
  return (
    <div className="mfk-modal">
      <div className="mfk-modal--header">
        <div className="mfk-modal--back" onClick={onClose}>
          <FaArrowLeft />
          <Text type="subtitle">Back to timeline</Text>
        </div>
      </div>
      <div className="mfk-modal--content">
        {/* <span className="mfk-modal-close" onClick={onClose}>
          &#x2716;
        </span> */}
        <div className="mfk-modal--title">{jsonData && jsonData.title}</div>
        {jsonData && <Image3D fileName={content} />}
      </div>
    </div>
  );
};
