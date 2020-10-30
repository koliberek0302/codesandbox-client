export default ({
  feedback,
  sandboxId,
  username,
  email,
  version,
  browser,
}: {
  [key: string]: string;
}) =>
  fetch('https://s2973.sse.csb-bogdan.dev/inbound-message', {
    method: 'POST',
    body: JSON.stringify({
      name: username,
      email,
      body:
        feedback +
        '\n\nSandbox: https://csb-bogdan.dev/s/' +
        sandboxId +
        '\nVersion: ' +
        version +
        '\nBrowser: ' +
        browser,
    }),
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
  });
