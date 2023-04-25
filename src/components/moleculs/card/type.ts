import { MouseEventHandler } from "react";

export type CardType = {
  /**
   * Type should be 1 or 2
   */
  type: number;
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
};
