import { MouseEventHandler } from "react";
import { Image3D, Text } from "components/atoms";
import { ComponentProps } from "types";

import { FaArrowLeft, FaGripLines } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import "./style.scss";

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

const showFullScreen = () => {
  const element = document.getElementById("mfk-modal") as HTMLDivElement;
  const fullScreenClassName = "mfk-image3D--full";
  !element.classList.contains(fullScreenClassName)
    ? element.classList.add(fullScreenClassName)
    : element.classList.remove(fullScreenClassName);
};

const toggleDescription = () => {
  const element = document.getElementById("mfk-modal") as HTMLDivElement;

  !element.classList.contains("toggle")
    ? element.classList.add("toggle")
    : element.classList.remove("toggle");
};

export const Modal = (props: Props) => {
  const { title, content, onClose, role = "modal", identifier } = props;

  return (
    <div data-testid={identifier} role={role} className="mfk-modal">
      <div id="mfk-modal" className={"mfk-modal--content"}>
        <div className="mfk-modal--title">
          <span className="mfk-modal--close" onClick={onClose}>
            <FaArrowLeft />
          </span>
          <Text type="subtitle1">{title}</Text>
        </div>
        <Image3D fileName={content} identifier="3d-object" />
        <span className="mfk-modal--show-full" onClick={showFullScreen}>
          show more
        </span>
        <span className="mfk-modal--hide-full" onClick={showFullScreen}>
          <IoCloseSharp />
        </span>
        <span
          className="mfk-modal--description-toggle"
          onClick={toggleDescription}
        >
          <FaGripLines />
        </span>
      </div>
    </div>
  );
};
