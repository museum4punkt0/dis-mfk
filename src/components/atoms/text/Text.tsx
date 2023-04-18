import "./style.scss";

type Props = {
  /**
   * Text value
   */
  children: string;
  /**
   * Text type
   */
  type?: "title" | "subtitle" | "body" | "caption";
  additionalClass?: string;
};

export const Text = (props: Props) => {
  const { children, type = "body", additionalClass = "" } = props;

  return <p className={`mfk-text--${type} ${additionalClass}`}>{children}</p>;
};
