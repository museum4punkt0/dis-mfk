import "./style.scss";

type Props = {
  /**
   * Avatar image
   */
  url?: string;
};

export const Avatar = (props: Props) => {
  const { url = "https://bit.ly/3hLadSX" } = props;
  return (
    <div
      className="mfk-avatar"
      style={{
        background: `url(${url}) no-repeat right center/cover`,
      }}
    ></div>
  );
};
