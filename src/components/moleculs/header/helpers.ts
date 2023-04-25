import { langType } from "types";

export const langsData: { [key in langType]: string } = {
  en: "English",
  de: "Deutsch",
};

export const dropdownLangOptions = Object.keys(langsData).map((item) => ({
  option: item,
  label: langsData[item as keyof typeof langsData],
}));
