import { EmployeeSkill } from '../../../../shared/models/employee-skill';
import { SkillListComponent } from './skill-list.component';

describe('Given experience points of 55, when calling the calculateSkillFontSize function', () => {
  const component = new SkillListComponent();
  const skill = new EmployeeSkill();
  skill.ExperiencePoints = 55;

  it('should return 13.75 as font size', () => {
    const fontSize = component.calculateSkillFontSize(skill);
    expect(fontSize).toEqual(13.75);
  });
});
