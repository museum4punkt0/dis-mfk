import { MouseEventHandler } from "react";

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
