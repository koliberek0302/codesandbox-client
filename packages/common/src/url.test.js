import { getSandboxOptions } from './url.ts';

function testSandboxOptions(url: string) {
  expect(getSandboxOptions(url)).toMatchSnapshot();
}

describe('url parameters', () => {
  it('keeps everything false on normal urls', () => {
    testSandboxOptions('https://csb-bogdan.dev/s/new');
  });

  it('sets current module if there is one', () => {
    testSandboxOptions('https://csb-bogdan.dev/s/new?module=test');
  });

  it('sets preview view', () => {
    testSandboxOptions('https://csb-bogdan.dev/s/new?view=preview');
  });

  it('sets editor view', () => {
    testSandboxOptions('https://csb-bogdan.dev/s/new?view=editor');
  });

  it("doesn't set unknown fields", () => {
    testSandboxOptions('https://csb-bogdan.dev/s/new?view=both');
  });

  it('can hide navigation', () => {
    testSandboxOptions('https://csb-bogdan.dev/s/new?hidenavigation=1');
  });

  it('can autoresize', () => {
    testSandboxOptions('https://csb-bogdan.dev/s/new?autoresize=1');
  });

  it('can handle multiple options', () => {
    testSandboxOptions(
      'https://csb-bogdan.dev/s/new?autoresize=1&view=editor&module=test&hidenavigation=1'
    );
  });
});
