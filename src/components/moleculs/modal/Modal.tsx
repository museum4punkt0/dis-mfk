import { MouseEventHandler } from "react";
import { Image3D } from "components/atoms";
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
  return (
    <div className="mfk-modal">
      <div className="mfk-modal-content">
        <span className="mfk-modal-close" onClick={onClose}>
          &#x2716;
        </span>
        {/* TODO: Leave as alternative solution with sketchfab */}
        {/* <Image3D src={content} /> */}
        <Image3D fileName={content} />
      </div>
    </div>
  );
};
