export type langType = "en" | "de";

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
  //TODO: Should remove after finish implementation with @smb/display
  //sketchfab?: string;
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
