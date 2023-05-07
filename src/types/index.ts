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
  sketchfab?: string;
}[];
