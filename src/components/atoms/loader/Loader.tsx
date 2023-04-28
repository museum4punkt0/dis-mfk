import { RotatingLines } from "react-loader-spinner";

import "./style.scss";

export const Loader = () => {
  return (
    <div className="mfk-loader">
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
