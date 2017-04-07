import { SoccerLeaguePage } from './app.po';

describe('soccer-league App', () => {
  let page: SoccerLeaguePage;

  beforeEach(() => {
    page = new SoccerLeaguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
