import { RotatingLines } from "react-loader-spinner";
import { ComponentProps } from "types";

import "./style.scss";

export const Loader = (props: ComponentProps) => {
  const { identifier } = props;
  return (
    <div className="mfk-loader" data-testid={identifier}>
      <RotatingLines
        strokeColor="#0B4395"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
