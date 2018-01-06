import { Skill } from './skill';
export class Training {
  AverageRating: number;
  Deprecated: boolean;
  Id: number;
  LevelText: string;
  Match: number;
  Name: string;
  NumberOfRatings: number;
  Participants: number;
  ShortDescription: string;
  Skills: Array<Skill>;
  SortDate: Date;
  Trainer: string;
  Type: number;
  TypeText: string;
}
