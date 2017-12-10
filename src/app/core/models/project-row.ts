import { Project } from './project';
import { ProjectParticipation } from './project-participation';
export class ProjectRow {
  days: number;
  fromPlanned: Date;
  function: string;
  hourlyRate: number;
  percentageEffective: number;
  priority: number;
  projectCode: string;
  projectName: string;
  phaseCode: string;
  phaseName: string;
  phaseStateText: string;
  projectManagerCode: string;
  engagementManagerCode: string;
  staffingManagerCode: string;
  businessDeveloperCode: string;
  toPlanned: Date;

  constructor(p: ProjectParticipation) {
    this.days = p.Days;
    this.fromPlanned = p.FromPlanned;
    this.function = p.Function;
    this.hourlyRate = p.HourlyRate;
    this.percentageEffective = p.PercentageEffective;
    this.priority = p.Priority;
    this.projectCode = p.Project.Code;
    this.projectName = p.Project.Name;
    this.phaseCode = p.Phase.Code;
    this.phaseName = p.Phase.Name;
    this.phaseStateText = p.Phase.StateText;
    this.projectManagerCode = p.Project.ProjectManager.Code;
    this.engagementManagerCode = p.Project.EngagementManager.Code;
    this.staffingManagerCode = p.Project.StaffingManager.Code;
    this.businessDeveloperCode = p.Project.BusinessDeveloper.Code;
    this.toPlanned = p.ToPlanned;
  }
}
