import { MouseEventHandler } from "react";
import { Image3D, Text } from "components/atoms";

import { FaArrowLeft } from "react-icons/fa";
import "./style.scss";
import { ComponentProps } from "types";

type Props = {
  /**
   * Modal title
   */
  title: string;
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
  const { title, content, onClose, role = "modal", identifier } = props;
  return (
    <div data-testid={identifier} role={role} className="mfk-modal">
      <div className={"mfk-modal--content"}>
        <div className="mfk-modal--title">
          <span className="mfk-modal--close" onClick={onClose}>
            <FaArrowLeft />
          </span>
          <Text type="subtitle1">{title}</Text>
        </div>
        <Image3D fileName={content} identifier="3d-object" />
      </div>
    </div>
  );
};
