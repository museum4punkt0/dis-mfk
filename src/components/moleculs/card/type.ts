import { MouseEventHandler } from "react";
import { ComponentProps } from "types";

export type CardType = {
  /**
   * unique id
   */
  id: string;
  /**
   * Type should be 1 or 2
   */
  type: number;
  /**
   * Date value
   */
  date: string;
  /**
   * Title value
   */
  title: string;
  /**
   * Description value
   */
  description: string;
  /**
   * Click action
   */
  onClick: MouseEventHandler;
} & ComponentProps;
