import { Training } from './training';

export class TrainingRow {

  id: number;
  name: string;
  shortDescription: string;
  averageRating: number;

  constructor(t: Training) {
    this.id = t.Id;
    this.name = t.Name;
    this.shortDescription = t.ShortDescription;
    this.averageRating = t.AverageRating;
  }
}
