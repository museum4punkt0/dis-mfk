import { RotatingLines } from "react-loader-spinner";
import { ComponentProps } from "types";

import "./style.scss";

type Props = {
  /**
   * Type of Loader (1 - general, 2 - animated 3D)
   */
  type?: 1 | 2;
} & ComponentProps;

const circleLength = 15;

export const Loader = (props: Props) => {
  const { identifier, type = 1 } = props;
  return (
    <div className="mfk-loader" data-testid={identifier}>
      {type === 1 ? (
        <RotatingLines
          strokeColor="#042f70"
          strokeWidth="3"
          animationDuration="1"
          width="80"
          visible={true}
        />
      ) : (
        <>
          {Array(circleLength)
            .fill("")
            .map((_, idx) => (
              <div
                key={`circ-${idx + 1}`}
                className={`circ circ-${idx + 1}`}
              ></div>
            ))}
        </>
      )}
    </div>
  );
};
