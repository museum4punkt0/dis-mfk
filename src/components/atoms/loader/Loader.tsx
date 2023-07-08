import { RotatingLines } from "react-loader-spinner";
import { ComponentProps } from "types";

import "./style.scss";

export const Loader = (props: ComponentProps) => {
  const { identifier } = props;
  return (
    <div className="mfk-loader" data-testid={identifier}>
      <RotatingLines
        strokeColor="#042f70"
        strokeWidth="3"
        animationDuration="1"
        width="80"
        visible={true}
      />
    </div>
  );
};
