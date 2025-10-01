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

type VitaminAnswer = {
  sunExposure: string | null;
  smoke: string | null;
  alcohol: string | null;
};

type HealthconcernType = { id: number; label: string };
type Diet = { id: number; name: string; tool_tip?: string };
type Allergies = {id: number; name: string };

export type { RootStackParamList, Question, CatalogQuestion, Diet, HealthconcernType, Allergies, VitaminAnswer };
