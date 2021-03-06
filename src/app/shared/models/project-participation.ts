import { Description } from './description';
import { Project } from './project';
export class ProjectParticipation {
  Days: number;
  Description: string;
  DescriptionResolved: string;
  Descriptions: Array<Description>;
  Employee: Employee;
  From: Date;
  FromEffective: Date;
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
  TasksResolved: string;
  Title: string;
  TitleResolved: string;
  To: Date;
  ToEffective: Date;
  ToPlanned: Date;
  TotalHoursEffective: number;
  ToYear: string;
  Warnings: string;
  WorkingForCustomerSince: Date;
  WorkingForCustomerSinceText: string;
}
