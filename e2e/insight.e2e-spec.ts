import { browser, by, element } from 'protractor';

describe('insight application', () => {
  it('should filter employee by name', async () => {
    await browser.get('employees');
    await element(by.id('tableFilter')).sendKeys('christian moser');
    const count = await element.all(by.css('mat-row')).count();
    await expect(count).toEqual(1);
  });

  it('should show employee phone number', async () => {
    await browser.get('employees/moc');
    expect(await element(by.id('phone-business')).getText()).toBe(
      '+41 44 733 6617'
    );
    expect(await element(by.id('phone-private')).getText()).toBe(
      '+41 79 261 6814'
    );
  });

  it('should show employee description in En and De', async () => {
    await browser.get('employees/moc');
    expect(await element(by.id('aboutDe')).getText()).toContain(
      'Christian Moser leitet bei Zühlke seit 2014 die Competence Unit .NET'
    );
    expect(await element(by.id('aboutEn')).getText()).toContain(
      'Since 2014 Christian Moser is head of the competence unit .NET with around 40'
    );
  });
});
