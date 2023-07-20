import { MouseEventHandler, useState, useEffect } from "react";
import { Image3D, Loader, Text } from "components/atoms";
import { ComponentProps } from "types";
import { Viewer } from "@smb/display";

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

export const Modal = (props: Props) => {
  const { title, content, onClose, role = "modal", identifier } = props;

  const [isFullScreen, setIsFullScreen] = useState<Boolean>(false);
  const [isToggled, setIsToggled] = useState<Boolean>(false);
  const [is3dObjectloaded, setIs3dObjectloaded] = useState<Boolean>(false);
  const [isLoadingText, setIsLoadingText] = useState<Boolean>(false);

  const toggleFullScreen = () => setIsFullScreen((oldState) => !oldState);
  const toggleDescription = () => setIsToggled((oldState) => !oldState);

  //Add this constant for detecting canvas object before render.
  const ViewerWrapper = Viewer({
    src: `assets/glb/${content}`,
    baseResourceUrl: process.env.REACT_APP_API_PATH as string,
  });

  useEffect(() => {
    //FIXME: This is a hardcoded property that help to detect loading state in Viewer from @smb/display library
    const loadindData = ViewerWrapper.props.children[0].props.children[1].type;
    if (loadindData !== "progress") {
      //setTimeout need to show Loader more then 1s, because data loads quickly and loader dissapear in less then 300ms
      setTimeout(() => {
        setIs3dObjectloaded(true);
      }, 1000);
    }
    //setTimeout need to show Loader text if glb is havy and need more then 5 seconds for loading
    setTimeout(() => {
      setIsLoadingText(true);
    }, 5000);
  }, [ViewerWrapper]);

  return (
    <div data-testid={identifier} role={role} className="mfk-modal">
      <div
        id="mfk-modal"
        className={`mfk-modal--content ${
          isFullScreen ? "mfk-image3D--full" : ""
        } ${isToggled ? "mfk-toggle--content" : ""}`}
      >
        <div className="mfk-modal--title">
          <span className="mfk-modal--close" onClick={onClose}>
            <FaArrowLeft />
          </span>
          <Text type="subtitle1">{title}</Text>
        </div>
        <div className={!is3dObjectloaded ? "mfk-hide-3D" : ""}>
          <Image3D displayObject={ViewerWrapper} identifier="3d-object" />
        </div>
        {is3dObjectloaded ? (
          <>
            <span className="mfk-modal--show-full" onClick={toggleFullScreen}>
              show more
            </span>
            <span className="mfk-modal--hide-full" onClick={toggleFullScreen}>
              <IoCloseSharp />
            </span>
            <span
              className="mfk-modal--description-toggle"
              onClick={toggleDescription}
            >
              <FaGripLines />
            </span>
          </>
        ) : (
          <div className="mfk-modal--loader">
            <Loader type={2} />
            {isLoadingText && (
              <Text type="subtitle2">
                3D Element is still loading, don't worry...
              </Text>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
