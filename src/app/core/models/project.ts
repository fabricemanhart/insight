export class Project {
  Days: number;
  Description: string;
  DescriptionResolved: string;
  // Descriptions: [{Id: 44135, ReleaseStateEn: 0, ReleaseStateDe: 0, Language: 0, LanguageText: "English",…}]
  Employee: Employee;
  From: Date;
  FromPlanned: Date;
  FromYear: number;
  Function: string;
  HourlyRate: number;
  Id: number;
  ImputedMargin: number;
  IsHidden: boolean;
  LastModifiedCode: string;
  LastModifiedDate: Date;
  Percentage: number;
  PercentageEffective: number;
  // Phase: {Code: "90_TEAM_2017", VertecId: 29325339, Number: "90", Name: "Current Staff",…}
  Priority: number;
  // Project: {VertecId: 28896010, Active: false, Code: "C21068", Name: "Zurich, CompaZ",…}
  Status: number;
  StatusText: string;
  Title: string;
  TitleResolved: string;
  To: Date;
  ToPlanned: Date;
  ToYear: string;
  Warnings: string;
  WorkingForCustomerSince: Date;
  WorkingForCustomerSinceText: string;
}
