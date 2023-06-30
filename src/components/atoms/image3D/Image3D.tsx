import { ReactNode } from "react";
import { ComponentProps } from "types";

import "./style.scss";

type Props = {
  /**
   * 3D Object based on Viewer from @smb/display library
   */
  displayObject: ReactNode;
} & ComponentProps;

export const Image3D = (props: Props) => {
  const { displayObject, identifier } = props;

  return (
    <div data-testid={identifier} className="mfk-image3D-wrapper">
      {displayObject}
    </div>
  );
};
