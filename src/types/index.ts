export type langType = "en" | "de";

export type mockDataType = {
  id: string;
  type: number;
  date: string;
  title: {
    [key in langType]: string;
  };
  description: {
    [key in langType]: string;
  };
  sketchfab?: string;
}[];
