import { AngularTestacularPage } from './app.po';

describe('angular-testacular App', () => {
  let page: AngularTestacularPage;

  beforeEach(() => {
    page = new AngularTestacularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
