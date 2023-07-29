export type langType = "en" | "de" | "ge";

export type apiDataType = {
  id: string;
  type: number;
  startDate: string;
  endDate?: string;
  title: {
    [key in langType]: string;
  };
  description: {
    [key in langType]: string;
  };
  glbJson?: boolean;
}[];

export type ComponentProps = {
  /**
   * Optional element identifier, use e.g. for data-testid attribute
   */
  identifier?: string;
};
