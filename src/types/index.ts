type RootStackParamList = {
  Welcome: undefined;
  HealthConcern: undefined;
  DietChoice: undefined;
  AllergiesAlertScreen: undefined;
  PersonalizeVitaminScreen: undefined;
};

type Question = {
  key: string;
  label: string;
  options: string[];
  value: string | null;
};

type CatalogQuestion = {
  key: string;
  label: string;
  options: string[];
};

type Diet = { id: number; name: string; tool_tip?: string };


export type { RootStackParamList, Question, CatalogQuestion, Diet };
