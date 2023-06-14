import "./style.scss";
import { TextComponentType } from "./type";

export const Text = (props: TextComponentType) => {
  const { children, type = "body", additionalClass = "" } = props;

  return <p className={`mfk-text--${type} ${additionalClass}`}>{children}</p>;
};
