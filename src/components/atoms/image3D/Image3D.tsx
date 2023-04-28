import "./style.scss";

type Props = {
  /**
   * Modal content
   */
  src: string;
};

export const Image3D = (props: Props) => {
  const { src } = props;
  return (
    <div className="mfk-image3D-wrapper">
      <iframe
        title="3D visualisation of an item"
        frameBorder="0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        width="100%"
        height="100%"
        src={src}
      ></iframe>
    </div>
  );
};
