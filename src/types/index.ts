export type langType = "en" | "de" | "ge";

export type mockDataType = {
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
  glbJson?: {
    [key in langType]: string;
  };
}[];

export type ComponentProps = {
  /**
   * Optional element identifier, use e.g. for data-testid attribute
   */
  identifier?: string;
};
