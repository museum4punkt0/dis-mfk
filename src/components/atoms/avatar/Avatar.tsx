import emptyImage from "assets/empty.jpeg";
import { ComponentProps } from "types";

import "./style.scss";

type Props = {
  /**
   * Avatar image
   */
  url?: string;
} & ComponentProps;

export const Avatar = (props: Props) => {
  const { url = emptyImage, identifier } = props;
  return (
    <div
      data-testid={identifier}
      className="mfk-avatar"
      style={{
        background: `url(${url}) no-repeat center center/cover`,
      }}
    ></div>
  );
};
