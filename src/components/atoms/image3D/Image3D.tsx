type Props = {
  /**
   * Modal content
   */
  src: string;
};

export const Image3D = (props: Props) => {
  const { src } = props;
  return (
    <div
      //TODO: Move to scss
      style={{ width: "100%", height: "100%" }}
    >
      <iframe
        //TODO: add dynamic title from mockData
        title="Walkman WM-F35 SONY"
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
