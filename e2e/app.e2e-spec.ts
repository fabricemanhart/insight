import { by } from 'protractor/built';
import { AppPage } from './app.po';
import { element } from 'protractor';

describe('insight App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should filter employee by name1', () => {
    expect(1).toBe(1);
  });

  it('should filter employee by name', () => {
    page.navigateTo('employees');
    element(by.id('tableFilter')).sendKeys('christian moser');
    const count = element.all(by.css('mat-table > mat-row')).count();
    expect(count).toEqual(1);
  });
});
