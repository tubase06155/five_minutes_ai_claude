import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });

// Force all framer-motion elements visible by disabling animations
await page.addStyleTag({ content: `
  * {
    animation: none !important;
    transition: none !important;
  }
  [style*="opacity: 0"] { opacity: 1 !important; }
  [style*="opacity:0"] { opacity: 1 !important; }
` });

// Scroll through entire page to trigger intersection observers
await page.evaluate(async () => {
  await new Promise(resolve => {
    let totalHeight = 0;
    const step = 300;
    const timer = setInterval(() => {
      window.scrollBy(0, step);
      totalHeight += step;
      if (totalHeight >= document.body.scrollHeight) {
        clearInterval(timer);
        window.scrollTo(0, 0);
        resolve();
      }
    }, 50);
  });
});

await new Promise(r => setTimeout(r, 2000));
await page.screenshot({ path: '../screenshot_current.png', fullPage: true });
console.log('Full screenshot saved');

// Mobile
await page.setViewport({ width: 390, height: 844 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
await page.addStyleTag({ content: `* { animation: none !important; transition: none !important; } [style*="opacity: 0"] { opacity: 1 !important; }` });
await page.evaluate(async () => {
  await new Promise(resolve => {
    let total = 0;
    const timer = setInterval(() => {
      window.scrollBy(0, 300);
      total += 300;
      if (total >= document.body.scrollHeight) { clearInterval(timer); window.scrollTo(0,0); resolve(); }
    }, 50);
  });
});
await new Promise(r => setTimeout(r, 1000));
await page.screenshot({ path: '../screenshot_mobile.png', fullPage: true });
console.log('Mobile screenshot saved');

await browser.close();
