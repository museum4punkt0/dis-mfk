export type TextType = "title" | "subtitle1" | "subtitle2" | "body" | "caption";
export type TextComponentType = {
  /**
   * Text value
   */
  children: string;
  /**
   * Text type
   */
  type?: TextType;
  additionalClass?: string;
};
