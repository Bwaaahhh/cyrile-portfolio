import { AppPortfolioPage } from './app.po';

describe('app-portfolio App', () => {
  let page: AppPortfolioPage;

  beforeEach(() => {
    page = new AppPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
