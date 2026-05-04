import puppeteer from 'puppeteer';

async function scrollAndCapture(page, path, viewport) {
  await page.setViewport(viewport);
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));

  // Scroll slowly to trigger all intersection observers
  const height = await page.evaluate(() => document.body.scrollHeight);
  const step = 200;
  for (let y = 0; y <= height; y += step) {
    await page.evaluate(pos => window.scrollTo(0, pos), y);
    await new Promise(r => setTimeout(r, 80));
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1000));

  // Force all motion elements visible as fallback
  await page.evaluate(() => {
    document.querySelectorAll('[style]').forEach(el => {
      const s = el.getAttribute('style') || '';
      if (s.includes('opacity: 0') || s.includes('opacity:0')) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
    });
  });

  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path, fullPage: true });
  console.log(`Saved: ${path}`);
}

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();

await scrollAndCapture(page, '../screenshot_current.png', { width: 1440, height: 900 });
await scrollAndCapture(page, '../screenshot_mobile.png', { width: 390, height: 844 });

await browser.close();
