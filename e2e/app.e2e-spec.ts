import { EnvironmentDemoPage } from './app.po';

describe('environment-demo App', () => {
  let page: EnvironmentDemoPage;

  beforeEach(() => {
    page = new EnvironmentDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
