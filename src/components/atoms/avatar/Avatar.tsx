import emptyImage from "assets/empty.jpeg";
import { ComponentProps } from "types";

import "./style.scss";

type Props = {
  /**
   * Avatar image
   */
  url?: string;
  /**
   * Avatar role (need for testing)
   */
  role?: string;
} & ComponentProps;

export const Avatar = (props: Props) => {
  const { url = emptyImage, identifier, role = "avatar" } = props;
  return (
    <div
      data-testid={identifier}
      role={role}
      className="mfk-avatar"
      style={{
        background: `url(${url}) no-repeat center top/cover`,
      }}
    ></div>
  );
};
