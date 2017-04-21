import { OslUiPage } from './app.po';

describe('osl-ui App', () => {
  let page: OslUiPage;

  beforeEach(() => {
    page = new OslUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
