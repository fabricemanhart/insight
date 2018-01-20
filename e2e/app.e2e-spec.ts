import { by } from 'protractor/built';
import { AppPage } from './app.po';
import { element } from 'protractor';

describe('insight App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should filter employee by name', async() => {
    await page.navigateTo('employees');
    await element(by.id('tableFilter')).sendKeys('christian moser');
    const count = await element.all(by.css('mat-row')).count();
    await expect(count).toEqual(1);
  });

  it('should show employee phone number', () => {
    page.navigateTo('employees/moc');
    expect(element(by.id('phone-business')).getText()).toBe('+41 44 733 6617');
    expect(element(by.id('phone-private')).getText()).toBe('+41 79 261 6814');
  });

  it('should show employee description in En and De', () => {
    page.navigateTo('employees/moc');
    expect(element(by.id('aboutDe')).getText()).toContain('Christian Moser leitet bei Zühlke seit 2014 die Competence Unit .NET');
    expect(element(by.id('aboutEn')).getText()).toContain('Since 2014 Christian Moser is head of the competence unit .NET with around 40');
  });
});
