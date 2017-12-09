import { Project } from './project';
export class ProjectParticipation {
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
  Phase: Phase;
  Priority: number;
  Project: Project;
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
