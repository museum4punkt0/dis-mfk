import { MouseEventHandler, useEffect, useState } from "react";
import { Image3D, Text } from "components/atoms";

import { FaArrowLeft, FaSyncAlt } from "react-icons/fa";
import "./style.scss";
import { ComponentProps } from "types";

type Props = {
  /**
   * Modal content
   */
  content: string;
  /**
   * Modal close action
   */
  onClose: MouseEventHandler;
  /**
   * Modal role (need for testing)
   */
  role?: string;
} & ComponentProps;

export const Modal = (props: Props) => {
  const { content, onClose, role = "modal", identifier } = props;
  //Need to change any for different dataType
  const [jsonData, setJsonData] = useState<any | null>(null);

  useEffect(() => {
    if (jsonData === null) {
      setJsonData(require(`assets/glb/${content}`));
    }
  }, [content, jsonData]);
  return (
    <div data-testid={identifier} role={role} className="mfk-modal">
      <div className={"mfk-modal--content"}>
        <div className="mfk-modal--title">
          <span className="mfk-modal--close" onClick={onClose}>
            <FaArrowLeft />
          </span>
          <Text type="subtitle1">{jsonData && jsonData.title}</Text>
        </div>
        <div className="mfk-modal--settings">
          <div className="mfk-modal--settings-item">
            <FaSyncAlt />
          </div>
        </div>
        {jsonData && <Image3D fileName={content} identifier="3d-object" />}
      </div>
    </div>
  );
};
