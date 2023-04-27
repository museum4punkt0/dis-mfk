type mockDataType = {
  id: string;
  type: number;
  date: string;
  title: string;
  description: string;
  sketchfab?: string;
}[];

export const mockData: mockDataType = [
  {
    id: "1",
    type: 1,
    date: "1800",
    title: "First title",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate.`,
  },
  {
    id: "2",
    type: 2,
    date: "1850",
    title: "Second title",
    description: `Lorem ipsum dolor sit amet`,
    sketchfab:
      "https://sketchfab.com/models/8f25337b683d415e8f393eff60bc2aa1/embed?autostart=1",
  },
  {
    id: "3",
    type: 2,
    date: "1900",
    title: "Third title",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt`,
    sketchfab:
      "https://sketchfab.com/models/e57fe28954084cfc9acce338a9eeaea2/embed?autostart=1",
  },
  {
    id: "4",
    type: 1,
    date: "1950",
    title: "First title",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate.`,
  },
  {
    id: "5",
    type: 1,
    date: "1960",
    title: "First title",
    description: `Lorem ipsum `,
  },
  {
    id: "6",
    type: 1,
    date: "1970",
    title: "First title",
    description: `Lorem ipsum `,
  },
  {
    id: "7",
    type: 2,
    date: "1980",
    title: "First title",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate.`,
    sketchfab:
      "https://sketchfab.com/models/24ef9864eaea41aabaf3da448e7fe32c/embed?autostart=1",
  },
  {
    id: "8",
    type: 1,
    date: "1990",
    title: "First title",
    description: `Lorem ipsum `,
  },
  {
    id: "9",
    type: 1,
    date: "2000",
    title: "First title",
    description: `Lorem ipsum Lorem igna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate. `,
  },
];
