import { CatalogQuestion } from "../types";

export const CATALOG: CatalogQuestion[] = [
  {
    key: "sunExposure",
    label: "Is your daily exposure to sun limited?",
    options: ["Yes", "No"],
  },
  {
    key: "smoke",
    label: "Do you currently smoke (tobacco or marijuana)?",
    options: ["Yes", "No"],
  },
  {
    key: "alcohol",
    label: "On average, how many alcoholic beverages do you have in a week?",
    options: ["0-1", "2-5", "5+"],
  },
];
