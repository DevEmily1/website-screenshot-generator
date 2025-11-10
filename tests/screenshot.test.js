onst { launchBrowser } = require('../src/utils/browser');
const { captureScreenshot } = require('../src/utils/screenshot');

describe('Screenshot Utility', () => {
  let browser;

  beforeAll(async () => {
    browser = await launchBrowser();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should capture a screenshot buffer', async () => {
    const screenshot = await captureScreenshot(browser, {
      url: 'https://example.com',
      waitUntil: 'networkidle2',
      delay: 1000,
      viewportWidth: 800,
      scrollToBottom: false
    });

    expect(Buffer.isBuffer(screenshot)).toBe(true);
    expect(screenshot.length).toBeGreaterThan(0);
  });
});