import { createScene } from "@smb/display";

import "./style.scss";

type Props = {
  /**
   * Name of .glb file
   */
  fileName: string;
};

export const Image3D = (props: Props) => {
  const { fileName } = props;

  const render3D = (ref: Element) =>
    ref ? createScene(ref, `assets/glb/${fileName}`) : null;

  return (
    <div
      id="test"
      className="mfk-image3D-wrapper"
      ref={(ref: HTMLDivElement) => render3D(ref)}
    />
  );
};
