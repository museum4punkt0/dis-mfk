import { createScene } from "@smb/display";
import { ComponentProps } from "types";

import "./style.scss";

type Props = {
  /**
   * Name of .glb file
   */
  fileName: string;
} & ComponentProps;

export const Image3D = (props: Props) => {
  const { fileName, identifier } = props;

  const render3D = (ref: Element) =>
    ref ? createScene(ref, `assets/glb/${fileName}`) : null;
  return (
    <div
      data-testid={identifier}
      className="mfk-image3D-wrapper"
      ref={(ref: HTMLDivElement) => render3D(ref)}
    />
  );
};
