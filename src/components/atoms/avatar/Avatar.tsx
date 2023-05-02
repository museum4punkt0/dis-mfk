import emptyImage from "assets/empty.jpeg";

import "./style.scss";

type Props = {
  /**
   * Avatar image
   */
  url?: string;
};

export const Avatar = (props: Props) => {
  const { url = emptyImage } = props;
  return (
    <div
      className="mfk-avatar"
      style={{
        background: `url(${url}) no-repeat center center/cover`,
      }}
    ></div>
  );
};
