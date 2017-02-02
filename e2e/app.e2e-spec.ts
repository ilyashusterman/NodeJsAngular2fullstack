import { NodeJsAngular2fullstackPage } from './app.po';

describe('node-js-angular2fullstack App', function() {
  let page: NodeJsAngular2fullstackPage;

  beforeEach(() => {
    page = new NodeJsAngular2fullstackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
