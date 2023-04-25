import { MouseEventHandler } from "react";
import "./style.scss";

type Props = {
  /**
   * Modal content
   */
  content: string | null;
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
          Close
        </span>
        {content}
      </div>
    </div>
  );
};
