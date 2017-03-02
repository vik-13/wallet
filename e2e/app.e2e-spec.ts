import { WalletPage } from './app.po';

describe('wallet App', () => {
  let page: WalletPage;

  beforeEach(() => {
    page = new WalletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
