import { Skill } from './skill';
export class Description {
  Id: number;
  Language: number;
  LanguageText: string;
  OverrideOfficialDescription: boolean;
  ProjectId: number;
  ReleaseStateDe: number;
  ReleaseStateEn: number;
  Skills: Array<Skill>;
}
