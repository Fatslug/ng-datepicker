import { DatepickerPage } from './app.po';

describe('datepicker App', function() {
  let page: DatepickerPage;

  beforeEach(() => {
    page = new DatepickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
