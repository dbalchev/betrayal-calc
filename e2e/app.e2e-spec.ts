import { BetrayalPage } from './app.po';

describe('betrayal App', function() {
  let page: BetrayalPage;

  beforeEach(() => {
    page = new BetrayalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
