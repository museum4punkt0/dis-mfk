import { Viewer } from "@smb/display";
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
  return (
    <div data-testid={identifier} className="mfk-image3D-wrapper">
      <Viewer
        src={`assets/glb/${fileName}`}
        baseResourceUrl={process.env.REACT_APP_API_PATH as string}
      />
    </div>
  );
};
